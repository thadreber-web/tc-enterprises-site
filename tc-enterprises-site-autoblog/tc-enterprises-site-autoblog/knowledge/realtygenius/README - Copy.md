# Gemini Realtor Assistant

A comprehensive AI-powered real estate CRM and marketing platform designed for modern realtors. Built with Django, featuring mobile-first design and enterprise-grade security.

## 🚀 Features

### Core CRM
- **Property Management** - Add, edit, and organize property listings
- **Lead Management** - Buyer, seller, and rental lead tracking with automated nurturing
- **Contact Management** - Centralized contact database with interaction history
- **Deal Pipeline** - Visual deal tracking with tasks and document management

### AI-Powered Tools
- **Content Generation** - AI-generated property descriptions, headlines, and social posts
- **Marketing Kit** - Automated flyer, postcard, and email campaign creation
- **Price Recommendations** - AI-driven pricing suggestions based on market data
- **Lead Qualification** - Automated lead scoring and qualification
- **Compliance Checking** - Fair housing compliance validation

### Marketing & Media
- **Media Tools** - Image processing, watermarking, and slideshow creation
- **Open House Management** - QR code sign-ins and guest tracking
- **Tour Planning** - Automated itinerary generation
- **Neighborhood Reports** - AI-generated area summaries

### Rental Management
- **Rental Leads** - Specialized rental lead tracking
- **Application Screening** - Automated tenant screening with AI overlay
- **Rental Valuation** - Market-based rental pricing analysis

### Analytics & Reporting
- **Performance Dashboard** - Lead conversion and deal metrics
- **Export Tools** - CSV and PDF exports with branding
- **Analytics** - Comprehensive business intelligence

## 🛡️ Security Features

- Enterprise-grade security with 12 comprehensive security systems
- Path traversal protection
- XSS prevention and input sanitization
- Comprehensive authorization checks
- Resource leak protection
- Security event monitoring and logging

## 📱 Mobile-First Design

Optimized for realtors who work primarily from mobile devices with:
- Touch-friendly interfaces
- Mobile-optimized image galleries
- Responsive design across all features
- Fast loading times

## 🔧 Technology Stack

- **Backend**: Django 4.x, Python 3.x
- **Database**: PostgreSQL
- **Storage**: Local filesystem or S3-compatible (Cloudflare R2)
- **AI**: Google Gemini API
- **Containerization**: Docker & Docker Compose
- **Frontend**: HTML5, CSS3, JavaScript, Tailwind CSS

## 📋 Prerequisites

- Docker and Docker Compose
- Python 3.8+ (for local development)
- PostgreSQL (handled by Docker)
- Google Gemini API key (optional, for AI features)

## 🚀 Quick Start

### 1. Clone and Setup
```bash
git clone <your-repo-url>
cd gemini-realtor-assistant
```

### 2. Environment Configuration
```bash
# Copy environment files
cp .env.example .env.local
cp .env.example .env.prod

# Edit .env.local with your settings
# Required: DATABASE_URL, SECRET_KEY
# Optional: GEMINI_API_KEY, CLOUDFLARE_R2_* (for AI and cloud storage)
```

### 3. Start with Docker
```bash
# Development
docker-compose up -d

# VPS Production
docker-compose -f docker-compose.vps.yml up -d
```

### 4. Initialize Database
```bash
docker-compose -f docker-compose.vps.yml exec app python manage.py migrate
docker-compose -f docker-compose.vps.yml exec app python manage.py createsuperuser
```

### 5. Access Application
- **Local**: http://localhost:8000
- **Production**: Your domain

## 🔧 Configuration

### Environment Variables

**Required:**
- `SECRET_KEY` - Django secret key
- `DATABASE_URL` - PostgreSQL connection string
- `DEBUG` - Set to False for production

**Optional:**
- `GEMINI_API_KEY` - For AI content generation
- `USE_S3` - Enable S3 storage (true/false)
- `CLOUDFLARE_R2_*` - S3-compatible storage settings
- `ADMIN_ENABLED` - Enable/disable admin interface
- `ADMIN_URL` - Custom admin URL path

### Storage Configuration

**Local Storage (Development):**
```env
USE_S3=false
```

**S3 Storage (Production):**
```env
USE_S3=true
CLOUDFLARE_R2_ENDPOINT_URL=your-endpoint
CLOUDFLARE_R2_ACCESS_KEY_ID=your-key
CLOUDFLARE_R2_SECRET_ACCESS_KEY=your-secret
CLOUDFLARE_R2_BUCKET_NAME=your-bucket
```

