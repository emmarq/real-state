#!/usr/bin/env bash

sudo docker run -d \
  --name some-mongo \
  -p 27017:27017 -e MONGO_INITDB_DATABASE=RealStatesStore \
  -v $(pwd)/etc/seed.js:/docker-entrypoint-initdb.d/seed.js:ro \
  mongo
