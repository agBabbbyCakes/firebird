Write-Host "ApeWorx installer: Silverback"
if (-not (Get-Command pipx -ErrorAction SilentlyContinue)) {
  Write-Host "Error: pipx is not installed."
  Write-Host "Install pipx first, then re-run this script."
  Write-Host "  Python: py -m pip install --user pipx ; py -m pipx ensurepath"
  exit 1
}
Write-Host "Installing silverback via pipx..."
pipx install silverback
Write-Host "Done. You can now build bots with Silverback."


