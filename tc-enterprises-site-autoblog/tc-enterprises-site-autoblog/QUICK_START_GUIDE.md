# T&C Enterprises Website - Quick Start Guide
**Your Complete Action Plan**

---

## 🎯 What Was Fixed

During this session, I've completed a comprehensive audit and fixed several critical issues:

### ✅ Completed Fixes
1. **Homepage Testimonials** - Removed 3 fake testimonials, kept only Marina's authentic review
2. **Contact Form Bug** - Fixed field handling (company was treated as honeypot, rejecting all submissions)
3. **Email Content** - Enhanced to include all form fields (company, project type, budget, timeline)
4. **GitHub Workflow** - Updated to use Gemini API instead of broken LLM API
5. **Nginx Configuration** - Fixed port mismatch (was 9001, now correctly 3000)
6. **Systemd Service** - Fixed working directory path

### 📄 Documentation Created
1. **PROJECT_AUDIT_REPORT.md** - Comprehensive audit findings
2. **DEPLOYMENT_GUIDE.md** - Step-by-step deployment instructions
3. **ROUNDCUBE_REMOVAL.sh** - Safe Roundcube removal script
4. **SNAPPYMAIL_SETUP.md** - Complete webmail installation guide
5. **GITHUB_WORKFLOW_FIX.md** - Fix auto-blog workflow guide
6. **QUICK_START_GUIDE.md** - This file!

---

## 🚀 Your Action Plan (In Order)

### Phase 1: Deploy Website Updates (30 minutes)

**What:** Push code changes to production server

**Why:** Get the testimonial and contact form fixes live

**How:** Follow `DEPLOYMENT_GUIDE.md`

**Quick Steps:**
```powershell
# 1. Commit and push (on Windows)
cd "D:\TC-Enterprises\website\tc-enterprises-site-autoblog\tc-enterprises-site-autoblog"
git add .
git commit -m "Fix testimonials, contact form, and configs"
git push origin main

# 2. SSH to server and deploy
ssh your-server
cd /var/www/tc-enterprises.com/repo
git pull origin main
npm ci
npm run build
sudo cp nginx/sites-enabled/tc-enterprises.com.conf /etc/nginx/sites-enabled/
sudo cp nginx/tc-enterprises.service /etc/systemd/system/
sudo nginx -t
sudo systemctl reload nginx
sudo systemctl daemon-reload
sudo systemctl restart tc-enterprises

# 3. Test
curl https://tc-enterprises.com
# Fill out contact form and verify email arrives
```

**Success:** Website loads, contact form works, email arrives with all fields

---

### Phase 2: Remove Roundcube (15 minutes)

**What:** Completely remove old Roundcube installation

**Why:** Free up resources, prevent conflicts with new webmail

**How:** Run the removal script

**Quick Steps:**
```bash
# On your server
cd /var/www/tc-enterprises.com/current
sudo bash ROUNDCUBE_REMOVAL.sh

# Follow prompts
# Answer 'yes' to remove database (if you want)
# Answer 'yes' to remove PHP packages (if not needed elsewhere)
```

**Success:** Roundcube completely removed, backup created

---

### Phase 3: Install SnappyMail Webmail (30 minutes)

**What:** Set up modern webmail interface

**Why:** Access email via browser (mail.tc-enterprises.com)

**How:** Follow `SNAPPYMAIL_SETUP.md`

**Quick Steps:**
```bash
# Install Docker (if not installed)
sudo apt install -y docker.io

# Run SnappyMail
sudo docker run -d \
  --name snappymail \
  --restart always \
  -p 127.0.0.1:8888:8888 \
  -v /var/lib/snappymail:/var/lib/snappymail \
  djmaze/snappymail:latest

# Set up nginx config (see SNAPPYMAIL_SETUP.md for full config)
# Get SSL certificate
sudo certbot --nginx -d mail.tc-enterprises.com

# Access admin panel
# https://mail.tc-enterprises.com/?admin
# Default password: 12345 (CHANGE IMMEDIATELY!)
```

**Success:** Can access webmail at https://mail.tc-enterprises.com

---

### Phase 4: Fix Auto-Blog Workflow (10 minutes)

**What:** Configure GitHub Actions for weekly blog posts

**Why:** Automated content generation every Sunday

**How:** Follow `GITHUB_WORKFLOW_FIX.md`

