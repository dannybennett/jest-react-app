#!/usr/bin/bash

# docker ps -a -q

# docker stop $(docker ps -a -q)

# docker container rm $(docker container ls -a)

# docker rmi -f $(docker images -aq)

echo "stopping cors"
docker stop cors

echo "removing cors"
docker rm cors

echo "rebuilding image"
docker build -t cors . 

echo "starting container"
docker run --name cors -p 80:80 cors