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

The server will attempt to bind to `PORT` (defaults to 3010) and will try subsequent ports if the chosen one is in use.

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
 - Added: `api/generate` - a safe Gemini proxy with caching, retries, token estimates, and daily budget enforcement. Use it instead of calling Gemini directly from clients.

Quick test (PowerShell):
```powershell
$b = @{ prompt = "Hello, please reply in one sentence." } | ConvertTo-Json
Invoke-RestMethod -Method Post -Uri http://localhost:3010/api/generate -Body $b -ContentType 'application/json'
```

AI Proxy configuration (env variables)
-------------------------------------

The following environment variables configure the `/api/generate` proxy and cost controls. Set them in your `.env` or your orchestration.

- `GEMINI_API_KEY` (required) — your server-side API key for Gemini.
- `GEMINI_MODEL` — default model to use (recommended: `gemini-2.5-flash`).
- `DAILY_BUDGET_USD` — hard daily budget in USD (default: `5`). When reached, requests are rejected.
- `MODEL_MAX_OUTPUT_TOKENS` — per-request token cap (default: `512`).
- `RATE_LIMIT_PER_MINUTE` — token-bucket tokens per minute per IP (default: `30`).
- `CACHE_TTL_SECONDS` — seconds to keep responses in LRU cache (default: `300`).
- `CACHE_MAX_ITEMS` — max entries in LRU cache (default: `200`).
- `USAGE_LOG_PATH` — path to usage log file (optional). Defaults to OS temp directory if unset.
- `BUDGET_ALERT_WEBHOOK` — webhook URL to receive JSON alerts when budget thresholds are crossed (optional).
- `ADMIN_SECRET` — admin secret used by `/api/admin` and the `/admin` UI. Keep this secret.
- `PRICING_JSON` or `PRICING_<MODEL_NAME>` — optional per-model pricing overrides (e.g. `PRICING_gemini_2_5_flash=0.05`).

Additional pricing configuration
--------------------------------

- `PRICING_URL` — optional URL to fetch provider pricing JSON. If set, the server will fetch it on startup and periodically (see `PRICING_REFRESH_MINUTES`).
- `PRICING_REFRESH_MINUTES` — interval in minutes to poll `PRICING_URL` for updates (default: `60`). Set to a lower value only if the provider allows frequent polling.
- `PRICING_FILE_PATH` — optional path to persist fetched pricing JSON to disk (default: `./data/pricing.json`). If provided, the server will write pricing to this file after each successful fetch and will load it on startup if present.

Recommended initial values for a personal site:

- `DAILY_BUDGET_USD=5`
- `MODEL_MAX_OUTPUT_TOKENS=256`
- `RATE_LIMIT_PER_MINUTE=30`
- `CACHE_TTL_SECONDS=300`
- `CACHE_MAX_ITEMS=200`

Notes:
- The cost estimator uses `lib/pricing.js`. Update the pricing values or provide `PRICING_JSON` with real model pricing for accurate enforcement.
- The rate limiter, cache and circuit breaker are in-memory (sufficient for a single-instance site). If you scale to multiple instances later, add Redis and reconfigure `REDIS_URL` (not required now).

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

3. In another shell, run the test harness (defaults to `http://localhost:3010`):

```powershell
npm run test-chat
```

If `HUGGINGFACE_API_KEY` is not set the endpoint will return a placeholder reply so you can verify end-to-end behavior before adding real credentials.