#!/usr/bin/bash

# stop all containers
# docker stop $(docker ps -a -q)

# remove all stopped containers
# docker container rm $(docker ps -a -q)

# show all containers
# sudo docker ps -a 


## winblows
docker stop $(docker ps -a -q)

docker container rm $(docker container ls -a)

docker build -t cors . 

docker run --name cors -p 80:80 cors