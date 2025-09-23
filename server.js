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

// Try to find an open port starting at `startPort`. If many ports are busy,
// fall back to an ephemeral port (0) assigned by the OS.
async function findAndListen(startPort, maxAttempts = 50) {
  let attempt = 0;
  let port = Number(startPort);

  while (attempt < maxAttempts) {
    try {
      const server = await new Promise((resolve, reject) => {
        const s = app.listen(port, '0.0.0.0', () => resolve(s));
        s.on('error', (err) => reject(err));
      });
      return server;
    } catch (err) {
      if (err && (err.code === 'EADDRINUSE' || err.code === 'EACCES')) {
        console.warn(`Port ${port} unavailable (attempt ${attempt + 1}/${maxAttempts}). Trying ${port + 1}...`);
        port += 1;
        attempt += 1;
        continue;
      }
      // Unexpected error — rethrow
      throw err;
    }
  }

  // If we exhausted the range, fall back to ephemeral port 0
  console.warn(`Exhausted ${maxAttempts} attempts — falling back to ephemeral port (0).`);
  const server = await new Promise((resolve, reject) => {
    const s = app.listen(0, '0.0.0.0', () => resolve(s));
    s.on('error', (err) => reject(err));
  });
  return server;
}

const configuredPort = Number(process.env.PORT || 3000);
(async () => {
  try {
    const server = await findAndListen(configuredPort, 100);
    const addr = server.address();
    const boundPort = addr && addr.port ? addr.port : configuredPort;
    console.log(`Server running at http://localhost:${boundPort}`);
    // Also show full listen address (useful in containers)
    if (addr && addr.address) console.log(`Listening on ${addr.address}:${addr.port}`);
  } catch (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
})();
