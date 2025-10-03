# T&C Enterprises Website - Deployment Guide
**Updated:** October 3, 2025

This guide covers deploying the website updates (testimonial fixes, contact form fixes, and configuration updates) to your production server.

---

## 🎯 What We're Deploying

### Code Changes
1. ✅ **Homepage** - Removed false testimonials (kept only Marina's)
2. ✅ **Contact Form API** - Fixed field handling bug
3. ✅ **Email Content** - Enhanced with all form fields
4. 🔧 **Nginx Config** - Fixed port configuration
5. 🔧 **Systemd Service** - Fixed working directory
6. 🔧 **GitHub Workflow** - Fixed auto-blog workflow

---

## 📋 Pre-Deployment Checklist

Before you start, make sure you have:

- [ ] SSH access to your production server
- [ ] Sudo privileges
- [ ] GitHub repository access
- [ ] Backup of current deployment (automatic in script)
- [ ] 10-15 minutes of downtime window (optional)

---

## 🚀 Deployment Steps

### Step 1: Commit and Push Changes to GitHub

From your local Windows machine (where you're working now):

```powershell
# Navigate to project directory
cd "D:\TC-Enterprises\website\tc-enterprises-site-autoblog\tc-enterprises-site-autoblog"

# Check what files changed
git status

# Add all changes
git add .

# Commit with descriptive message
git commit -m "Fix: Remove false testimonials, fix contact form, update configs

- Removed 3 fake testimonials from homepage
- Fixed contact form API (company field was treated as honeypot)
- Enhanced email content with all form fields
- Fixed nginx port configuration (9001 -> 3000)
- Fixed systemd service working directory
- Updated GitHub workflow to use Gemini API"

# Push to GitHub
git push origin main
```

---

### Step 2: SSH into Your Production Server

```bash
# Replace with your actual server details
ssh your-username@your-server-ip

# Or if you have a hostname configured
ssh your-username@tc-enterprises.com
```

---

### Step 3: Navigate to Repository Directory

```bash
cd /var/www/tc-enterprises.com/repo
```

---

### Step 4: Pull Latest Changes

```bash
# Fetch latest code from GitHub
git pull origin main

# You should see the files that changed
```

---

### Step 5: Install Dependencies (if package.json changed)

```bash
# Clean install (recommended)
npm ci

# Or if that fails
npm install
```

---

### Step 6: Build the Application

```bash
# Build Next.js application
npm run build

# This will take 30-60 seconds
# Watch for any build errors
```

---

### Step 7: Update Nginx Configuration

```bash
# Backup current config
sudo cp /etc/nginx/sites-enabled/tc-enterprises.com.conf /etc/nginx/sites-enabled/tc-enterprises.com.conf.backup

# Copy updated config
sudo cp nginx/sites-enabled/tc-enterprises.com.conf /etc/nginx/sites-enabled/tc-enterprises.com.conf

# Test nginx configuration
sudo nginx -t

# If test passes, reload nginx
sudo systemctl reload nginx
```

---

### Step 8: Update Systemd Service

```bash
# Backup current service file
sudo cp /etc/systemd/system/tc-enterprises.service /etc/systemd/system/tc-enterprises.service.backup

# Copy updated service file
sudo cp nginx/tc-enterprises.service /etc/systemd/system/tc-enterprises.service

# Reload systemd daemon
sudo systemctl daemon-reload
```

---

### Step 9: Set Environment Variables

The systemd service needs your SMTP credentials. Edit the service:

```bash
sudo systemctl edit tc-enterprises
```

This opens an editor. Add these lines in the `[Service]` section:

```ini
[Service]
Environment=SMTP_HOST=your-mail-server.com
Environment=SMTP_PORT=587
Environment=SMTP_USER=contact@tc-enterprises.com
Environment=SMTP_PASS=your-email-password
Environment=SMTP_SECURE=false
Environment=CONTACT_TO=contact@tc-enterprises.com
Environment=CONTACT_FROM="T&C Website <contact@tc-enterprises.com>"
```

**Replace with your actual values!**

Save and exit (Ctrl+X, then Y, then Enter in nano).

---

### Step 10: Restart the Application

```bash
# Restart the service
sudo systemctl restart tc-enterprises

# Check status
sudo systemctl status tc-enterprises

# Should show "active (running)"
```

---

### Step 11: Verify Deployment

```bash
# Test the app directly
curl http://localhost:3000

# Should return HTML content

# Test through nginx
curl -I https://tc-enterprises.com

# Should return 200 OK
```

---

### Step 12: Test in Browser

Open your browser and test:

1. **Homepage** - https://tc-enterprises.com
   - [ ] Verify only Marina's testimonial shows
   - [ ] Check page loads correctly

2. **Contact Form** - https://tc-enterprises.com/contact
   - [ ] Fill out the form completely
   - [ ] Submit and verify success message
   - [ ] Check your email for the message

3. **Blog** - https://tc-enterprises.com/blog
   - [ ] Verify blog posts load

---

## 🔍 Troubleshooting

### Issue: Build Fails

```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Issue: Service Won't Start

```bash
# Check logs
sudo journalctl -u tc-enterprises -n 50

# Common issues:
# - Wrong working directory (check service file)
# - Missing environment variables
# - Port already in use
```

### Issue: Nginx Test Fails

```bash
# Check nginx error log
sudo tail -f /var/log/nginx/error.log

# Common issues:
# - Syntax error in config
# - Certificate path wrong
# - Duplicate server blocks
```

### Issue: Contact Form Still Not Working

```bash
# Check app logs
sudo journalctl -u tc-enterprises -f

# Try sending a test email
# Look for SMTP errors in logs

# Common issues:
# - Wrong SMTP credentials
# - SMTP port blocked by firewall
# - TLS/SSL configuration mismatch
```

### Issue: Port 3000 Already in Use

```bash
# Find what's using port 3000
sudo lsof -i :3000

# Kill the process if needed
sudo kill -9 <PID>

# Or change the port in package.json and nginx config
```

---

## 🔄 Rollback Procedure

If something goes wrong, you can rollback:

### Rollback Code

```bash
cd /var/www/tc-enterprises.com/repo

# See recent commits
git log --oneline -5

# Rollback to previous commit
git reset --hard HEAD~1

# Rebuild
npm run build

# Restart
sudo systemctl restart tc-enterprises
```

### Rollback Nginx Config

```bash
sudo cp /etc/nginx/sites-enabled/tc-enterprises.com.conf.backup /etc/nginx/sites-enabled/tc-enterprises.com.conf
sudo nginx -t
sudo systemctl reload nginx
```

### Rollback Systemd Service

```bash
sudo cp /etc/systemd/system/tc-enterprises.service.backup /etc/systemd/system/tc-enterprises.service
sudo systemctl daemon-reload
sudo systemctl restart tc-enterprises
```

---

## 📊 Post-Deployment Monitoring

### Check Logs

```bash
# Watch application logs
sudo journalctl -u tc-enterprises -f

# Watch nginx access logs
sudo tail -f /var/www/tc-enterprises.com/logs/access.log

# Watch nginx error logs
sudo tail -f /var/www/tc-enterprises.com/logs/error.log
```

### Monitor Service

```bash
# Check service status
sudo systemctl status tc-enterprises

# Check if process is running
ps aux | grep node

# Check port is listening
sudo netstat -tlnp | grep 3000
```

---

## 🎉 Success Criteria

Deployment is successful when:

- [x] Website loads at https://tc-enterprises.com
- [x] Only Marina's testimonial appears on homepage
- [x] Contact form accepts submissions
- [x] Email arrives with all form fields
- [x] No errors in logs
- [x] Service status shows "active (running)"
- [x] Nginx test passes

---

## 📞 Quick Reference Commands

```bash
# Application
sudo systemctl status tc-enterprises      # Check status
sudo systemctl restart tc-enterprises     # Restart app
sudo systemctl stop tc-enterprises        # Stop app
sudo systemctl start tc-enterprises       # Start app
sudo journalctl -u tc-enterprises -f      # View logs

# Nginx
sudo nginx -t                             # Test config
sudo systemctl reload nginx               # Reload config
sudo systemctl restart nginx              # Restart nginx

# Deployment
cd /var/www/tc-enterprises.com/repo       # Go to repo
git pull origin main                      # Pull changes
npm run build                             # Build app
sudo systemctl restart tc-enterprises     # Restart

# Debugging
curl http://localhost:3000                # Test app directly
curl -I https://tc-enterprises.com        # Test through nginx
sudo lsof -i :3000                        # Check port usage
```

---

## 🔐 Security Notes

1. **Never commit `.env` files** - They're gitignored for a reason
2. **Use strong passwords** - For SMTP and admin access
3. **Keep secrets in systemd** - Not in code or config files
4. **Regular updates** - Run `npm audit` and update dependencies
5. **Monitor logs** - Watch for suspicious activity

---

## 📝 Next Steps After Deployment

Once the website is deployed successfully:

1. **Set up webmail** - Follow `SNAPPYMAIL_SETUP.md`
2. **Remove Roundcube** - Run `ROUNDCUBE_REMOVAL.sh`
3. **Fix auto-blog** - Follow `GITHUB_WORKFLOW_FIX.md`
4. **Test everything** - Contact form, blog, all pages
5. **Monitor for 24 hours** - Watch logs for any issues

---

**Need Help?**

If you encounter issues:
1. Check the troubleshooting section above
2. Review the logs (commands in Quick Reference)
3. Check the PROJECT_AUDIT_REPORT.md for detailed analysis
4. Rollback if needed (procedure above)

---

**End of Deployment Guide**
