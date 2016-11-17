#!/bin/sh

npm install deepstream.io-msg-redis deepstream.io-cache-redis deepstream.io-storage-rethinkdb --production

node node_modules/.bin/deepstream