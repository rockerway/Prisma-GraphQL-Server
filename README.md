# Mock Business Service

GraphQL Server by Apollo with Prisma

Dependencies:

```
graphql: ^14.0.2
graphql-yoga: ^1.16.7
prisma-client-lib: ^1.20.7
```

## Start Server

- build image
`docker build -t mbs .`
- start Prisma server
`docker-compose up -d`
- start GraphQL server
`sh start`

> start 可能會失敗 (prisma server 的 container 網路尚未設定完成)
> 如果 "sh start" 失敗，請過 5 秒後再進行嘗試
