#!/bin/bash

ICONPATH="./iconpacks"
ICONJSON="${ICONPATH}/index.js"

# --------------------------------------------------------------------
# Handle force download (-f) option
# --------------------------------------------------------------------

while getopts "f" arg
do
  case $arg in
    f)
      echo "Force downloading all iconpacks..."
      # delete all exist iconpacks
      find $ICONPATH ! -name 'index.js' -depth 1 -exec rm -r {} +
      ;;
    ?)
  exit 1
  ;;
  esac
done


# --------------------------------------------------------------------
# Extract download URLs and file names from $ICONJSON
# --------------------------------------------------------------------

declare -a urlList=()
declare -a fileNameList=()

while read line
do
  # Extract download URL
  result=$(echo $line | sed 's/downloadURL: "\(.*\)",/\1/g')

  if [ "$result" != "$line" ]
  then
    urlList[${#urlList[@]}]=$result
  fi

  # Extract download file name
  result=$(echo $line | sed 's/downloadFileName: "\(.*\)",/\1/g')

  if [ "$result" != "$line" ]
  then
    fileNameList[${#fileNameList[@]}]=$result
  fi
done < $ICONJSON


# --------------------------------------------------------------------
# Download iconpacks from Github

# This could be done via "git submodule". However, too many submodules
# brings git too much loads and reduces its speed. So here I download
# iconpacks' zip files from their Github repos directly.
# --------------------------------------------------------------------

download() {
  url=$1
  filePath="${ICONPATH}/$2.zip"
  folderPath="${ICONPATH}/$2"

  if [ ! -d "$folderPath" ]; then
    if [ ! -f "$filePath" ]; then
      echo "Downloading ${url} to ${filePath}"
      wget -O $filePath $url
    fi

    echo "Extracting ${filePath} to ${folderPath}"

    if [ "$2" == "gameicons" ]  # hard code for gameicons
    then
      oldFolferName="icons"
    else
      oldFolferName=$(unzip -Z -1 ${filePath} | head -1)
    fi

    unzip -qq $filePath -d $ICONPATH
    mv "${ICONPATH}/${oldFolferName}" $folderPath
  fi
}

for (( i = 0; i < ${#urlList[@]}; i++ )) do
  download ${urlList[i]} ${fileNameList[i]}
done
