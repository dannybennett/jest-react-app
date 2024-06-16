# Testing


### Start browser with CORS checking disabled
brave-browser --disable-web-security --user-data-dir="~/temp"


Set ENV variables as below to allow debugging with CORS disabled

#### Windows

Update environment variables in UI to the below with correct paths.

BROWSER='/usr/bin/brave-browser-stable'

BROWSER_ARGS='--disable-web-security --user-data-dir="~/temp"'


#### Linux

```bash
export BROWSER=/usr/bin/brave-browser-stable

export BROWSER_ARGS='--disable-web-security --user-data-dir="~/temp"'
```


### Repository

https://github.com/dannybennett/jest-react-app


### CORS

See sub folder reverse-proxy


### Free APIs

https://free-apis.github.io/#/browse