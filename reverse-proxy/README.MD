
# CORS Bypass using Reverse Proxy

#### Start container with Docker Compose

```
# use this syntax if you're making updates to nginx.conf 
sudo docker-compose up --build --force-recreate --no-deps

sudo docker-compose down
```

#### Start CORS container with Docker

```
# show all containers
sudo docker ps -a 

# stop all containers
sudo docker stop $(sudo docker ps -a -q)

# remove all stopped containers
sudo docker container rm $(sudo docker ps -a -q)

# build image (you only have to do this once, the container will be stopped and cached afterwards)
sudo docker build -t cors . 

# run the cached container
sudo docker run --name cors -p 80:80 cors

```

