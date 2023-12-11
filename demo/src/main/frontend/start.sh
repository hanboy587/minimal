#!/bin/bash

docker ps  | grep hr_rba_test | awk '{print $1}' | xargs docker stop
docker build . -t hr_rba_test
docker run -itd -e TZ=Asia/Seoul -p443:80 hr_rba_test
