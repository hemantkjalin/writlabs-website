#!/bin/bash

echo ""
echo ">>> Build website"
yarn
yarn build

echo ""
echo ">>> Renaming and Copying the 404 File"
mv 'out/404/index.html' 'out/404/404.html'
cp 'out/404/404.html' 'out/404.html'
echo ">>> Done"

echo ""
echo ">>> Deploy website"
firebase deploy --only hosting
