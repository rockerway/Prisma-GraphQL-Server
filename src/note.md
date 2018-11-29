# Mock Business Service

prisma

## Install Prisma CLI

`npm install -g prisma`

## Start Prisma and database

`docker-compose up -d`

## Configure your Prisma API

`prisma init --endpoint http://localhost:4466`

> The **endpoint** needs to match the URL of a running Prisma server.

Created 2 new files:

| file name        | description                                           |
| ---------------- | ----------------------------------------------------- |
| prisma.yml       | Prisma service definition                             |
| datamodel.prisma | GraphQL SDL-based datamodel (foundation for database) |

## Deploy the Prisma API

`prisma deploy`

## Generate your Prisma client

prisma.yml

### GoLang

```
generate:
  - generator: go-client
    output: ./generated/prisma-client/
```

### NodeJS

```
generate:
  - generator: javascript-client
    output: ./generated/prisma-client/
```

`prisma generate`

## Prepare application

### GoLang

```
touch index.go
dep init
```

### NodeJS

```
npm init -y
npm install --save prisma-client-lib graphql
```