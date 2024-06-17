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


### Free APIs

https://free-apis.github.io/#/browse