
FROM nginx:alpine

WORKDIR /etc/nginx
COPY ./nginx/nginx.conf ./conf.d/default.conf
COPY ./dist /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT ["nginx","-g","daemon off;"]