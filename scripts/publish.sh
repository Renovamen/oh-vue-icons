# download and update iconpacks
yarn submodule
yarn download
yarn update

# generate icon files
yarn icons

# build lib
cd package
yarn build

# publish to npm
npm publish
