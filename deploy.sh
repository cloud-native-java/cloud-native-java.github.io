#!/bin/bash

echo -e "deploying updates to Github.."

# Build the project.
hugo
cp CNAME public/CNAME
git add public/CNAME
git commit -a -m "adding CNAME"

git add -A

# Commit changes.
msg="rebuilding site `date`"
if [ $# -eq 1 ]
  then msg="$1"
fi
git commit -m "$msg"

# Push source and build repos.
# git pull origin source
git push origin source
# git subtree push  --prefix=public git@github.com:cloud-native-java/cloud-native-java.github.io.git master

gss=`git subtree split --prefix public source`
git push public $gss:master --force
