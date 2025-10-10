@echo off
echo ===============================================
echo    INITIALIZING GIT REPOSITORY
echo ===============================================
echo.

cd /d "C:\Users\stani\OneDrive\Документи\GitHub\Rozi-s-Luxury-Dog-Hotel-GIFT-WEBSITE"

echo Current directory: %CD%
echo.

echo Step 1: Creating .git directory...
git init
if %errorlevel% neq 0 (
    echo ERROR: Git init failed!
    pause
    exit /b 1
)

echo Step 2: Adding all files...
git add .
if %errorlevel% neq 0 (
    echo ERROR: Git add failed!
    pause
    exit /b 1
)

echo Step 3: Making initial commit...
git commit -m "Initial commit - Rozi's Luxury Dog Hotel"
if %errorlevel% neq 0 (
    echo ERROR: Git commit failed!
    pause
    exit /b 1
)

echo.
echo ===============================================
echo    ✅ SUCCESS!
echo ===============================================
echo.
echo Git repository initialized successfully!
echo.
echo 📁 Repository path:
echo    C:\Users\stani\OneDrive\Документи\GitHub\Rozi-s-Luxury-Dog-Hotel-GIFT-WEBSITE
echo.
echo 🔧 Next steps for GitHub Desktop:
echo    1. Open GitHub Desktop
echo    2. Click "Add" → "Add existing repository"
echo    3. Paste the path above
echo    4. Click "Add repository"
echo.
echo Press any key to continue...
pause >nul
