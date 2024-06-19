#!/usr/bin/bash

echo "pruning images"
docker image prune

# echo "removing all images"
# docker rmi -f --all
