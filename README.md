# Testing


### Start browser with CORS checking disabled

```
brave-browser --disable-web-security --user-data-dir="~/temp"
```

#### Windows

Set ENV variables as below to allow debugging with CORS disabled

Update environment variables in UI to the below with correct paths.

```
set BROWSER='/usr/bin/brave-browser-stable'
set BROWSER_ARGS='--disable-web-security --user-data-dir="~/temp"'
```

#### Aliases

PowerShell

```powershell
function krom { bash -c "cd '/c/Program Files/Google/Chrome/Application' && ./chrome --disable-web-security --user-data-dir=/c/Users/dbenne6/Workspace --incognito" }
```

Git Bash/ConEmu

```bash
alias crom="cd '/c/Program Files/Google/Chrome/Application' && ./chrome --disable-web-security --user-data-dir=/c/Users/dbenne6/Workspace --incognito"

# add alias to startup
vi ~/.bashrc

# reload startup
source ~/.bashrc
```



#### Linux

```bash
export BROWSER=/usr/bin/brave-browser-stable

export BROWSER_ARGS='--disable-web-security --user-data-dir="~/temp"'
```




### Repository

https://github.com/dannybennett/jest-react-app


### CORS

See sub folder reverse-proxy



### Material-Tailwind UI

https://mui.com/material-ui/getting-started/installation/


#### Styled Components

```bash
npm install @mui/material @mui/styled-engine-sc styled-components

npm install @fontsource/roboto
```


### Assets

#### SVG

https://github.com/n3r4zzurr0/svg-spinners



### APIs

#### Azure DevOps

https://learn.microsoft.com/en-us/rest/api/azure/devops/work/iterations/get?view=azure-devops-rest-7.1&tabs=HTTP

#### Free APIs

https://free-apis.github.io/#/browse




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

