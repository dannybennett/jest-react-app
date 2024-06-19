#!/usr/bin/bash

echo "stopping cors"
docker stop cors

echo "removing cors"
docker rm cors
