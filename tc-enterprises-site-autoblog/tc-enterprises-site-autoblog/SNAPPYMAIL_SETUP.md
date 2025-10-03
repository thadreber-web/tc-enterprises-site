# SnappyMail Webmail Setup Guide
**T&C Enterprises - Modern Webmail Solution**

SnappyMail is a modern, lightweight webmail client that's perfect for self-hosted email. It's the successor to RainLoop and won't interfere with your other sites.

---

## 🎯 Why SnappyMail?

- ✅ **No Apache Required** - Works with nginx or standalone
- ✅ **Docker Support** - Clean, isolated installation
- ✅ **Modern Interface** - Responsive, mobile-friendly
- ✅ **Lightweight** - Fast and efficient
- ✅ **Secure** - Regular updates, active development
- ✅ **Easy Setup** - 10-15 minutes to get running

---

## 📋 Prerequisites

Before starting, ensure you have:

- [ ] Removed Roundcube (run `ROUNDCUBE_REMOVAL.sh`)
- [ ] Docker installed (or PHP 7.4+ for manual install)
- [ ] Subdomain DNS configured (mail.tc-enterprises.com)
- [ ] SSL certificate for subdomain
- [ ] Email server credentials (IMAP/SMTP)

---

## 🚀 Installation Method 1: Docker (Recommended)

This is the safest and easiest method.

### Step 1: Install Docker (if not already installed)

```bash
# Update package list
sudo apt update

# Install Docker
sudo apt install -y docker.io docker-compose

# Start and enable Docker
sudo systemctl start docker
sudo systemctl enable docker

# Add your user to docker group (optional)
sudo usermod -aG docker $USER

# Verify installation
docker --version
```

### Step 2: Create SnappyMail Directory

```bash
# Create directory for SnappyMail data
sudo mkdir -p /var/lib/snappymail
sudo chown -R www-data:www-data /var/lib/snappymail
```

### Step 3: Run SnappyMail Container

```bash
# Run SnappyMail with Docker
sudo docker run -d \
  --name snappymail \
  --restart always \
  -p 127.0.0.1:8888:8888 \
  -v /var/lib/snappymail:/var/lib/snappymail \
  djmaze/snappymail:latest

# Check if container is running
sudo docker ps | grep snappymail
```

### Step 4: Configure Nginx Reverse Proxy

Create nginx configuration for mail subdomain:

```bash
sudo nano /etc/nginx/sites-available/mail.tc-enterprises.com.conf
```

Add this configuration:

```nginx
# HTTP -> HTTPS redirect
server {
    listen 80;
    listen [::]:80;
    server_name mail.tc-enterprises.com;
    
    # Allow certbot challenges
    location ^~ /.well-known/acme-challenge/ {
        root /var/www/html;
    }
    
    return 301 https://$server_name$request_uri;
}

# HTTPS server
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name mail.tc-enterprises.com;

    # SSL Configuration (update paths if needed)
    ssl_certificate /etc/letsencrypt/live/mail.tc-enterprises.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/mail.tc-enterprises.com/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;

    # Proxy to SnappyMail container
    location / {
        proxy_pass http://127.0.0.1:8888;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        
        # WebSocket support (if needed)
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        
        # Timeouts
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }

    # Logs
    access_log /var/log/nginx/mail.tc-enterprises.com.access.log;
    error_log /var/log/nginx/mail.tc-enterprises.com.error.log;
}
```

### Step 5: Get SSL Certificate

```bash
# Install certbot if not already installed
sudo apt install -y certbot python3-certbot-nginx

# Get certificate for mail subdomain
sudo certbot --nginx -d mail.tc-enterprises.com

# Follow the prompts
```

### Step 6: Enable Site and Reload Nginx

```bash
# Enable the site
sudo ln -s /etc/nginx/sites-available/mail.tc-enterprises.com.conf /etc/nginx/sites-enabled/

# Test nginx configuration
sudo nginx -t

# If test passes, reload nginx
sudo systemctl reload nginx
```

### Step 7: Access SnappyMail Admin Panel

1. Open browser and go to: `https://mail.tc-enterprises.com/?admin`
2. Default admin credentials:
   - **Username:** admin
   - **Password:** 12345

