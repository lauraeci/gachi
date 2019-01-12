#!/bin/sh

from=`pwd`
echo $from
nginx -g "daemon off;" -c ${from}/scripts/edge-router/nginx.conf &

rails s -p 8001