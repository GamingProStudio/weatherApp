echo "Enter commit message:"
read message
git add .
git commit -m "$message"
git push origin master
echo "Enter version tag:"
read version
git tag $version
git push origin $version
