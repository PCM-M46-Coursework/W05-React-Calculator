param (
    [string]$appName = "React App",
    [string]$appShortName = $appName
)

# Get the current directory path and extract the directory name.
$currentDirectory = Get-Location
$directoryName = (Split-Path $currentDirectory -Leaf).ToLower()

# Replace {REPO_NAME} in AppSettings.js.
$appSettingsPath = "$currentDirectory\src\AppSettings.js"
(Get-Content -Path $appSettingsPath) | 
ForEach-Object { $_ -replace '\{REPO_NAME\}', $directoryName } | 
Set-Content -Path $appSettingsPath

# Replace {REPO_NAME} in package.json.
$packageJsonPath = "$currentDirectory\package.json"
(Get-Content -Path $packageJsonPath) | 
ForEach-Object { $_ -replace '\{REPO_NAME\}', $directoryName } | 
Set-Content -Path $packageJsonPath

# Replace {APP_NAME} and {APP_SHORT_NAME} in manifest.json.
$manifestJsonPath = "$currentDirectory\public\manifest.json"
(Get-Content -Path $manifestJsonPath) | 
ForEach-Object { $_ -replace '\{APP_NAME\}', $appName } | 
ForEach-Object { $_ -replace '\{APP_SHORT_NAME\}', $appShortName } | 
Set-Content -Path $manifestJsonPath

# Replace {APP_NAME} in index.html.
$indexHtmlPath = "$currentDirectory\public\index.html"
(Get-Content -Path $indexHtmlPath) | 
ForEach-Object { $_ -replace '\{APP_NAME\}', $appName } | 
Set-Content -Path $indexHtmlPath

# Install all dependencies.
npm install