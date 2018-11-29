const { prisma } = require('./generated/prisma-client');
const { GraphQLServer } = require('graphql-yoga');
const faker = require('faker');

// A `main` function so that we can use async/await
async function main() {
  faker.locale = "zh_TW";
  const { resolvers } = require('./resolvers');
  const server = new GraphQLServer({
    typeDefs: './schema.graphql',
    resolvers,
    context: {
      prisma
    },
  })
  server.start(() => console.log('Server is running on http://localhost:4000'))
}

main().catch(e => console.error(e))
