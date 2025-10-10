@echo off
echo Complete cleanup and commit process...

echo.
echo Step 1: Removing unnecessary files and folders...
if exist "api" rmdir /s /q "api"
if exist "database" rmdir /s /q "database"
if exist "server.js" del "server.js"
if exist "src\server" rmdir /s /q "src\server"
if exist "src\types" rmdir /s /q "src\types"
if exist "src\pages\Admin.tsx" del "src\pages\Admin.tsx"
if exist "dist" rmdir /s /q "dist"
if exist "init-git.bat" del "init-git.bat"
if exist "start-dev.bat" del "start-dev.bat"

echo.
echo Step 2: Checking git status...
git status

echo.
echo Step 3: Adding all changes...
git add .

echo.
echo Step 4: Committing changes...
git commit -m "Clean up: Remove unnecessary API, database, and admin files"

echo.
echo Step 5: Pushing to GitHub...
git push origin main

echo.
echo Step 6: Final cleanup - removing batch files...
if exist "cleanup.bat" del "cleanup.bat"
if exist "fix-git.bat" del "fix-git.bat"
if exist "push-to-github.bat" del "push-to-github.bat"

echo.
echo ========================================
echo CLEANUP COMPLETE!
echo ========================================
echo.
echo Removed:
echo - api/ folder (all API files)
echo - database/ folder (SQL files)
echo - server.js
echo - src/server/ folder
echo - src/types/ folder
echo - Admin.tsx page
echo - dist/ folder
echo - Old batch files
echo.
echo Repository is now clean and ready!
echo.
pause
