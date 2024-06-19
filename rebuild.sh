#!/usr/bin/bash

echo "stopping cors"
docker stop cors

echo "removing cors"
docker rm cors

echo "rebuilding image"
docker build -t cors . 

echo "starting container"
docker run --name cors -p 80:80 cors