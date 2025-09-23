#!/usr/bin/env bash
set -euo pipefail

if [ ! -d .git ]; then
  echo "This directory does not look like a git repository (no .git). Run from repo root." >&2
  exit 1
fi

if [ -n "$(git status --porcelain)" ]; then
  echo "Working tree is not clean. Please commit or stash changes before running." >&2
  git status --short
  exit 1
fi

echo "Creating backup branch 'backup-full'..."
git branch -f backup-full

echo "Creating orphan branch 'clean-main'..."
git checkout --orphan clean-main

echo "Removing all files from index and working tree..."
git rm -rf --quiet . || true

# Files to preserve
keep=(README.md LICENSE .gitignore .gitattributes .env.example)
for f in "${keep[@]}"; do
  echo "Attempting to restore $f from backup-full..."
  if git show backup-full:$f >/dev/null 2>&1; then
    git checkout backup-full -- "$f"
    git add "$f"
    echo "Restored $f"
  else
    echo "File $f not found on backup-full; skipping" >&2
  fi
done

git commit -m "Create clean branch with only README/LICENSE and meta files" || echo "Nothing to commit"

cat <<EOF
Done. New orphan branch 'clean-main' contains only the preserved files (if present).
A local backup branch 'backup-full' was created with the full history. Inspect both branches now.

To replace your remote main with this cleaned branch, review and then run manually:
  git push --force origin clean-main:main

Or rename locally and push:
  git branch -M clean-main main
  git push --force origin main

After force-pushing, collaborators will need to re-clone or reset their remotes.
EOF
