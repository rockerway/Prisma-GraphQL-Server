FROM node:alpine

WORKDIR /app
COPY . /app
RUN npm install -g prisma && npm install

CMD [ "sh", "/app/run.sh" ]
