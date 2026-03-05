#!/bin/bash
# T&C Enterprises Drop-in Deployment Script
# Run this on your production server - assumes directories and SSL are already set up

set -e

echo "🚀 Starting T&C Enterprises drop-in deployment..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration - adjust these paths to match your setup
APP_DIR="/var/www/tc-enterprises.com"
REPO_DIR="$APP_DIR/repo"
CURRENT_DIR="$APP_DIR/current"
BACKUP_DIR="$APP_DIR/backups/$(date +%Y%m%d_%H%M%S)"

echo -e "${YELLOW}📁 Checking directories...${NC}"
# Only create directories if they don't exist
mkdir -p "$REPO_DIR" "$CURRENT_DIR" "$BACKUP_DIR" "$APP_DIR/logs" 2>/dev/null || true

# Clone or update repository
if [ ! -d "$REPO_DIR/.git" ]; then
    echo -e "${YELLOW}📥 Cloning repository...${NC}"
    git clone https://github.com/thadreber-web/tc-enterprises-site.git "$REPO_DIR"
else
    echo -e "${YELLOW}📦 Updating repository...${NC}"
    cd "$REPO_DIR"
    git pull origin main
fi

# Install dependencies and build
echo -e "${YELLOW}🔨 Building application...${NC}"
cd "$REPO_DIR"
if [ -f "package-lock.json" ]; then
    npm ci
else
    echo -e "${YELLOW}📦 package-lock.json not found, running npm install...${NC}"
    npm install
fi
npm run build

# Create backup of current deployment if it exists
if [ -d "$CURRENT_DIR" ] && [ "$(ls -A $CURRENT_DIR 2>/dev/null)" ]; then
    echo -e "${YELLOW}💾 Creating backup...${NC}"
    cp -r "$CURRENT_DIR"/* "$BACKUP_DIR/" 2>/dev/null || true
fi

# Deploy new version
echo -e "${YELLOW}📤 Deploying new version...${NC}"
rm -rf "$CURRENT_DIR"/*
cp -r "$REPO_DIR/." "$CURRENT_DIR/"

# Set proper permissions
echo -e "${YELLOW}🔒 Setting permissions...${NC}"
chown -R www-data:www-data "$APP_DIR" 2>/dev/null || true
chmod -R 755 "$APP_DIR"
chmod -R 775 "$APP_DIR/logs" 2>/dev/null || true

# Copy configuration files
echo -e "${YELLOW}⚙️ Installing configuration files...${NC}"
if [ -f "$CURRENT_DIR/nginx/sites-enabled/tc-enterprises.com.conf" ]; then
    cp "$CURRENT_DIR/nginx/sites-enabled/tc-enterprises.com.conf" /etc/nginx/sites-enabled/ 2>/dev/null || echo "Nginx config already exists or no permissions"
fi

if [ -f "$CURRENT_DIR/nginx/tc-enterprises.service" ]; then
    cp "$CURRENT_DIR/nginx/tc-enterprises.service" /etc/systemd/system/ 2>/dev/null || echo "Systemd service already exists or no permissions"
fi

# Reload systemd if service file was copied
if [ -f /etc/systemd/system/tc-enterprises.service ]; then
    systemctl daemon-reload 2>/dev/null || echo "Cannot reload systemd (no permissions or not available)"
fi

echo -e "${GREEN}✅ Deployment files ready!${NC}"
echo -e "${YELLOW}📋 Manual steps you may need to complete:${NC}"
echo -e "   1. Test nginx: ${GREEN}sudo nginx -t${NC}"
echo -e "   2. Reload nginx: ${GREEN}sudo systemctl reload nginx${NC}"
echo -e "   3. Enable service: ${GREEN}sudo systemctl enable tc-enterprises${NC}"
echo -e "   4. Start service: ${GREEN}sudo systemctl start tc-enterprises${NC}"
echo -e "   5. Set environment variables in systemd service${NC}"
echo -e "${GREEN}🌐 Site should be available at https://tc-enterprises.com${NC}"