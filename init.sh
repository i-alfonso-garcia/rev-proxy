#!/usr/bin/bash
docker network create networkrp

sh run-app-c1.sh
sh run-app-c2.sh
#sh run-container1.sh
sh run-proxy.sh

#sh run-load.sh
#sh rpx.sh