**Quick Steps:**
```bash
# 1. Get Gemini API key
# Go to: https://makersuite.google.com/app/apikey
# Create API key, copy it

# 2. Add to GitHub
# Go to: https://github.com/thadreber-web/tc-enterprises-site/settings/secrets/actions
# Click "New repository secret"
# Name: GEMINI_API_KEY
# Value: paste your API key
# Click "Add secret"

# 3. Test workflow
# Go to: https://github.com/thadreber-web/tc-enterprises-site/actions
# Click "Auto Blog Draft"
# Click "Run workflow"
# Watch it run (2-3 minutes)
# Check for new PR in Pull Requests tab
```

**Success:** Workflow runs successfully, creates draft PR with blog post

---

## 📋 Detailed Checklists

### Deployment Checklist
- [ ] Code committed and pushed to GitHub
- [ ] SSH'd into production server
- [ ] Pulled latest code
- [ ] Ran `npm ci` and `npm run build`
- [ ] Updated nginx config
- [ ] Updated systemd service
- [ ] Added SMTP environment variables
- [ ] Tested nginx config (`sudo nginx -t`)
- [ ] Reloaded nginx
- [ ] Restarted application
- [ ] Website loads correctly
- [ ] Only Marina's testimonial shows
- [ ] Contact form accepts submission
- [ ] Email arrives with all fields

### Roundcube Removal Checklist
- [ ] Backed up any important emails
- [ ] Ran removal script
- [ ] Confirmed Roundcube files removed
- [ ] Confirmed database removed (optional)
- [ ] Confirmed nginx configs removed
- [ ] Tested nginx still works
- [ ] Backup created in /root/roundcube-removal-backup-*

### SnappyMail Setup Checklist
- [ ] Docker installed
- [ ] SnappyMail container running
- [ ] Nginx config created for mail subdomain
- [ ] SSL certificate obtained
- [ ] Can access admin panel
- [ ] Admin password changed
- [ ] Domain configured (tc-enterprises.com)
- [ ] IMAP settings configured
- [ ] SMTP settings configured
- [ ] Test connection successful
- [ ] Can login with email credentials
- [ ] Can send/receive test emails

### GitHub Workflow Checklist
- [ ] Gemini API key obtained
- [ ] Secret added to GitHub repository
- [ ] Workflow file updated (already done)
- [ ] Manual test run successful
- [ ] Draft PR created
- [ ] Blog post quality acceptable
- [ ] Workflow scheduled for Sundays

---

## 🔍 Testing Everything

After completing all phases, test these critical paths:

### Website Tests
```bash
# Homepage
https://tc-enterprises.com
# Check: Only Marina's testimonial visible

# Contact Page
https://tc-enterprises.com/contact
# Fill form completely
# Submit
# Check: Success message appears
# Check: Email arrives with all fields

# Blog
https://tc-enterprises.com/blog
# Check: Posts load correctly

# Services
https://tc-enterprises.com/services
# Check: Page loads

# Portfolio
https://tc-enterprises.com/portfolio
# Check: Projects display
```

### Webmail Tests
```bash
# Access webmail
https://mail.tc-enterprises.com

# Login
Email: contact@tc-enterprises.com
Password: your-email-password

# Check inbox
# Send test email
# Reply to email
# Check sent folder
```

### Auto-Blog Tests
```bash
# Check GitHub Actions
https://github.com/thadreber-web/tc-enterprises-site/actions

# Verify workflow ran
# Check Pull Requests
# Review generated content
# Merge if acceptable
```

---

## 🚨 Troubleshooting Quick Reference

### Website Not Loading
```bash
# Check service status
sudo systemctl status tc-enterprises

# Check logs
sudo journalctl -u tc-enterprises -n 50

# Check nginx
sudo nginx -t
sudo systemctl status nginx

# Check port
sudo lsof -i :3000
```

### Contact Form Not Working
```bash
# Check app logs
sudo journalctl -u tc-enterprises -f

# Test SMTP
telnet your-mail-server 587

# Verify environment variables
sudo systemctl show tc-enterprises | grep Environment
```

### Webmail Not Accessible
```bash
# Check Docker container
sudo docker ps | grep snappymail
sudo docker logs snappymail

# Check nginx
sudo nginx -t
sudo tail -f /var/log/nginx/mail.tc-enterprises.com.error.log

# Check SSL
sudo certbot certificates
```

