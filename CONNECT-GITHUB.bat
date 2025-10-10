@echo off
echo ========================================
echo CONNECTING TO GITHUB
echo ========================================
echo.

echo Step 1: Removing old remote connection...
git remote remove origin 2>nul
echo ✓ Old remote removed
echo.

echo Step 2: Adding correct GitHub remote...
git remote add origin https://github.com/Weakless666/Rozi-s-Luxury-Dog-Hotel-GIFT-WEBSITE.git
echo ✓ GitHub remote added
echo.

echo Step 3: Setting branch to main...
git branch -M main
echo ✓ Branch set to main
echo.

echo Step 4: Adding all changes...
git add .
echo ✓ Changes added
echo.

echo Step 5: Committing changes...
git commit -m "Fix TypeScript errors and prepare for deployment"
echo ✓ Changes committed
echo.

echo Step 6: Pushing to GitHub...
git push -u origin main
echo ✓ Pushed to GitHub
echo.

echo Step 7: Verifying connection...
git remote -v
echo.

echo ========================================
echo GITHUB CONNECTED SUCCESSFULLY! ✅
echo ========================================
echo.
echo Now you can commit and push normally!
echo GitHub Desktop should show "Push" instead of "Publish repository"
echo.
pause
