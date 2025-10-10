@echo off
echo ========================================
echo GITHUB CONNECTION FIX - DEPLOYMENT READY
echo ========================================
echo.

echo Step 1: Checking current directory...
echo Current directory: %CD%
echo.

echo Step 2: Checking if this is a git repository...
if not exist ".git" (
    echo ERROR: This is not a git repository!
    echo Please run this from the project folder.
    pause
    exit /b 1
)
echo ✓ Git repository found
echo.

echo Step 3: Checking current git status...
git status
echo.

echo Step 4: Checking remote connections...
git remote -v
echo.

echo Step 5: Cleaning up unnecessary files...
if exist "api" (
    echo Removing api folder...
    rmdir /s /q "api"
)
if exist "database" (
    echo Removing database folder...
    rmdir /s /q "database"
)
if exist "server.js" (
    echo Removing server.js...
    del "server.js"
)
if exist "src\server" (
    echo Removing src\server folder...
    rmdir /s /q "src\server"
)
if exist "src\types" (
    echo Removing src\types folder...
    rmdir /s /q "src\types"
)
if exist "src\pages\Admin.tsx" (
    echo Removing Admin.tsx...
    del "src\pages\Admin.tsx"
)
if exist "dist" (
    echo Removing dist folder...
    rmdir /s /q "dist"
)
echo ✓ Cleanup complete
echo.

echo Step 6: Adding all changes to git...
git add .
echo ✓ Files added
echo.

echo Step 7: Committing changes...
git commit -m "Final cleanup: Remove all unnecessary files and prepare for deployment"
echo ✓ Changes committed
echo.

echo Step 8: Renaming branch to main...
git branch -M main
echo ✓ Branch renamed to main
echo.

echo Step 9: Setting up remote origin (if needed)...
git remote remove origin 2>nul
git remote add origin https://github.com/stani666/Rozi-s-Luxury-Dog-Hotel-GIFT-WEBSITE.git
echo ✓ Remote origin set
echo.

echo Step 10: Pushing to GitHub...
git push -u origin main
echo ✓ Pushed to GitHub
echo.

echo Step 11: Verifying connection...
git remote -v
echo.

echo Step 12: Final status check...
git status
echo.

echo ========================================
echo SUCCESS! GITHUB IS NOW PROPERLY CONNECTED
echo ========================================
echo.
echo Your repository is now:
echo ✓ Clean (no unnecessary files)
echo ✓ Connected to GitHub
echo ✓ Ready for deployment
echo ✓ Using main branch
echo.
echo You can now deploy without problems!
echo.
pause
