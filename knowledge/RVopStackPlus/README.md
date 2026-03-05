# RV Ops Stack

A comprehensive system integrating API, React UI, authentication, and AI summarization features for asset management, maintenance scheduling, and financial analysis.

## Quick Start

```bash
cp .env.example .env
./run.sh   # Windows: run.bat
cd frontend
cp .env.example .env
npm install
npm run dev
```

## Implemented Improvements

### Frontend Improvements
- Added error boundaries to handle component failures gracefully
- Implemented loading states for better UX during API calls
- Enhanced charts with recharts library for more interactive data visualization
- Added unit tests for React components
- Improved accessibility (a11y) compliance with proper ARIA attributes and keyboard navigation
- Added skip-to-content functionality for better accessibility

### Backend Improvements
- Added input validation to API endpoints using Pydantic models
- Implemented rate limiting for public endpoints to prevent abuse
- Added comprehensive logging for debugging and monitoring
- Added unit tests for business logic
- Enhanced security with additional HTTP headers (X-Content-Type-Options, X-Frame-Options, etc.)
- Improved CORS configuration

### API Improvements
- Ensured consistent error response format across all endpoints
- Added API versioning for future compatibility (v1 endpoints available)
- Implemented proper pagination for list endpoints with skip/limit parameters
- Added comprehensive API documentation

### Database Improvements
- Added indexes for frequently queried fields to improve performance
- Created database backup procedures with automated backup script
- Optimized SQL queries for better performance
- Added composite indexes for common query patterns

## MCP Server Setup (Optional)

This project includes an MCP (Model Context Protocol) server that can enhance development with AI-assisted tools.

See [MCP-README.md](MCP-README.md) for detailed instructions on setting up and using the MCP server.

To set up the MCP server:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the MCP server:
   ```bash
   npm run mcp
   ```

3. The MCP server will be available at http://localhost:4000

The MCP server provides enhanced code understanding and tooling capabilities that can help speed up development.

## Building & Deployment

```powershell
docker compose up -d --build
curl http://localhost:8080/health
python -m pytest -q
```

## Frontend Development

```powershell
cd frontend
npm install
npm run build
```

## Testing

### Backend Testing
```bash
# Run all backend tests
python -m pytest backend/tests/

# Run specific test files
python -m pytest backend/tests/test_maintenance_logic.py
```

### Frontend Testing
```bash
cd frontend
npm test
```

## Security
The application implements several security measures:
- Proper authentication with Bearer tokens or Cloudflare Access
- Rate limiting to prevent abuse
- Security headers (X-Content-Type-Options, X-Frame-Options, etc.)
- Input validation on all API endpoints
- SQL injection prevention through parameterized queries

## Performance Optimization
- Database indexes for frequently queried fields
- Pagination for list endpoints to reduce payload size
- Efficient database queries with proper WHERE clauses
- Caching strategies where appropriate
