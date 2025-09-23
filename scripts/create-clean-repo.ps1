<#
Creates an orphan branch containing only README.md, LICENSE, .gitignore, .gitattributes and .env.example.
This preserves a full backup branch (`backup-full`) with current history. The script will NOT force-push; it stops
and shows the exact push command for you to inspect and run manually.

Run from repository root in PowerShell:
  pwsh ./scripts/create-clean-repo.ps1

WARNING: This script performs destructive git operations locally (creates new orphan branch). Do not run unless
you understand the steps and have a backup branch created by this script.
#>

function Abort($msg) {
  Write-Error $msg
  exit 1
}

if (-not (Test-Path .git)) {
  Abort "This directory does not look like a git repository (no .git). Run this from the repo root."
}

$status = & git status --porcelain
if ($status) {
  Write-Host "Working tree is not clean. Please commit or stash your changes before running this script." -ForegroundColor Yellow
  & git status --short
  exit 1
}

Write-Host "Creating backup branch 'backup-full'..."
& git branch -f backup-full

Write-Host "Creating orphan branch 'clean-main'..."
& git checkout --orphan clean-main

Write-Host "Removing all files from index and working tree (they will be removed from this branch)..."
try {
  & git rm -rf --quiet . 2>$null
} catch {
  # ignore errors
}

# Files to preserve (update here if you want others)
$keep = @('README.md','LICENSE','.gitignore','.gitattributes','.env.example')

foreach ($f in $keep) {
  Write-Host "Attempting to restore $f from backup-full..."
  # Use show to test existence on backup-full; suppress errors
  & git show backup-full:$f 2>$null
  if ($LASTEXITCODE -eq 0) {
    & git checkout backup-full -- $f
    & git add $f
    Write-Host "Restored $f"
  } else {
    Write-Host "File $f not found on backup-full; skipping" -ForegroundColor Yellow
  }
}

& git commit -m "Create clean branch with only README/LICENSE and meta files" 2>$null
if ($LASTEXITCODE -ne 0) { Write-Host "Nothing to commit on clean branch" }

Write-Host "Done. New orphan branch 'clean-main' contains only the preserved files (if present)."
Write-Host "A local backup branch 'backup-full' was created with the full history. Inspect both branches now."

Write-Host "To replace your remote main with this cleaned branch, review the branch and then run the following command manually:" -ForegroundColor Cyan
Write-Host "  git push --force origin clean-main:main" -ForegroundColor Green

Write-Host "If you prefer to rename clean-main to main locally and push:" -ForegroundColor Cyan
Write-Host "  git branch -M clean-main main" -ForegroundColor Green
Write-Host "  git push --force origin main" -ForegroundColor Green

Write-Host "Notes: After force-pushing, collaborators will need to re-clone or reset their remotes."
