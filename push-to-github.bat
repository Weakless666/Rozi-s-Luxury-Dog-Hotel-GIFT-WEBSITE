@echo off
echo Pushing changes to existing GitHub repository...

echo.
echo Current directory: %CD%
echo.

echo 1. Checking if this is a git repository...
if not exist ".git" (
    echo ERROR: This is not a git repository!
    echo Please run this from the project folder.
    pause
    exit /b 1
)

echo 2. Checking git status...
git status

echo.
echo 3. Adding all files...
git add .

echo.
echo 4. Committing changes...
git commit -m "Update: Add privacy policies, terms, cookies and fix gallery"

echo.
echo 5. Checking remote origin...
git remote -v

echo.
echo 6. Pushing to main branch...
git push origin main

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo Push failed, trying alternative methods...
    echo.
    echo 7. Trying to push with upstream...
    git push -u origin main
)

echo.
echo 8. Final status check...
git status

echo.
echo ========================================
echo If GitHub Desktop still shows "Publish Repository":
echo 1. Press Ctrl+R in GitHub Desktop to refresh
echo 2. Or close and reopen GitHub Desktop
echo 3. Make sure you're logged into the correct GitHub account
echo ========================================
echo.
pause
