Write-Host "ApeWorx installer: Ape Framework"
if (-not (Get-Command pipx -ErrorAction SilentlyContinue)) {
  Write-Host "Error: pipx is not installed."
  Write-Host "Install pipx first, then re-run this script."
  Write-Host "  Python: py -m pip install --user pipx ; py -m pipx ensurepath"
  exit 1
}
Write-Host "Installing eth-ape via pipx..."
pipx install eth-ape
Write-Host "Done. You can now run: ape --help"