**⚠️ IMPORTANT: Change the admin password immediately!**

---

## ⚙️ SnappyMail Configuration

### Initial Setup

1. **Change Admin Password**
   - Go to: Security → Admin Password
   - Set a strong password
   - Save

2. **Configure Domains**
   - Go to: Domains
   - Click "Add Domain"
   - Domain: `tc-enterprises.com`
   
3. **IMAP Settings**
   - IMAP Server: Your mail server hostname
   - IMAP Port: `993` (SSL) or `143` (STARTTLS)
   - IMAP Secure: `SSL/TLS` or `STARTTLS`
   - Check "Use short login"

4. **SMTP Settings**
   - SMTP Server: Your mail server hostname
   - SMTP Port: `465` (SSL) or `587` (STARTTLS)
   - SMTP Secure: `SSL/TLS` or `STARTTLS`
   - SMTP Auth: Enable
   - Check "Use short login"

5. **Test Configuration**
   - Click "Test" button
   - Should show green checkmarks

6. **Save Settings**

### Security Settings

1. **Enable Two-Factor Authentication** (Optional)
   - Go to: Security → Two-Factor Auth
   - Enable for admin account

2. **Set Login Attempts Limit**
   - Go to: Security → Login
   - Set max attempts: 5
   - Set ban time: 30 minutes

3. **Configure Session Timeout**
   - Go to: Security → Sessions
   - Set timeout: 30 minutes

### Branding (Optional)

1. **Customize Logo**
   - Go to: Branding
   - Upload your logo
   - Set title: "T&C Enterprises Mail"

2. **Set Theme**
   - Choose a theme
   - Customize colors if desired

---

## 🧪 Testing

### Test Email Access

1. Go to: `https://mail.tc-enterprises.com`
2. Login with your email credentials:
   - **Email:** contact@tc-enterprises.com
   - **Password:** Your email password
3. Verify you can:
   - [ ] See inbox
   - [ ] Read emails
   - [ ] Send test email
   - [ ] Reply to email
   - [ ] Check sent folder

### Test on Mobile

1. Open on phone browser
2. Should be responsive
3. Test all functions

---

## 🔧 Troubleshooting

### Can't Access Admin Panel

```bash
# Check if container is running
sudo docker ps | grep snappymail

# Check container logs
sudo docker logs snappymail

# Restart container
sudo docker restart snappymail
```

### IMAP/SMTP Connection Fails

**Check firewall:**
```bash
# Allow IMAP port
sudo ufw allow 993/tcp

# Allow SMTP port
sudo ufw allow 587/tcp
sudo ufw allow 465/tcp
```

**Check mail server:**
```bash
# Test IMAP connection
telnet your-mail-server 993

# Test SMTP connection
telnet your-mail-server 587
```

**Common issues:**
- Wrong hostname (use IP if DNS not working)
- Wrong port
- Firewall blocking
- SSL certificate mismatch
- Wrong credentials

### SSL Certificate Issues

```bash
# Renew certificate
sudo certbot renew

# Test renewal
sudo certbot renew --dry-run

# Check certificate
sudo certbot certificates
```

### Nginx Errors

```bash
# Check nginx logs
sudo tail -f /var/log/nginx/error.log

# Check mail subdomain logs
sudo tail -f /var/log/nginx/mail.tc-enterprises.com.error.log

# Test nginx config
sudo nginx -t
```

---

## 🔄 Maintenance

### Update SnappyMail

```bash
# Pull latest image
sudo docker pull djmaze/snappymail:latest

# Stop and remove old container
sudo docker stop snappymail
sudo docker rm snappymail

# Run new container (same command as Step 3)
sudo docker run -d \
  --name snappymail \
  --restart always \
  -p 127.0.0.1:8888:8888 \
  -v /var/lib/snappymail:/var/lib/snappymail \
  djmaze/snappymail:latest
```

### Backup

```bash
# Backup SnappyMail data
sudo tar -czf snappymail-backup-$(date +%Y%m%d).tar.gz /var/lib/snappymail

# Store backup safely
sudo mv snappymail-backup-*.tar.gz /root/backups/
```

