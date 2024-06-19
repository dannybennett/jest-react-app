#!/usr/bin/bash

echo "stopping react-boilerplate"
docker stop react-boilerplate

echo "removing react-boilerplate"
docker rm react-boilerplate

echo "rebuilding image"
docker build -t react-boilerplate . 

echo "starting container"
docker run --name react-boilerplate -p 80:80 react-boilerplate