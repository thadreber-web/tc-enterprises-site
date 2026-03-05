# Crochet Pattern Studio

A complete crochet pattern management system with a beautiful React frontend, FastAPI backend, PostgreSQL database, and comprehensive pattern validation and compilation.

## Features

### Frontend (React/Vite)
- **Beautiful Purple Theme**: Custom Tailwind CSS with purple color scheme
- **Password Protection**: Secure authentication system
- **Pattern Editor**: Comprehensive form and JSON editing modes
- **Pattern Viewer**: Display compiled patterns with print/save functionality
- **Pattern Library**: Manage your collection of crochet patterns
- **Local File Operations**: Download patterns as JSON, print functionality

### Backend (FastAPI)
- **Pattern Validation**: Comprehensive stitch-ledger checks and skill governance
- **Text Compilation**: Jinja2 templates for human-readable patterns
- **PDF Compilation**: Generate PDF patterns (single-page for reliability)
- **Database Integration**: PostgreSQL storage with full CRUD operations
- **Queue System**: RQ workers for background processing

### Database (PostgreSQL)
- **Pattern Storage**: Complete pattern data with metadata, parts, rounds, and assembly
- **Version Control**: Pattern versioning system
- **Search & Filtering**: Efficient querying and indexing
- **Data Integrity**: Foreign key constraints and transactions

## Project Structure

```
crochet-pattern-studio/
├── frontend/                 # React/Vite frontend
│   ├── src/
│   │   ├── components/       # React components
│   │   ├── contexts/         # React contexts
│   │   ├── index.css         # Global styles
│   │   └── App.tsx           # Main app component
│   ├── Dockerfile            # Frontend container
│   └── package.json          # Frontend dependencies
├── api/                      # FastAPI backend
│   ├── main.py              # FastAPI application
│   ├── models.py            # Pydantic models
│   ├── database.py          # Database operations
│   └── schemas/             # JSON schemas
├── validation/              # Pattern validation
│   ├── validator.py         # Core validation logic
│   ├── rules.py             # Skill governance rules
│   └── shape_library.py     # Shape validation
├── compiler/                # Pattern compilation
│   ├── text_compiler.py     # Text compilation
│   ├── pdf_compiler.py      # PDF compilation
│   └── templates/           # Jinja2 templates
├── database/                # Database setup
│   └── init.sql            # PostgreSQL schema
├── storage/                 # File storage backend
├── workers/                 # RQ workers
├── docker-compose.yml       # Docker orchestration
├── requirements.txt         # Python dependencies
└── .env                     # Environment configuration
```

## Quick Start

### Prerequisites
- Docker and Docker Compose
- Node.js 18+ (for local frontend development)
- Python 3.9+ (for local backend development)

### Using Docker (Recommended)

1. **Clone and setup**:
```bash
git clone <repository-url>
cd crochet-pattern-studio
cp .env.example .env
```

2. **Start all services**:
```bash
docker compose up --build -d
```

3. **Access the application**:
- Frontend: http://localhost:3000
- Backend API: http://localhost:8080
- Database: localhost:5432

### Local Development

1. **Backend setup**:
```bash
cd crochet-pattern-studio
python -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate
pip install -r requirements.txt
uvicorn api.main:app --reload --port 8080
```

2. **Frontend setup**:
```bash
cd frontend
npm install
npm run dev
```

3. **Database setup**:
```bash
# Start PostgreSQL with Docker
docker run --name crochet-postgres -e POSTGRES_DB=crochet_patterns -e POSTGRES_USER=crochet_user -e POSTGRES_PASSWORD=crochet_password -p 5432:5432 -d postgres:15-alpine
```

## Usage

### Authentication
- Default password: `crochet2025`
- Access the application at http://localhost:3000

### Creating Patterns
1. Navigate to the Pattern Editor
2. Fill in pattern metadata (name, skill level, gauge, etc.)
3. Add parts with their respective rounds
4. Add assembly instructions
5. Validate and save the pattern

### Managing Patterns
- View all saved patterns in the Pattern Library
- Edit existing patterns
- View compiled patterns with print functionality
- Download patterns as JSON files
- Delete patterns from the collection

## API Endpoints

### Pattern Management
- `POST /patterns` - Save a new pattern
- `GET /patterns` - Get all patterns
- `GET /patterns/{id}` - Get a specific pattern
- `DELETE /patterns/{id}` - Delete a pattern

### Validation & Compilation
- `POST /validate` - Validate pattern JSON
- `POST /compile/text` - Compile pattern to text
- `POST /compile/pdf` - Compile pattern to PDF

### System
- `GET /health` - Health check
- `GET /status` - System status

## Database Schema

The PostgreSQL database includes the following main tables:
- `patterns` - Main pattern metadata
- `pattern_parts` - Pattern parts (head, body, etc.)
- `pattern_rounds` - Individual rounds within parts
- `pattern_assembly` - Assembly instructions
- `pattern_versions` - Version control for patterns
- `pattern_tags` - Pattern categorization tags

## Configuration

### Environment Variables (.env)
```bash
# API
API_HOST=0.0.0.0
API_PORT=8080

# Database
DATABASE_URL=postgresql://crochet_user:crochet_password@postgres:5432/crochet_patterns
POSTGRES_HOST=postgres
POSTGRES_PORT=5432
POSTGRES_DB=crochet_patterns
POSTGRES_USER=crochet_user
POSTGRES_PASSWORD=crochet_password

# Redis (queue)
REDIS_URL=redis://redis:6379/0

# Storage
ARTIFACTS_DIR=/data/artifacts

# Schema
DEFAULT_SCHEMA=amig-1.0

# Gemini API (for AI generation)
GEMINI_API_KEY=your_gemini_api_key_here
```

## Development

### Adding New Features
1. Frontend components go in `frontend/src/components/`
2. Backend endpoints go in `api/main.py`
3. Database changes go in `database/init.sql`
4. Update Docker configuration as needed

### Testing
- Frontend: `npm test` in the frontend directory
- Backend: Use the validation endpoints with sample patterns
- Database: Connect directly to PostgreSQL for data verification

## Deployment

### Production Docker Setup
```bash
# Build and deploy
docker compose -f docker-compose.yml up --build -d

# View logs
docker compose logs -f

# Scale workers
docker compose up -d --scale worker-validate=3 --scale worker-compile=3
```

### Environment Setup
1. Update `.env` with production values
2. Configure reverse proxy (nginx/Caddy) for SSL
3. Set up database backups
4. Configure monitoring and logging

## Troubleshooting

### Common Issues
- **Frontend not connecting to backend**: Check CORS settings and API URLs
- **Database connection errors**: Verify PostgreSQL is running and credentials are correct
- **Pattern validation failures**: Check JSON structure against the schema
- **Compilation errors**: Ensure all required fields are present

### Logs
```bash
# View all service logs
docker compose logs

# View specific service logs
docker compose logs api
docker compose logs frontend
docker compose logs postgres
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
```