### Monitor Logs

```bash
# Watch container logs
sudo docker logs -f snappymail

# Watch nginx logs
sudo tail -f /var/log/nginx/mail.tc-enterprises.com.access.log
```

---

## 🚀 Alternative: Manual Installation (Without Docker)

If you prefer not to use Docker:

### Requirements
- PHP 7.4 or higher
- PHP extensions: curl, iconv, json, xml, mbstring, openssl, pdo_mysql, pdo_sqlite, sqlite3

### Installation Steps

```bash
# Install PHP and extensions
sudo apt install -y php php-fpm php-curl php-iconv php-json php-xml php-mbstring php-openssl php-pdo php-sqlite3

# Create directory
sudo mkdir -p /var/www/mail.tc-enterprises.com
cd /var/www/mail.tc-enterprises.com

# Download SnappyMail
sudo wget https://github.com/the-djmaze/snappymail/releases/latest/download/snappymail-latest.zip

# Extract
sudo unzip snappymail-latest.zip
sudo rm snappymail-latest.zip

# Set permissions
sudo chown -R www-data:www-data /var/www/mail.tc-enterprises.com
sudo chmod -R 755 /var/www/mail.tc-enterprises.com
```

### Nginx Configuration (for manual install)

```nginx
server {
    listen 443 ssl http2;
    server_name mail.tc-enterprises.com;
    
    root /var/www/mail.tc-enterprises.com;
    index index.php;

    # SSL config (same as above)
    
    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ \.php$ {
        fastcgi_pass unix:/var/run/php/php8.1-fpm.sock;
        fastcgi_index index.php;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include fastcgi_params;
    }
}
```

---

## 📱 Mobile App Alternative

If you prefer a native mobile experience:

**iOS:**
- Use built-in Mail app
- Or: Spark, Outlook, Gmail app

**Android:**
- Use built-in Email app
- Or: K-9 Mail, FairEmail, Outlook

**Configuration:**
- IMAP: your-server:993 (SSL)
- SMTP: your-server:587 (STARTTLS)
- Username: full email address
- Password: your email password

---

## ✅ Success Checklist

After setup, verify:

- [ ] Can access https://mail.tc-enterprises.com
- [ ] Admin panel accessible with new password
- [ ] Can login with email credentials
- [ ] Can read emails
- [ ] Can send emails
- [ ] Can reply to emails
- [ ] Can manage folders
- [ ] Works on mobile browser
- [ ] SSL certificate valid
- [ ] No errors in logs

---

## 🔐 Security Best Practices

1. **Strong Admin Password** - Use password manager
2. **Regular Updates** - Update SnappyMail monthly
3. **Firewall Rules** - Only allow necessary ports
4. **SSL/TLS Only** - Never use unencrypted connections
5. **Monitor Logs** - Watch for suspicious activity
6. **Backup Regularly** - Weekly backups recommended
7. **Two-Factor Auth** - Enable for admin account
8. **Session Timeout** - Set reasonable timeout (30 min)

---

## 📞 Quick Reference

### URLs
- **Webmail:** https://mail.tc-enterprises.com
- **Admin:** https://mail.tc-enterprises.com/?admin

### Docker Commands
```bash
sudo docker ps                    # List containers
sudo docker logs snappymail       # View logs
sudo docker restart snappymail    # Restart
sudo docker stop snappymail       # Stop
sudo docker start snappymail      # Start
```

### Nginx Commands
```bash
sudo nginx -t                     # Test config
sudo systemctl reload nginx       # Reload
sudo tail -f /var/log/nginx/mail.tc-enterprises.com.error.log
```

---

## 🎉 You're All Set!

You now have a modern, secure webmail interface for your self-hosted email!

**Next Steps:**
1. Bookmark https://mail.tc-enterprises.com
2. Test from different devices
3. Configure email signature
4. Set up filters/rules (optional)
5. Enjoy your webmail!

---

**Need Help?**

- SnappyMail Documentation: https://snappymail.eu/
- GitHub Issues: https://github.com/the-djmaze/snappymail/issues
- Check logs first (commands above)

---

**End of SnappyMail Setup Guide**
