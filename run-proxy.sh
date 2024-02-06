#!/usr/bin/bash

docker stop reverse-proxy
docker rm reverse-proxy
docker image rm reverse-proxy-image

docker build -t reverse-proxy-image /home/ialfonso/Documents/proyectos/proyecto1/reverse-proxy
docker run -d --network networkrp -p 80:80 --name reverse-proxy reverse-proxy-image

#docker build -t reverse-proxy-image  .
#docker run -d -p 8080:80 --link app1_container --link app2_container reverse_proxy