### GitHub Workflow Failing
```bash
# Check workflow logs in GitHub Actions
# Common issues:
# - GEMINI_API_KEY not set
# - API quota exceeded
# - RSS feeds unavailable

# Test locally
cd "D:\TC-Enterprises\website\tc-enterprises-site-autoblog\tc-enterprises-site-autoblog"
$env:GEMINI_API_KEY="your-key"
npm run blog:generate:reliable
```

---

## 📊 Priority Matrix

### Do First (Critical)
1. **Deploy website updates** - Fixes are ready, just need to deploy
2. **Test contact form** - Verify email works

### Do Soon (Important)
3. **Remove Roundcube** - Clean up old installation
4. **Install SnappyMail** - Get webmail working
5. **Fix auto-blog** - Set up GitHub secret

### Do Later (Nice to Have)
6. **Monitor logs** - Watch for errors
7. **Set up backups** - Automated backups
8. **Performance optimization** - Image optimization, etc.

---

## 📞 Support Resources

### Documentation
- **Full Audit:** `PROJECT_AUDIT_REPORT.md`
- **Deployment:** `DEPLOYMENT_GUIDE.md`
- **Roundcube Removal:** `ROUNDCUBE_REMOVAL.sh`
- **Webmail Setup:** `SNAPPYMAIL_SETUP.md`
- **Auto-Blog Fix:** `GITHUB_WORKFLOW_FIX.md`

### Useful Commands
```bash
# Service management
sudo systemctl status tc-enterprises
sudo systemctl restart tc-enterprises
sudo journalctl -u tc-enterprises -f

# Nginx
sudo nginx -t
sudo systemctl reload nginx
sudo tail -f /var/log/nginx/error.log

# Docker
sudo docker ps
sudo docker logs snappymail
sudo docker restart snappymail

# Testing
curl http://localhost:3000
curl -I https://tc-enterprises.com
```

### URLs
- **Website:** https://tc-enterprises.com
- **Webmail:** https://mail.tc-enterprises.com (after setup)
- **GitHub:** https://github.com/thadreber-web/tc-enterprises-site
- **GitHub Actions:** https://github.com/thadreber-web/tc-enterprises-site/actions

---

## ✅ Success Criteria

You'll know everything is working when:

- [x] Website loads at https://tc-enterprises.com
- [x] Only Marina's testimonial appears
- [x] Contact form accepts submissions
- [x] Email arrives with all form fields
- [x] Roundcube is completely removed
- [x] Webmail works at https://mail.tc-enterprises.com
- [x] Can read/send emails via browser
- [x] GitHub workflow runs successfully
- [x] Weekly blog posts auto-generate
- [x] No errors in logs

---

## 🎉 What You'll Have After This

1. **Working Website** - With authentic testimonials and functional contact form
2. **Clean Server** - Roundcube removed, no conflicts
3. **Modern Webmail** - SnappyMail for browser-based email access
4. **Automated Content** - Weekly blog posts generated automatically
5. **Complete Documentation** - Everything documented for future reference
6. **Peace of Mind** - All critical issues resolved

---

## 📝 Estimated Time

- **Phase 1 (Deploy):** 30 minutes
- **Phase 2 (Remove Roundcube):** 15 minutes
- **Phase 3 (Install SnappyMail):** 30 minutes
- **Phase 4 (Fix Auto-Blog):** 10 minutes
- **Testing:** 15 minutes

**Total:** ~1.5-2 hours

---

## 🔐 Security Reminders

1. **Never commit secrets** - Use environment variables
2. **Change default passwords** - SnappyMail admin password
3. **Use strong passwords** - For email and admin access
4. **Keep software updated** - Regular updates
5. **Monitor logs** - Watch for suspicious activity
6. **Backup regularly** - Automated backups recommended

---

## 🎯 Next Session Goals

After completing this action plan, consider:

1. **Set up monitoring** - Uptime monitoring, error tracking
2. **Implement backups** - Automated daily backups
3. **Add testing** - Unit tests, integration tests
4. **Performance optimization** - Image optimization, caching
5. **SEO improvements** - Meta tags, sitemap, schema markup
6. **Analytics** - Google Analytics or privacy-focused alternative

---

**Ready to Start?**

Begin with Phase 1 (Deploy Website Updates) in the `DEPLOYMENT_GUIDE.md` file.

Good luck! 🚀

---

**End of Quick Start Guide**
