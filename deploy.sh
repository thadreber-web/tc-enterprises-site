#!/bin/bash
# One-command deployment for T&C Enterprises
# Usage: curl -fsSL https://raw.githubusercontent.com/thadreber-web/tc-enterprises-site/main/deploy.sh | bash

set -e

echo "🚀 T&C Enterprises - Drop-in Deployment"
echo "======================================"

# Download the full deployment script
echo "📥 Downloading deployment script..."
curl -fsSL https://raw.githubusercontent.com/thadreber-web/tc-enterprises-site/main/scripts/deploy.sh -o /tmp/deploy.sh

# Make it executable and run it
chmod +x /tmp/deploy.sh
exec /tmp/deploy.sh