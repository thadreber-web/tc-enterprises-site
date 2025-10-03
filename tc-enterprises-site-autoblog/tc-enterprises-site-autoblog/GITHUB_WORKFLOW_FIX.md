# GitHub Auto-Blog Workflow Fix Guide
**T&C Enterprises - Fix Weekly Blog Automation**

This guide will fix the failing GitHub Actions workflow that generates weekly blog posts.

---

## 🔍 Problem Summary

The workflow was failing because:
1. ❌ Expected `LLM_API_URL` and `LLM_API_KEY` secrets (not configured)
2. ❌ Used generic Python API call (unreliable)
3. ❌ No proper error handling

**Solution:**
- ✅ Use existing `reliable-blog-generator.mjs` script
- ✅ Use Google Gemini API (free tier available)
- ✅ Proper Node.js setup and error handling

---

## 🎯 What Was Changed

The workflow file (`.github/workflows/auto-blog.yml`) has been updated to:

1. **Use Gemini API** instead of generic LLM API
2. **Use Node.js** instead of Python
3. **Use existing script** (`reliable-blog-generator.mjs`)
4. **Better error handling** and logging

---

## 🔑 Step 1: Get Google Gemini API Key

### Option A: Free Tier (Recommended for testing)

1. Go to: https://makersuite.google.com/app/apikey
2. Click "Create API Key"
3. Select "Create API key in new project" (or use existing)
4. Copy the API key (starts with `AIza...`)
5. **Save it securely** - you'll need it in Step 2

### Option B: Google Cloud (For production)

1. Go to: https://console.cloud.google.com/
2. Create or select a project
3. Enable "Generative Language API"
4. Go to "Credentials" → "Create Credentials" → "API Key"
5. Copy the API key

**Pricing:**
- Free tier: 60 requests/minute, 1500 requests/day
- More than enough for weekly blog posts!

---

## 🔐 Step 2: Add Secret to GitHub Repository

1. **Go to your GitHub repository:**
   - https://github.com/thadreber-web/tc-enterprises-site

2. **Navigate to Settings:**
   - Click "Settings" tab
   - Click "Secrets and variables" → "Actions"

3. **Add new secret:**
   - Click "New repository secret"
   - Name: `GEMINI_API_KEY`
   - Value: Paste your API key from Step 1
   - Click "Add secret"

**Security Note:** Secrets are encrypted and never exposed in logs.

---

## ✅ Step 3: Verify Workflow File

The workflow file has already been updated. Verify it's correct:

```bash
# On your local machine
cd "D:\TC-Enterprises\website\tc-enterprises-site-autoblog\tc-enterprises-site-autoblog"

# Check the workflow file
cat .github/workflows/auto-blog.yml
```

Should show:
```yaml
env:
  GEMINI_API_KEY: ${{ secrets.GEMINI_API_KEY }}
```

And use Node.js setup instead of Python.

---

## 🚀 Step 4: Test the Workflow

### Manual Test (Recommended)

1. **Go to GitHub Actions:**
   - https://github.com/thadreber-web/tc-enterprises-site/actions

2. **Find the workflow:**
   - Click "Auto Blog Draft" workflow

3. **Run manually:**
   - Click "Run workflow" dropdown
   - Select "main" branch
   - Click "Run workflow" button

4. **Watch it run:**
   - Click on the running workflow
   - Watch each step complete
   - Should take 2-3 minutes

5. **Check for Pull Request:**
   - Go to "Pull requests" tab
   - Should see a new draft PR with blog post
   - Review the generated content

### Automatic Test (Wait for Sunday)

The workflow runs automatically every Sunday at 2am PT (9am UTC).

---

## 📋 Step 5: Review and Approve Blog Posts

When the workflow runs successfully:

1. **Check Pull Requests:**
   - New PR titled "Weekly Blog Draft"
   - Status: Draft
   - Label: `blog-draft`

2. **Review the content:**
   - Click on the PR
   - Click "Files changed"
   - Review the generated blog post
   - Check for:
     - Accurate information
     - Good writing quality
     - Proper formatting
     - Relevant links

3. **Edit if needed:**
   - Click "..." on the file
   - Click "Edit file"
   - Make changes
   - Commit to the PR branch

4. **Approve and merge:**
   - Mark PR as "Ready for review"
   - Click "Merge pull request"
   - Blog post is now live!

---

## 🔧 Troubleshooting

### Workflow Still Fails

**Check the error message:**

1. Go to Actions tab
2. Click on failed workflow
3. Click on failed step
4. Read error message

**Common issues:**

#### Error: "GEMINI_API_KEY environment variable not set"

**Solution:**
- Secret not added to GitHub
- Go back to Step 2
- Make sure secret name is exactly `GEMINI_API_KEY`

#### Error: "No relevant articles found"

**Solution:**
- RSS feeds temporarily unavailable
- Run workflow again later
- Or manually run: `npm run blog:generate:reliable` locally

#### Error: "npm ci failed"

**Solution:**
- package-lock.json out of sync
- Commit and push latest package-lock.json
- Or change `npm ci` to `npm install` in workflow

#### Error: "Empty response from Gemini API"

**Solution:**
- API key invalid or expired
- Check API key in Google Console
- Generate new key if needed
- Update GitHub secret

### No Pull Request Created

