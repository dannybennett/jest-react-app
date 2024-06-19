#!/usr/bin/bash

echo "stopping react-boilerplate"
docker stop react-boilerplate

echo "removing react-boilerplate"
docker rm react-boilerplate
