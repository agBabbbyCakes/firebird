#!/usr/bin/env bash
set -euo pipefail

echo "ApeWorX installer: Silverback"
if ! command -v pipx >/dev/null 2>&1; then
  echo "Error: pipx is not installed."
  echo "Install pipx first, then re-run this script."
  echo "  - macOS (Homebrew): brew install pipx && pipx ensurepath"
  echo "  - Python: python3 -m pip install --user pipx && python3 -m pipx ensurepath"
  exit 1
fi

echo "Installing silverback via pipx..."
pipx install silverback
echo "Done. You can now start building bots with Silverback."


