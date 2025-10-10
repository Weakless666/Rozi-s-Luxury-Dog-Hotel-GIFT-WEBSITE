@echo off
echo Cleaning up unnecessary files and folders...

echo.
echo Removing API folder...
if exist "api" rmdir /s /q "api"

echo.
echo Removing database folder...
if exist "database" rmdir /s /q "database"

echo.
echo Removing server.js...
if exist "server.js" del "server.js"

echo.
echo Removing src/server folder...
if exist "src\server" rmdir /s /q "src\server"

echo.
echo Removing src/types folder...
if exist "src\types" rmdir /s /q "src\types"

echo.
echo Removing Admin.tsx...
if exist "src\pages\Admin.tsx" del "src\pages\Admin.tsx"

echo.
echo Removing dist folder...
if exist "dist" rmdir /s /q "dist"

echo.
echo Removing old batch files...
if exist "init-git.bat" del "init-git.bat"
if exist "start-dev.bat" del "start-dev.bat"

echo.
echo Cleaning up package.json dependencies...
echo This will be done manually in the next step.

echo.
echo Done! Unnecessary files removed.
echo.
echo Next steps:
echo 1. Update package.json to remove unused dependencies
echo 2. Run: npm install
echo 3. Commit changes: git add . && git commit -m "Remove unnecessary files"
echo.
pause
