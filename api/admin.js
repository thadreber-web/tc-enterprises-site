import fs from 'fs/promises';
import path from 'path';
import { promisify } from 'util';
import { exec as _exec } from 'child_process';

const exec = promisify(_exec);

function unauthorized(res) {
  res.status(401).json({ ok: false, error: 'Unauthorized - missing or invalid admin secret' });
}

export default async function handler(req, res) {
  try {
    const adminSecret = process.env.ADMIN_SECRET;
    if (!adminSecret) {
      return res.status(500).json({ ok: false, error: 'ADMIN_SECRET not configured on server' });
    }

    const provided = req.headers['x-admin-secret'] || req.headers['x_admin_secret'];
    if (!provided || provided !== adminSecret) return unauthorized(res);

    const action = (req.query && req.query.action) || (new URL(req.url, 'http://localhost').searchParams.get('action')) || (req.method === 'POST' && req.body && req.body.action) || 'list';

    const draftsDir = path.join(process.cwd(), 'src', 'blog', 'drafts');
    await fs.mkdir(draftsDir, { recursive: true }).catch(() => {});

    if (action === 'list') {
      const names = await fs.readdir(draftsDir).catch(() => []);
      const mdFiles = names.filter(n => n.endsWith('.md') || n.endsWith('.mdx'));
      const drafts = await Promise.all(mdFiles.map(async (f) => {
        const filePath = path.join(draftsDir, f);
        const content = await fs.readFile(filePath, 'utf8').catch(() => '');
        const proofPath = filePath + '.proof.md';
        const proof = await fs.readFile(proofPath, 'utf8').catch(() => '');
        return { file: f, content, proof };
      }));
      return res.json({ ok: true, drafts });
    }

    if (action === 'save-proof') {
      const { file, proof } = req.body;
      if (!file) return res.status(400).json({ ok: false, error: 'file is required' });
      const proofPath = path.join(draftsDir, `${file}.proof.md`);
      await fs.writeFile(proofPath, proof || '', 'utf8');
      return res.json({ ok: true });
    }

    if (action === 'publish') {
      const { files, title } = req.body || {};
      if (!Array.isArray(files) || files.length === 0) return res.status(400).json({ ok: false, error: 'files array required' });

      if (!process.env.GITHUB_ADMIN_TOKEN || !process.env.GITHUB_REPO) {
        return res.status(500).json({ ok: false, error: 'GITHUB_ADMIN_TOKEN and GITHUB_REPO must be set in env' });
      }

      const branch = `publish/ui-${Date.now()}`;

      // Create branch from origin/main
      await exec('git fetch origin main');
      await exec(`git checkout -b ${branch} origin/main`);

      // Copy drafts into posts
      const postsDir = path.join(process.cwd(), 'src', 'blog', 'posts');
      await fs.mkdir(postsDir, { recursive: true }).catch(() => {});

      for (const f of files) {
        const src = path.join(draftsDir, f);
        const dest = path.join(postsDir, path.basename(f));
        await fs.copyFile(src, dest);
        await exec(`git add "${path.relative(process.cwd(), dest)}"`);
      }

      const msg = `Publish drafts via admin UI: ${files.join(', ')}`;
      await exec(`git commit -m "${msg.replace(/"/g, '\\"')}"`).catch(() => {});
      await exec(`git push origin HEAD:${branch}`);

      // Create PR via GitHub API
      const repo = process.env.GITHUB_REPO; // owner/repo
      const token = process.env.GITHUB_ADMIN_TOKEN;
      const prTitle = title || `Publish: Drafts (${new Date().toISOString()})`;
      const bodyText = `This PR was created by the admin UI to publish drafts: ${files.join(', ')}`;

      const resp = await fetch(`https://api.github.com/repos/${repo}/pulls`, {
        method: 'POST',
        headers: {
          'Authorization': `token ${token}`,
          'Accept': 'application/vnd.github.v3+json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title: prTitle, head: branch, base: 'main', body: bodyText })
      });

      if (!resp.ok) {
        const txt = await resp.text();
        return res.status(500).json({ ok: false, error: 'GitHub API error', details: txt });
      }
      const data = await resp.json();
      return res.json({ ok: true, prUrl: data.html_url });
    }

    return res.status(400).json({ ok: false, error: 'unknown action' });
  } catch (err) {
    console.error('admin api error', err);
    res.status(500).json({ ok: false, error: String(err) });
  }
}
