yarn icons
yarn build
cp -r ./src/* .
rm index.js
npm publish --access public
rm -rf ./components
rm -rf ./icons