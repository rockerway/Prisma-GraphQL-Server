#!/bin/sh

sed -i "s/endpoint: /endpoint: ${PRISMA_ENDPOINT}/" /app/prisma.yml
prisma deploy
prisma generate
npm start
