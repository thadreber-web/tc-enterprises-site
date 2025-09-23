# TC Enterprises - Self-hosting Guide

This project is an Eleventy static site with a couple of Node serverless-style endpoints under `api/`.

This README explains how to self-host on a VPS using the included `server.js` (Express) which serves the built site from `_site` and mounts the `api` handlers.

Prerequisites
- Node.js 18+ installed
- NPM

Quick start (development)

1. Install dependencies

```powershell
Set-Location -LiteralPath 'd:\TC-Enterprises\website'
npm install
```

2. Build the static site

```powershell
npm run build
```

3. Create `.env` from `.env.example` and fill secrets (optional)

4. Start the self-hosted server

```powershell
npm start
# or

node server.js
```

The server will attempt to bind to `PORT` (defaults to 3000) and will try subsequent ports if the chosen one is in use.

Notes on API endpoints
- `/api/chat` — forwards to HuggingFace inference if `HUGGINGFACE_API_KEY` is set. Without the key, it returns a placeholder reply.
- `/api/contact` — sends email using SMTP. You need to install `nodemailer` (already included in `package.json`) and set `SMTP_*` env vars.

Security
- Do not commit `.env` containing secrets. Use process managers (systemd, pm2) on your VPS and set env vars in the service config.

Troubleshooting
- If an API handler throws on import, check server logs. You can also run `node` REPL to import and test handlers directly.# TC-Enterprises Website — Self-hosting Guide

This project is an Eleventy static site with two server endpoints in `api/`:

- `POST /api/chat` — chat proxy (HuggingFace optional)
- `POST /api/contact` — send contact emails via SMTP

This guide explains how to run the site on your VPS (Node >= 18 recommended).

Quick start
1. Install dependencies:
```powershell
Set-Location -LiteralPath 'd:\TC-Enterprises\website'
npm install
```

2. Build the static site:
```powershell
npm run build
```

3. Start the production server (serves `_site` and `api/*`):
```powershell
# ensure you created a .env with real values
Set-Location -LiteralPath 'd:\TC-Enterprises\website'
node server.js
```

Notes and recommendations
- The `server.js` file is a minimal Express server that serves files in `_site` and mounts `api/chat.js` and `api/contact.js` as POST endpoints.
- Add your secrets in a `.env` file (copy `.env.example`), or provide them via your process manager (systemd, PM2, Docker secrets, etc.).
- The `api/contact.js` handler uses `nodemailer`. Use a test SMTP server (MailHog or Ethereal) while developing to avoid sending real emails.
- If you use the HuggingFace AI route, set `HUGGINGFACE_API_KEY`. The `chat` handler will reply with a placeholder if the key is missing.

Deploy tips for VPS
- Run behind a process manager like `pm2` or systemd to restart on failure.
- Use a reverse proxy (Nginx) for TLS termination and static asset caching.
- For scaling, consider separating static hosting (Nginx or CDN) from dynamic API processes.

Small fixes applied
- Fixed invalid destructuring (`**rest` -> `...rest`) in `api/contact.js`.
- Added `server.js`, `.env.example`, and `README.md`.
- Added `start` script to `package.json`.

If you want, I can:
- Add a `Dockerfile` and `docker-compose.yml` for one-command deploy to your VPS.
- Configure `pm2` ecosystem file or systemd unit file for production.

Repository cleanup helper
---------------------------------
If you want to remove site contents from the main branch but keep `README.md`, `LICENSE`, `.gitignore`, `.gitattributes`, and `.env.example`, there are helper scripts in `scripts/`:

- `scripts/create-clean-repo.ps1` (PowerShell)
- `scripts/create-clean-repo.sh` (bash)

What the scripts do:
- Create a local backup branch called `backup-full` (full history remains accessible).
- Create a new orphan branch `clean-main` that contains only the preserved files listed above (if present in the backup).
- Commit the new branch locally and show the `git push --force` command you should run manually after review.

Usage (PowerShell):
```powershell
# ensure your working tree is clean
pwsh ./scripts/create-clean-repo.ps1
# Inspect branches: git checkout backup-full; git checkout clean-main
# If satisfied, force-push to replace remote main:
# git push --force origin clean-main:main
```

Important: force-pushing will rewrite remote history. Coordinate with collaborators and make sure you have backups.

Enable HuggingFace for `/api/chat` (local testing)
1. Create `.env` from `.env.example` and set `HUGGINGFACE_API_KEY` and optionally `HF_MODEL`.
2. Start your server:

```powershell
npm run build
node server.js
```

3. In another shell, run the test harness (defaults to `http://localhost:3000`):

```powershell
npm run test-chat
```

If `HUGGINGFACE_API_KEY` is not set the endpoint will return a placeholder reply so you can verify end-to-end behavior before adding real credentials.