**Check:**
1. Workflow completed successfully?
2. File was generated? (check workflow logs)
3. Permissions correct? (should be set in workflow)

**Fix:**
- Workflow needs `contents: write` and `pull-requests: write` permissions
- Already configured in updated workflow

### Generated Content is Poor Quality

**Improve prompts:**

Edit `scripts/reliable-blog-generator.mjs`:

```javascript
// Line ~142 - Update the prompt
const prompt = `You are a professional blog writer for T&C Enterprises...

// Add more specific instructions
// Add examples of good posts
// Add tone guidelines
```

---

## 📊 Monitoring

### Check Workflow Status

```bash
# View recent workflow runs
gh run list --workflow="Auto Blog Draft"

# View specific run
gh run view <run-id>

# View logs
gh run view <run-id> --log
```

### Email Notifications

GitHub sends email notifications for:
- ✅ Workflow success
- ❌ Workflow failure
- 📝 New pull requests

Check your GitHub notification settings.

---

## 🎯 Workflow Schedule

The workflow runs:
- **When:** Every Sunday at 2am PT (9am UTC)
- **What:** Generates one blog post
- **Where:** Creates draft PR for review
- **How:** Uses RSS feeds + Gemini AI

**To change schedule:**

Edit `.github/workflows/auto-blog.yml`:

```yaml
on:
  schedule:
    - cron: "0 9 * * 0"   # Sunday 9am UTC
    # Change to: "0 9 * * 1" for Monday
    # Change to: "0 14 * * 5" for Friday 2pm UTC
```

Cron format: `minute hour day-of-month month day-of-week`

---

## 🔄 Alternative: Local Blog Generation

If GitHub Actions isn't working, generate locally:

```bash
# On your local machine
cd "D:\TC-Enterprises\website\tc-enterprises-site-autoblog\tc-enterprises-site-autoblog"

# Set API key (PowerShell)
$env:GEMINI_API_KEY="your-api-key-here"

# Generate post
npm run blog:generate:reliable

# Review
npm run blog:list

# Approve
npm run blog:approve -- --file=2025-10-03-your-post-slug.md

# Commit and push
git add content/blog/
git commit -m "Add new blog post"
git push origin main
```

---

## 📈 Success Metrics

After fixing, you should see:

- ✅ Workflow runs successfully every Sunday
- ✅ New draft PR created automatically
- ✅ Blog post quality is good
- ✅ No manual intervention needed (except approval)
- ✅ Email notifications working

---

## 🎉 Benefits of Fixed Workflow

1. **Consistent Content** - New post every week
2. **Time Saving** - Automated discovery and drafting
3. **Quality Control** - Review before publishing
4. **SEO Benefits** - Regular fresh content
5. **Engagement** - Keep visitors coming back

---

## 📝 Workflow Diagram

```
Sunday 2am PT
     ↓
GitHub Actions Triggered
     ↓
Install Node.js & Dependencies
     ↓
Run reliable-blog-generator.mjs
     ↓
Fetch RSS Feeds
     ↓
Filter Relevant Articles
     ↓
Generate Blog Post (Gemini AI)
     ↓
Save to Staging
     ↓
Move to Published
     ↓
Create Draft Pull Request
     ↓
Email Notification Sent
     ↓
You Review & Approve
     ↓
Merge PR
     ↓
Blog Post Live! 🎉
```

---

## 🔐 Security Best Practices

1. **Never commit API keys** - Use GitHub secrets
2. **Rotate keys regularly** - Every 90 days
3. **Use least privilege** - Gemini API key only needs Generative Language API
4. **Monitor usage** - Check Google Cloud Console
5. **Set spending limits** - In Google Cloud Console

---

## 📞 Quick Reference

### GitHub Actions URLs
- **Workflows:** https://github.com/thadreber-web/tc-enterprises-site/actions
- **Secrets:** https://github.com/thadreber-web/tc-enterprises-site/settings/secrets/actions
- **Pull Requests:** https://github.com/thadreber-web/tc-enterprises-site/pulls

### Gemini API
- **Get Key:** https://makersuite.google.com/app/apikey
- **Documentation:** https://ai.google.dev/docs
- **Pricing:** https://ai.google.dev/pricing

### Commands
```bash
# Test locally
npm run blog:generate:reliable

# List staged posts
npm run blog:list

# Approve post
npm run blog:approve -- --file=filename.md

# Reject post
npm run blog:reject -- --file=filename.md
```

---

## ✅ Checklist

Before considering this fixed:

- [ ] Gemini API key obtained
- [ ] Secret added to GitHub repository
- [ ] Workflow file updated (already done)
- [ ] Manual test run successful
- [ ] Pull request created
- [ ] Blog post quality acceptable
- [ ] Email notifications working
- [ ] Scheduled run tested (wait for Sunday)

---

## 🎯 Next Steps

1. **Complete this fix** - Follow all steps above
2. **Wait for Sunday** - Let automatic run happen
3. **Review first post** - Check quality
4. **Adjust if needed** - Tune prompts/settings
5. **Enjoy automation** - Weekly content without effort!

---

**Need Help?**

- Check GitHub Actions logs for errors
- Review `PROJECT_AUDIT_REPORT.md` for context
- Test locally first with `npm run blog:generate:reliable`
- Check Gemini API quota in Google Console

---

**End of GitHub Workflow Fix Guide**
