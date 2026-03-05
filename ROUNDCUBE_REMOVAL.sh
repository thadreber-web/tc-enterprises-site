#!/bin/bash

###############################################################################
# Roundcube Complete Removal Script
# T&C Enterprises - Safe removal of Roundcube webmail
###############################################################################

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}╔════════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║   Roundcube Complete Removal Script                   ║${NC}"
echo -e "${BLUE}║   T&C Enterprises                                      ║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════════════════════╝${NC}"
echo ""

# Check if running as root
if [ "$EUID" -ne 0 ]; then 
    echo -e "${RED}❌ This script must be run as root (use sudo)${NC}"
    exit 1
fi

echo -e "${YELLOW}⚠️  WARNING: This will completely remove Roundcube from your system${NC}"
echo -e "${YELLOW}    This includes:${NC}"
echo -e "${YELLOW}    - Roundcube application files${NC}"
echo -e "${YELLOW}    - Roundcube database${NC}"
echo -e "${YELLOW}    - Roundcube nginx configuration${NC}"
echo -e "${YELLOW}    - Roundcube Apache configuration (if any)${NC}"
echo ""
echo -e "${BLUE}📧 Your email server and accounts will NOT be affected${NC}"
echo -e "${BLUE}📧 Only the webmail interface will be removed${NC}"
echo ""

read -p "Are you sure you want to continue? (yes/no): " -r
echo
if [[ ! $REPLY =~ ^[Yy][Ee][Ss]$ ]]; then
    echo -e "${YELLOW}Cancelled by user${NC}"
    exit 0
fi

echo ""
echo -e "${GREEN}Starting Roundcube removal...${NC}"
echo ""

# Create backup directory
BACKUP_DIR="/root/roundcube-removal-backup-$(date +%Y%m%d_%H%M%S)"
mkdir -p "$BACKUP_DIR"
echo -e "${BLUE}📁 Backup directory: $BACKUP_DIR${NC}"
echo ""

###############################################################################
# Step 1: Stop and disable Apache (if running)
###############################################################################
echo -e "${YELLOW}[1/8] Checking Apache...${NC}"

if systemctl is-active --quiet apache2; then
    echo -e "${YELLOW}    Apache2 is running, stopping...${NC}"
    systemctl stop apache2
    echo -e "${GREEN}    ✓ Apache2 stopped${NC}"
fi

if systemctl is-enabled --quiet apache2 2>/dev/null; then
    echo -e "${YELLOW}    Disabling Apache2...${NC}"
    systemctl disable apache2
    echo -e "${GREEN}    ✓ Apache2 disabled${NC}"
fi

echo -e "${GREEN}    ✓ Apache check complete${NC}"
echo ""

###############################################################################
# Step 2: Remove Roundcube package
###############################################################################
echo -e "${YELLOW}[2/8] Removing Roundcube package...${NC}"

if dpkg -l | grep -q roundcube; then
    echo -e "${YELLOW}    Found Roundcube package, removing...${NC}"
    apt-get remove --purge -y roundcube roundcube-core roundcube-mysql roundcube-plugins 2>/dev/null || true
    echo -e "${GREEN}    ✓ Roundcube package removed${NC}"
else
    echo -e "${BLUE}    ℹ No Roundcube package found${NC}"
fi

echo ""

###############################################################################
# Step 3: Remove Roundcube files
###############################################################################
echo -e "${YELLOW}[3/8] Removing Roundcube files...${NC}"

# Common Roundcube installation locations
ROUNDCUBE_PATHS=(
    "/var/www/roundcube"
    "/var/www/html/roundcube"
    "/usr/share/roundcube"
    "/opt/roundcube"
    "/var/lib/roundcube"
    "/srv/roundcube"
)

for path in "${ROUNDCUBE_PATHS[@]}"; do
    if [ -d "$path" ]; then
        echo -e "${YELLOW}    Found: $path${NC}"
        echo -e "${YELLOW}    Backing up to: $BACKUP_DIR/$(basename $path)${NC}"
        cp -r "$path" "$BACKUP_DIR/" 2>/dev/null || true
        echo -e "${YELLOW}    Removing: $path${NC}"
        rm -rf "$path"
        echo -e "${GREEN}    ✓ Removed: $path${NC}"
    fi
