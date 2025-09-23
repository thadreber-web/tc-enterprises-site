Run with Docker (quick start)

Prerequisites
- Docker and Docker Compose installed on your machine or VPS.

1) Build and start the service (in PowerShell)
```powershell
Set-Location -LiteralPath 'D:\TC-Enterprises\website'
# Build the image
docker-compose build
# Start the container in background
docker-compose up -d
```

2) Provide secrets
- Create a `.env` file in the project root with the following variables (example):
```
HUGGINGFACE_API_KEY=sk-...
HF_MODEL=gpt2
SMTP_HOST=smtp.example
SMTP_PORT=587
SMTP_USER=user@example.com
SMTP_PASS=secret
SMTP_FROM=site@example.com
SMTP_TO=owner@example.com
RECAPTCHA_SECRET=...
```
Docker Compose will read these and substitute at runtime.

3) View site
- Open `http://localhost:3000` in your browser.

Logs
```powershell
# Show logs
docker-compose logs -f
```

Stop
```powershell
docker-compose down
```

Notes
- The Docker image builds the site during image build. If you edit site sources, rebuild or run `docker-compose up --build`.
- For production, consider using a multi-stage build and serving static `_site` with Nginx or a CDN.
