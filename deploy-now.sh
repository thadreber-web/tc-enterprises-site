#!/bin/bash
# Quick deployment script - run this on your server

set -e

echo "🚀 Starting deployment..."

# Navigate to correct directory
cd /var/www/tc-enterprises.com/tc-enterprises-site-autoblog/tc-enterprises-site-autoblog

echo "📥 Pulling latest code..."
git pull origin main

echo "📦 Installing dependencies..."
npm install

echo "🔨 Building application..."
npm run build

echo "⚙️ Updating nginx config..."
sudo cp nginx/sites-enabled/tc-enterprises.com.conf /etc/nginx/sites-enabled/tc-enterprises.com.conf

echo "🔧 Testing nginx..."
sudo nginx -t

echo "🔄 Reloading nginx..."
sudo systemctl reload nginx

echo "📝 Updating systemd service..."
sudo cp nginx/tc-enterprises.service /etc/systemd/system/tc-enterprises.service

echo "🔄 Reloading systemd..."
sudo systemctl daemon-reload

echo "🔄 Restarting application..."
sudo systemctl restart tc-enterprises

echo "✅ Checking service status..."
sudo systemctl status tc-enterprises --no-pager

echo ""
echo "🎉 Deployment complete!"
echo ""
echo "Test your site:"
echo "  Homepage: https://tc-enterprises.com"
echo "  Contact: https://tc-enterprises.com/contact"
echo ""
