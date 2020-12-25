yarn submodule
yarn download
yarn build
cp -r ./src/components ./components
cp -r ./src/icons ./icons
yarn publish
rm -rf ./components
rm -rf ./icons