
#!/bin/bash
echo "Initializing Git..."
git init
echo "Adding files..."
git add .
echo "Committing..."
git commit -m "Initial commit - Sanss Portfolio"
echo "Renaming branch..."
git branch -M main
echo "Adding remote..."
# Try to add remote, if it exists, set the url
git remote add origin https://github.com/sanjanayalamanchili/Portfolio.git || git remote set-url origin https://github.com/sanjanayalamanchili/Portfolio.git
echo "Pushing code..."
git push -u origin main
echo "Done! Your portfolio is live on GitHub."
