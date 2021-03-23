# download and update iconpacks
yarn submodule
yarn download
yarn update

# generate icon files
yarn icons

# build lib
cd package/icon-v2
yarn build
cd ../icon-v3
yarn build

# publish to npm
cd ..
npm publish
