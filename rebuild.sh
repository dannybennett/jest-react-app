#!/usr/bin/bash

# docker ps -a -q

# docker stop $(docker ps -a -q)

# docker container rm $(docker container ls -a)

# docker rmi -f $(docker images -aq)

docker rm cors

docker build -t cors . 

docker run --name cors -p 80:80 cors