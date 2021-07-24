for dir in ./iconpacks/*
do
  if [ -d $dir ] && [ ! $dir = "./iconpacks/gameicons" ]
  then
    echo Updating $dir ...

    if [ $dir = "./iconpacks/bootstrap-icons" ] || [ $dir = "./iconpacks/octicons" ]
    then
      (cd $dir && git pull origin main)
    else
      (cd $dir && git pull origin master)
    fi
  fi
done
