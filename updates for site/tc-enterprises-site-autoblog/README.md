# T & C Enterprises Website

Marketing website for **T & C Enterprises**.

- **Framework:** Next.js + Tailwind CSS (App Router)
- **Hosting:** Self-hosted with Nginx reverse proxy
- **Blog:** Markdown posts in `/content/blog`
- **Contact Form:** Next.js API Route → SMTP (contact@tc-enterprises.com)

## Dev

```bash
npm install
npm run dev
```

## Build / Start

```bash
npm run build
npm start
```

## Deploy

### Production (Nginx + Node.js)
For production deployment with nginx reverse proxy:

1. **Build the application:**
   ```bash
   npm run build
   ```

2. **Start the production server:**
   ```bash
   npm start  # Runs on port 3000 by default
   ```

3. **Configure nginx:**
   - Copy `nginx/sites-enabled/tc-enterprises.com.conf` to `/etc/nginx/sites-enabled/`
   - Update paths in the config to match your deployment directory
   - Create required directories: `/var/www/tc-enterprises.com/logs/`
   - Set up SSL certificates (see SSL section below)
   - Configure basic auth for admin access: `htpasswd -c /etc/nginx/.auth/tc_admin.htpasswd admin_user`

4. **Environment variables:**
   Set the following environment variables for the Node.js process:
   - `SMTP_HOST`
   - `SMTP_PORT` (587 or 465)
   - `SMTP_USER`
   - `SMTP_PASS`
   - `SMTP_SECURE` (`true` for 465, else `false`)
   - `CONTACT_TO` (recipient)
   - `CONTACT_FROM` (e.g., "T&C Website <contact@tc-enterprises.com>")

### SSL Certificate Setup

If you already have SSL certificates installed:
- Update the certificate paths in `nginx/sites-enabled/tc-enterprises.com.conf`
- The config expects certificates at `/etc/letsencrypt/live/tc-enterprises.com/`

If you need new certificates or your current ones are expired:
```bash
# Install certbot if not already installed
sudo apt install certbot python3-certbot-nginx

# Get certificates for your domain
sudo certbot --nginx -d tc-enterprises.com -d www.tc-enterprises.com
```

**Note:** The nginx config includes proxy settings for the chat API (`/api/`) and admin interface (`/admin`) running on port 9001.