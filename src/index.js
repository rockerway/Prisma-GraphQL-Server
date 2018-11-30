const { prisma } = require('./prisma-client');
const { GraphQLServer } = require('graphql-yoga');
const { typeDefs } = require('./typedefs');
const { resolvers } = require('./resolvers');

async function main() {
  const server = new GraphQLServer({
    typeDefs,
    resolvers,
    context: {
      prisma
    },
  });
  server.start(() => console.log('Server is running on http://localhost:4000'));
}

main().catch(e => console.error(e));
