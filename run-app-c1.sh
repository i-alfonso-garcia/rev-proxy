#!/usr/bin/bash

#docker network create mynetwork

#docker build -t container1-img /home/ialfonso/Documents/proyectos/proyecto1/container1
docker stop app1
docker rm app1
docker image rm app1-container

#docker build -t contaier-c2 /home/ialfonso/Documents/proyectos/proyecto1/app-c2
#docker run -d --name app-c2 -p 5000:5000 container-c2

docker build -t app1-container /home/ialfonso/Documents/proyectos/proyecto1/app-c1
docker run -d --network networkrp -p 3000:80 --name app1 app1-container

