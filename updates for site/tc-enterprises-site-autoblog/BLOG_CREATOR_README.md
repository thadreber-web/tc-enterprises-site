# RSS-Based Blog Content Creator

This system automatically discovers relevant articles from RSS feeds, generates blog posts about them, and allows you to approve posts before publishing.

## Features

- **Industry-Specific RSS Feeds**: Tailored to manufacturing, automation, laser technology, and small business
- **Smart Filtering**: Uses keywords specific to industrial automation and custom fabrication
- **AI-Powered Generation**: Creates insightful commentary on discovered articles
- **Approval Workflow**: Review and approve posts before they go live
- **Weekly Scheduling**: Automated weekly content generation
- **File Upload Support**: Still supports generating posts from uploaded documents

## RSS Feeds (Tailored to T&C Enterprises)

The system monitors these industry-specific RSS feeds:
- **DevOps.com**: Software automation and development
- **TechCrunch Startups**: Small business technology and startups
- **VentureBeat**: Technology and AI business news
- **ZDNet**: Technology and business solutions
- **Computerworld**: Enterprise technology
- **CIO.com**: Technology leadership and business
- **TechRepublic**: Technology and software solutions
- **Network World**: Technology infrastructure
- **CSO Online**: Technology security
- **SearchMobileComputing**: Mobile and cloud technology

## Keywords (Business-Focused)

**Relevant Topics:**
- Automation, workflow automation, business automation, AI automation
- Artificial intelligence, machine learning, AI assistants
- Workflow optimization, productivity tools, developer productivity
- Software development, custom software, business software
- Small business technology, digital transformation
- SaaS, cloud computing, API integration, no-code, low-code

**Excluded Topics:**
- Politics, cryptocurrency, gaming, entertainment, consumer electronics

## Weekly Scheduling

Set up automated weekly blog post generation:

### Option 1: Cron Job (Linux/Mac)
```bash
# Edit crontab
crontab -e

# Add this line to run every Friday at 9 AM:
0 9 * * 5 cd /path/to/your/project && npm run blog:schedule
```

### Option 2: Windows Task Scheduler
1. Open Task Scheduler
2. Create a new task
3. Set trigger to "Weekly" on Friday at 9:00 AM
4. Set action to "Start a program"
5. Program: `cmd.exe`
6. Arguments: `/c cd "D:\TC-Enterprises\website\updates-for-site\tc-enterprises-site-autoblog" && npm run blog:schedule`

### Option 3: Manual Weekly Check
Run this command every Friday:
```bash
npm run blog:schedule
```

The scheduler will:
- Check if fewer than 3 posts are waiting for approval
- Generate new content if needed
- Log all activity to `blog-scheduler.log`

## Usage

### Generate a New Post from RSS Feeds
```bash
npm run blog:generate
```
This will:
1. Fetch recent articles from industry-specific RSS feeds
2. Filter for relevance to automation/fabrication/AI topics
3. Generate a blog post using AI
4. Save it to the staging area for your review

### List Posts Waiting for Approval
```bash
npm run blog:list
```
Shows all staged posts with their titles and approval commands.

### Approve a Post (Publish It)
```bash
npm run blog:approve -- --file=2025-09-28-article-slug.md
```
Moves the post from staging to the published blog directory.

### Reject a Post
```bash
npm run blog:reject -- --file=2025-09-28-article-slug.md
```
Deletes the staged post.

### Run Weekly Scheduler
```bash
npm run blog:schedule
```
Checks if new content should be generated and creates it automatically.

### Generate Post from Uploaded File
```bash
npm run generate-post -- --file=path/to/your/document.md
```
Still supports the original file-based generation.

## Troubleshooting

### No Articles Found
If the system reports "No relevant articles found":
1. Check that the dev server is running (`npm run dev`)
2. Some RSS feeds may be temporarily unavailable
3. Try again later - feeds update throughout the day

### Rate Limiting
Some feeds may return 429 errors (rate limiting). The system will skip these and try other feeds.

### Customizing Feeds
To add or modify RSS feeds:
1. Edit `rss-config.json`
2. Add new feed objects with `name`, `url`, and `categories`
3. Update keywords as needed
4. Test with `npm run blog:generate`

## Workflow Summary

1. **Generate**: `npm run blog:generate` (creates posts in staging)
2. **Review**: `npm run blog:list` (see what's waiting for approval)
3. **Approve**: `npm run blog:approve -- --file=filename.md` (publish to blog)
4. **Schedule**: Set up weekly automation with `npm run blog:schedule`

The system is designed for busy business owners - it finds relevant content, generates professional posts, and lets you approve them with a single command.

## Keywords

The system looks for articles containing these keywords:
- automation, AI, artificial intelligence, machine learning
- workflow, productivity, developer tools
- software development, laser engraving, custom fabrication
- small business technology, business automation

It excludes articles about:
- politics, cryptocurrency, blockchain, gaming, sports, entertainment, health, finance