yarn build
cp -r ./src/components ./components
cp -r ./src/icons ./icons
npm publish
rm -rf ./components
rm -rf ./icons