#!/bin/sh

echo "============================================="
echo "Starting installation - Composer Tools"
echo "============================================="
echo "https://hyperledger.github.io/composer/latest/installing/development-tools"

npm install -g composer-cli@0.20
npm install -g composer-rest-server@0.20
npm install -g generator-hyperledger-composer@0.20
npm install -g yo
npm install -g composer-playground

