import express from 'express';
import path from 'path';
import dotenv from 'dotenv';

// Load .env if present
dotenv.config();

const app = express();
app.use(express.json());

// Serve static built site from the _site folder
const staticDir = path.join(process.cwd(), '_site');
app.use(express.static(staticDir));

// Mount API handlers dynamically so edits to API files are picked up without restart
app.all('/api/:fn', async (req, res) => {
  const fn = req.params.fn;
  try {
    if (!['chat', 'contact'].includes(fn)) return res.status(404).json({ ok: false, error: 'Not found' });
    // Use a file URL with a timestamp query to avoid module cache during development
    const fileUrl = new URL(`./api/${fn}.js`, import.meta.url);
    fileUrl.searchParams.set('t', String(Date.now()));
    const mod = await import(fileUrl.href);
    const handler = mod.default;
    if (typeof handler !== 'function') return res.status(500).json({ ok: false, error: 'Handler is not a function' });
    await handler(req, res);
  } catch (e) {
    console.error('API error:', e);
    res.status(500).json({ ok: false, error: e?.message || 'Server error' });
  }
});

// Fallback to index.html for basic client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(staticDir, 'index.html'), (err) => {
    if (err) res.status(404).send('Not found');
  });
});

function startServer(port) {
  const server = app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.warn(`Port ${port} in use, trying ${port + 1}...`);
      startServer(port + 1);
    } else {
      console.error('Server error:', err);
      process.exit(1);
    }
  });
}

const port = Number(process.env.PORT || 3000);
startServer(port);