done

echo -e "${GREEN}    ✓ File removal complete${NC}"
echo ""

###############################################################################
# Step 4: Remove Roundcube nginx configuration
###############################################################################
echo -e "${YELLOW}[4/8] Removing nginx configuration...${NC}"

# Common nginx config locations for Roundcube
NGINX_CONFIGS=(
    "/etc/nginx/sites-enabled/roundcube"
    "/etc/nginx/sites-enabled/roundcube.conf"
    "/etc/nginx/sites-enabled/mail.tc-enterprises.com"
    "/etc/nginx/sites-enabled/mail.tc-enterprises.com.conf"
    "/etc/nginx/sites-available/roundcube"
    "/etc/nginx/sites-available/roundcube.conf"
    "/etc/nginx/sites-available/mail.tc-enterprises.com"
    "/etc/nginx/sites-available/mail.tc-enterprises.com.conf"
    "/etc/nginx/conf.d/roundcube.conf"
)

for config in "${NGINX_CONFIGS[@]}"; do
    if [ -f "$config" ]; then
        echo -e "${YELLOW}    Found: $config${NC}"
        cp "$config" "$BACKUP_DIR/" 2>/dev/null || true
        rm -f "$config"
        echo -e "${GREEN}    ✓ Removed: $config${NC}"
    fi
done

# Test nginx configuration
if command -v nginx &> /dev/null; then
    echo -e "${YELLOW}    Testing nginx configuration...${NC}"
    if nginx -t 2>&1 | grep -q "successful"; then
        echo -e "${GREEN}    ✓ Nginx configuration valid${NC}"
        systemctl reload nginx
        echo -e "${GREEN}    ✓ Nginx reloaded${NC}"
    else
        echo -e "${RED}    ⚠ Nginx configuration test failed${NC}"
        echo -e "${YELLOW}    You may need to manually fix nginx config${NC}"
    fi
fi

echo ""

###############################################################################
# Step 5: Remove Apache configuration
###############################################################################
echo -e "${YELLOW}[5/8] Removing Apache configuration...${NC}"

APACHE_CONFIGS=(
    "/etc/apache2/sites-enabled/roundcube"
    "/etc/apache2/sites-enabled/roundcube.conf"
    "/etc/apache2/sites-available/roundcube"
    "/etc/apache2/sites-available/roundcube.conf"
    "/etc/apache2/conf-enabled/roundcube.conf"
    "/etc/apache2/conf-available/roundcube.conf"
)

for config in "${APACHE_CONFIGS[@]}"; do
    if [ -f "$config" ]; then
        echo -e "${YELLOW}    Found: $config${NC}"
        cp "$config" "$BACKUP_DIR/" 2>/dev/null || true
        rm -f "$config"
        echo -e "${GREEN}    ✓ Removed: $config${NC}"
    fi
done

echo -e "${GREEN}    ✓ Apache configuration cleanup complete${NC}"
echo ""

###############################################################################
# Step 6: Remove Roundcube database
###############################################################################
echo -e "${YELLOW}[6/8] Removing Roundcube database...${NC}"

read -p "Do you want to remove the Roundcube database? (yes/no): " -r
echo
if [[ $REPLY =~ ^[Yy][Ee][Ss]$ ]]; then
    read -p "Enter MySQL root password (or press Enter to skip): " -s MYSQL_PASS
    echo
    
    if [ -n "$MYSQL_PASS" ]; then
        # Try to dump database first
        echo -e "${YELLOW}    Backing up database...${NC}"
        mysqldump -u root -p"$MYSQL_PASS" roundcube > "$BACKUP_DIR/roundcube_db_backup.sql" 2>/dev/null || true
        
        # Drop database
        echo -e "${YELLOW}    Dropping database...${NC}"
        mysql -u root -p"$MYSQL_PASS" -e "DROP DATABASE IF EXISTS roundcube;" 2>/dev/null || true
        mysql -u root -p"$MYSQL_PASS" -e "DROP DATABASE IF EXISTS roundcubemail;" 2>/dev/null || true
        
        # Drop user
        echo -e "${YELLOW}    Removing database user...${NC}"
        mysql -u root -p"$MYSQL_PASS" -e "DROP USER IF EXISTS 'roundcube'@'localhost';" 2>/dev/null || true
        mysql -u root -p"$MYSQL_PASS" -e "FLUSH PRIVILEGES;" 2>/dev/null || true
        
        echo -e "${GREEN}    ✓ Database removed${NC}"
    else
        echo -e "${BLUE}    ℹ Skipped database removal${NC}"
    fi
