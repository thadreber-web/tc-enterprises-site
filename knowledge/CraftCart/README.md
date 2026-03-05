# CraftCart – Seller Toolkit

A complete, runnable starter for a SaaS that streamlines small‑seller workflows (listings, inventory, orders, basic automations).  
This repo includes a TypeScript API (Express + Prisma + Postgres) and a Vite + React frontend, with Docker Compose for local dev.

## Features
- Email/password auth with JWT
- Products, Orders, Listings APIs (Prisma + Postgres)
- Simple listing generator from products
- Scheduled jobs (cron) stubs for channel syncs
- Optional MinIO/S3 integration (pre‑wired env)
- Vite + React dashboard (login, products, orders, settings)
- ESLint + Prettier + basic Jest tests
- Dockerized dev stack
- MCP Tools for AI-assisted development

## Quick Start (Docker)
```bash
# 1) Copy env
cp .env.example .env

# 2) Start services
docker compose up --build -d

# 3) Initialize DB & seed
docker compose exec api npx prisma migrate deploy
docker compose exec api node prisma/seed.js

# 4) Open app
# API: http://localhost:4000/health
# Web: http://localhost:5173
# Login with: admin@example.com / password123!
```

## Without Docker (local dev)
- Install Postgres 14+ and create database `craftcart`.
- Set `DATABASE_URL` in `.env`.
- In `backend/`: `npm i && npm run prisma:generate && npm run dev`.
- In `frontend/`: `npm i && npm run dev`.

## MCP Tools for AI Assistance

CraftCart includes built-in MCP (Model Context Protocol) tools that allow AI assistants to interact with your codebase. These tools enable AI to read files, write code, execute commands, search the codebase, and validate code syntax.

To enable MCP tools:
```bash
ENABLE_MCP=true npm run dev
```

The MCP server will start on port 3002. See [backend/src/mcp/README.md](backend/src/mcp/README.md) for detailed documentation on available tools and endpoints.

**Security Warning**: MCP tools provide powerful capabilities and should only be enabled in development environments. Never enable MCP tools in production as they allow arbitrary file operations and command execution.

## Deploy
See `deploy/deploy.config.json` and `deploy/nginx.conf` for a simple Nginx reverse proxy.  
Set strong `JWT_SECRET`, rotate DB creds, and move to `NODE_ENV=production`.

## Conventions
- 12‑factor env
- Secure secrets via env only (never committed)
- Lint & tests in CI (GitHub Actions suggested)
- Paths & manifests kept simple; if/when asset manifests are introduced, follow **LCP‑Contract‑v1** naming (tenants/{tenant}/assets/{assetId}/v{version}/… + `manifest.json`).

## License
MIT