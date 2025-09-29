#!/bin/bash
# T&C Enterprises Production Deployment Script
# Run this on your production server after initial setup

set -e

echo "🚀 Starting T&C Enterprises deployment..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
APP_DIR="/var/www/tc-enterprises.com"
REPO_DIR="$APP_DIR/repo"
CURRENT_DIR="$APP_DIR/current"
BACKUP_DIR="$APP_DIR/backups/$(date +%Y%m%d_%H%M%S)"

echo -e "${YELLOW}📁 Setting up directories...${NC}"
sudo mkdir -p "$APP_DIR" "$REPO_DIR" "$CURRENT_DIR" "$BACKUP_DIR" "$APP_DIR/logs"

# Clone or update repository
if [ ! -d "$REPO_DIR/.git" ]; then
    echo -e "${YELLOW}📥 Cloning repository...${NC}"
    sudo git clone https://github.com/thadreber-web/tc-enterprises-site.git "$REPO_DIR"
else
    echo -e "${YELLOW}📦 Updating repository...${NC}"
    cd "$REPO_DIR"
    sudo git pull origin main
fi

# Install dependencies and build
echo -e "${YELLOW}🔨 Building application...${NC}"
cd "$REPO_DIR"
sudo npm ci --production=false
sudo npm run build

# Create backup of current deployment
if [ -d "$CURRENT_DIR" ] && [ "$(ls -A $CURRENT_DIR)" ]; then
    echo -e "${YELLOW}💾 Creating backup...${NC}"
    sudo cp -r "$CURRENT_DIR"/* "$BACKUP_DIR/" 2>/dev/null || true
fi

# Deploy new version
echo -e "${YELLOW}📤 Deploying new version...${NC}"
sudo rm -rf "$CURRENT_DIR"/*
sudo cp -r "$REPO_DIR/." "$CURRENT_DIR/"

# Set proper permissions
echo -e "${YELLOW}🔒 Setting permissions...${NC}"
sudo chown -R www-data:www-data "$APP_DIR"
sudo chmod -R 755 "$APP_DIR"
sudo chmod -R 775 "$APP_DIR/logs"

# Restart services
echo -e "${YELLOW}🔄 Restarting services...${NC}"
sudo systemctl reload nginx
sudo systemctl restart tc-enterprises-app  # Assuming you have a systemd service

echo -e "${GREEN}✅ Deployment completed successfully!${NC}"
echo -e "${GREEN}🌐 Site should be available at https://tc-enterprises.com${NC}"
echo -e "${YELLOW}📊 Check logs: tail -f $APP_DIR/logs/*.log${NC}"