FROM nginx

RUN apt-get update \
    && apt-get install -y apache2-utils

COPY nginx.conf /etc/nginx/nginx.conf
COPY .htpasswd /etc/nginx/.htpasswd

EXPOSE 8080
