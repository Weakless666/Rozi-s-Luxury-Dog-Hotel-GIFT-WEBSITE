@echo off
echo Fixing Git repository push issues...

echo.
echo 1. Checking current status...
git status

echo.
echo 2. Checking remote repositories...
git remote -v

echo.
echo 3. Adding all changes...
git add .

echo.
echo 4. Committing changes...
git commit -m "Add privacy policies, terms of service, cookie policy and cookie consent"

echo.
echo 5. Renaming master branch to main (if needed)...
git branch -M main

echo.
echo 6. Pushing to main branch...
git push origin main

echo.
echo 7. If push fails, trying to set upstream...
git push -u origin main

echo.
echo 8. Checking final status...
git status

echo.
echo Done! Repository should now be properly synced.
echo If you still see "publish repository" in GitHub Desktop, try:
echo 1. Refresh GitHub Desktop (Ctrl+R)
echo 2. Or close and reopen GitHub Desktop
pause