## 🚀 Deployment

### VPS Deployment

1. **Update your VPS code:**
```bash
git pull origin main
```

2. **Rebuild containers:**
```bash
docker-compose -f docker-compose.vps.yml down
docker-compose -f docker-compose.vps.yml up -d --build
```

3. **Run migrations:**
```bash
docker-compose -f docker-compose.vps.yml exec app python manage.py migrate
```

4. **Collect static files:**
```bash
docker-compose -f docker-compose.vps.yml exec app python manage.py collectstatic --noinput
```

### Production Checklist

- [ ] Set `DEBUG=False`
- [ ] Configure proper `ALLOWED_HOSTS`
- [ ] Set up SSL/HTTPS
- [ ] Configure backup strategy
- [ ] Set up monitoring
- [ ] Configure email settings
- [ ] Test all features

## 🧪 Testing

```bash
# Run all tests
docker-compose -f docker-compose.vps.yml exec app python manage.py test

# Run security tests specifically
docker-compose -f docker-compose.vps.yml exec app python manage.py test realtor.tests.test_security

# Run with coverage
docker-compose -f docker-compose.vps.yml exec app coverage run --source='.' manage.py test
docker-compose -f docker-compose.vps.yml exec app coverage report
```

## �️ Development

### Pre-commit Hooks

This project uses pre-commit hooks to maintain code quality. To set up:

```bash
# Install development dependencies
pip install -r requirements-dev.txt

# Install pre-commit hooks
pre-commit install

# Run hooks on all files
pre-commit run --all-files

# Optional: Run hooks manually before committing
pre-commit run
```

### Code Quality Tools

- **Black**: Code formatting
- **isort**: Import sorting
- **flake8**: Linting and style checking
- **mypy**: Static type checking

### Development Workflow

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make your changes
3. Run pre-commit hooks: `pre-commit run --all-files`
4. Run tests: `python manage.py test`
5. Commit your changes: `git commit -m "Add your feature"`
6. Push and create a pull request

## �📚 API Documentation

### Key Models
- **Property** - Real estate listings
- **Lead** - Potential clients (buyer/seller/rental)
- **Contact** - Client contact information
- **Deal** - Transaction pipeline
- **GeneratedContent** - AI-generated marketing content

### Security Features
- All views require authentication
- Ownership-based authorization on all resources
- CSRF protection on API endpoints

## 🔐 Deployment security note

On the VPS deployment this project reads `GEMINI_API_KEY` from the repository's `./.env.vps` file (loaded by Docker Compose via `env_file`). For production:

- The `.env.vps` file on the server is sensitive and must be permissioned (e.g. `chmod 600`). Backups of the file are stored under `~/gemini-realtor-assistant/backups/` when updated.
- Do NOT commit real API keys into the repository. Use environment variables, Docker secrets, or a dedicated secrets manager (GCP Secret Manager, AWS Secrets Manager, HashiCorp Vault) for safer handling.
- Rotate the `GEMINI_API_KEY` if it is ever exposed (including if pasted into chat). After rotation, update the VPS `.env.vps` and restart the Docker Compose stack:

```bash
# Example (on the VPS)
cp .env.vps backups/.env.vps.$(date +%Y%m%d%H%M%S)
# Update or add GEMINI_API_KEY line in .env.vps
docker compose -f docker-compose.vps.yml up -d --build
```

If you want help migrating to Docker secrets or a cloud secret manager, I can provide a migration plan and exact commands.
- Input validation and sanitization
- Path traversal protection

## 🔒 Security

This application implements enterprise-grade security:
- Comprehensive input validation
- XSS prevention
- Path traversal protection
- Resource leak prevention
- Security event logging
- Authorization checks on all sensitive operations

See `SECURITY_FIXES.md` for detailed security implementation.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests
5. Submit a pull request

## 📄 License

[Your License Here]

## 🆘 Support

For issues and questions:
1. Check the User Guide (USER_GUIDE.md)
2. Review the deployment guide (DEPLOYMENT.md)
3. Check existing issues
4. Create a new issue with detailed information

## 🗺️ Roadmap

- [ ] Mobile app development
- [ ] Advanced analytics dashboard
- [ ] Calendar integration
- [ ] SMS notifications
- [ ] Multi-language support
- [ ] White-label solutions