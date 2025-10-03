# 🚀 T&C Enterprises - Drop-in Deployment

## One-Command Deployment

If you have sudo access and want the simplest deployment:

```bash
curl -fsSL https://raw.githubusercontent.com/thadreber-web/tc-enterprises-site/main/deploy.sh | bash
```

This will automatically:
- Download and run the deployment script
- Clone/update your repository
- Build the application
- Install configuration files
- Provide manual steps for completion

## Manual Deployment Steps

If you prefer to do it step by step:

### 1. Download and Run Deployment Script
```bash
# Download the deployment script
curl -fsSL https://raw.githubusercontent.com/thadreber-web/tc-enterprises-site/main/scripts/deploy.sh -o deploy.sh
chmod +x deploy.sh

# Run it (will handle cloning, building, and file placement)
./deploy.sh
```

### 2. Complete Configuration
After the script runs, complete these manual steps:

```bash
# Test nginx configuration
sudo nginx -t

# Reload nginx
sudo systemctl reload nginx

# Enable and start the service
sudo systemctl enable tc-enterprises
sudo systemctl start tc-enterprises

# Check status
sudo systemctl status tc-enterprises
```

### 3. Configure Environment Variables
Edit the systemd service to add your environment variables:

```bash
sudo systemctl edit tc-enterprises
```

Add these lines in the `[Service]` section:
```
Environment=SMTP_HOST=your-smtp-host
Environment=SMTP_PORT=587
Environment=SMTP_USER=your-email@domain.com
Environment=SMTP_PASS=your-password
Environment=SMTP_SECURE=false
Environment=CONTACT_TO=contact@tc-enterprises.com
Environment=CONTACT_FROM="T&C Website <contact@tc-enterprises.com>"
```

Then restart the service:
```bash
sudo systemctl restart tc-enterprises
```

## Prerequisites

- Ubuntu/Debian server with sudo access
- Node.js installed
- Nginx installed
- SSL certificates in `/etc/letsencrypt/live/tc-enterprises.com/`
- Basic directory structure (created automatically if missing)

## File Locations

After deployment:
- **Application:** `/var/www/tc-enterprises.com/current/`
- **Repository:** `/var/www/tc-enterprises.com/repo/`
- **Backups:** `/var/www/tc-enterprises.com/backups/`
- **Logs:** `/var/www/tc-enterprises.com/logs/`
- **Nginx config:** `/etc/nginx/sites-enabled/tc-enterprises.com.conf`
- **Systemd service:** `/etc/systemd/system/tc-enterprises.service`

## Troubleshooting

```bash
# Check application logs
sudo journalctl -u tc-enterprises -f

# Check nginx logs
sudo tail -f /var/log/nginx/error.log

# Test the application directly
curl http://localhost:3000

# Test through nginx
curl -I https://tc-enterprises.com
```

## Updating

To update your site with new changes:

```bash
cd /var/www/tc-enterprises.com/repo
git pull origin main
npm run build
sudo systemctl restart tc-enterprises
```