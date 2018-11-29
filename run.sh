#!/bin/sh

sed -i "s/endpoint: \S*/endpoint: ${PRISMA_ENDPOINT}/" /app/prisma.yml
prisma deploy
prisma generate
npm start
