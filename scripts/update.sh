for dir in ./iconpacks/*
do
  if [ -d $dir ] && [ ! $dir = "./iconpacks/gameicons" ]
  then
    echo Updating $dir ...
    (cd $dir; git pull origin master)
  fi
done
