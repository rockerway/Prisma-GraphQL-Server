FROM node:alpine

WORKDIR /app
COPY ./src /app
COPY ./run /usr/local/bin/run
RUN npm install -g prisma && npm install

CMD [ "run" ]
