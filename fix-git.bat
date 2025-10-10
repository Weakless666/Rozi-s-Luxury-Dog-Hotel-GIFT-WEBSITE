@echo off
echo Fixing Git branch and repository issues...

echo.
echo 1. Renaming master branch to main...
git branch -M main

echo.
echo 2. Checking current status...
git status

echo.
echo 3. Adding all changes...
git add .

echo.
echo 4. Committing changes...
git commit -m "Add privacy policies, terms of service, cookie policy and cookie consent"

echo.
echo 5. Setting upstream to main branch...
git push -u origin main

echo.
echo 6. Checking remote branches...
git branch -r

echo.
echo Done! Your repository should now be properly set up with main branch.
pause
