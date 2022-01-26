# download iconpacks
yarn download -f

# generate icon files
yarn icons

# build lib
cd package
yarn build

# publish to npm
npm publish