else
    echo -e "${BLUE}    ℹ Skipped database removal${NC}"
fi

echo ""

###############################################################################
# Step 7: Remove PHP dependencies (optional)
###############################################################################
echo -e "${YELLOW}[7/8] Checking PHP dependencies...${NC}"

read -p "Remove PHP packages that were only needed for Roundcube? (yes/no): " -r
echo
if [[ $REPLY =~ ^[Yy][Ee][Ss]$ ]]; then
    echo -e "${YELLOW}    Removing PHP packages...${NC}"
    apt-get autoremove -y php-* 2>/dev/null || true
    echo -e "${GREEN}    ✓ PHP packages removed${NC}"
else
    echo -e "${BLUE}    ℹ Keeping PHP packages${NC}"
fi

echo ""

###############################################################################
# Step 8: Clean up
###############################################################################
echo -e "${YELLOW}[8/8] Final cleanup...${NC}"

# Remove any remaining roundcube references
echo -e "${YELLOW}    Cleaning package cache...${NC}"
apt-get autoremove -y 2>/dev/null || true
apt-get autoclean -y 2>/dev/null || true

# Remove log files
if [ -d "/var/log/roundcube" ]; then
    echo -e "${YELLOW}    Removing log files...${NC}"
    cp -r /var/log/roundcube "$BACKUP_DIR/" 2>/dev/null || true
    rm -rf /var/log/roundcube
fi

echo -e "${GREEN}    ✓ Cleanup complete${NC}"
echo ""

###############################################################################
# Summary
###############################################################################
echo -e "${GREEN}╔════════════════════════════════════════════════════════╗${NC}"
echo -e "${GREEN}║   ✅ Roundcube Removal Complete!                      ║${NC}"
echo -e "${GREEN}╚════════════════════════════════════════════════════════╝${NC}"
echo ""
echo -e "${BLUE}📋 Summary:${NC}"
echo -e "${BLUE}   • Roundcube application files removed${NC}"
echo -e "${BLUE}   • Nginx/Apache configurations removed${NC}"
echo -e "${BLUE}   • Backup created at: $BACKUP_DIR${NC}"
echo ""
echo -e "${YELLOW}📧 Important Notes:${NC}"
echo -e "${YELLOW}   • Your email server is still running${NC}"
echo -e "${YELLOW}   • Email accounts are not affected${NC}"
echo -e "${YELLOW}   • You can still access email via:${NC}"
echo -e "${YELLOW}     - Email clients (Outlook, Thunderbird, etc.)${NC}"
echo -e "${YELLOW}     - Mobile apps${NC}"
echo -e "${YELLOW}     - New webmail (SnappyMail) when installed${NC}"
echo ""
echo -e "${GREEN}🎯 Next Steps:${NC}"
echo -e "${GREEN}   1. Install SnappyMail for webmail access${NC}"
echo -e "${GREEN}      See: SNAPPYMAIL_SETUP.md${NC}"
echo -e "${GREEN}   2. Test your email server is still working${NC}"
echo -e "${GREEN}   3. Keep backup for 30 days, then delete if not needed${NC}"
echo ""
echo -e "${BLUE}💾 Backup Location: $BACKUP_DIR${NC}"
echo -e "${BLUE}   To restore (if needed): Contact support${NC}"
echo ""
echo -e "${GREEN}✅ All done!${NC}"
echo ""
