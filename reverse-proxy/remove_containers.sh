#!/usr/bin/bash

# stop all containers
docker stop $(sudo docker ps -a -q)

# remove all stopped containers
docker container rm $(sudo docker ps -a -q)

# show all containers
sudo docker ps -a 