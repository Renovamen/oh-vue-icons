# download game icons (https://game-icons.net)

filepath="./iconpacks/game-icons-svg.zip"
folderpath="./iconpacks/gameicons"

if [ ! -d "$folderpath" ]; then
    if [ ! -f "$filepath" ]; then
        wget -O $filepath https://game-icons.net/archives/svg/zip/000000/transparent/game-icons.net.svg.zip
    fi
    unzip $filepath
    mv ./icons/000000/transparent/1x1 $folderpath
    rm -rf ./icons
fi
