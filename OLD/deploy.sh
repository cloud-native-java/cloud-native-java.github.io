#!/bin/bash

echo -e "deploying updates to Github.."
hugo
cp CNAME public/CNAME
git add public/CNAME
git commit -a -m "adding CNAME"
git add -A
msg="rebuilding site `date`"
if [ $# -eq 1 ]
  then msg="$1"
fi
git commit -m "$msg"
git push origin source
git push origin `git subtree split --prefix public source`:master --force
