import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const base = process.env.BASE_URL || 'http://localhost:3000';

async function test() {
  const res = await fetch(`${base}/api/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: 'Hello, can you summarize this site?' })
  });

  console.log(`HTTP ${res.status} ${res.statusText}`);
  const ct = res.headers.get('content-type') || '';
  console.log('Content-Type:', ct);

  if (ct.includes('application/json')) {
    const data = await res.json();
    console.log('JSON response:', data);
  } else {
    const text = await res.text();
    console.log('Text response (first 200 chars):', text.slice(0, 200));
  }
}

test().catch(e => { console.error(e); process.exit(1); });
