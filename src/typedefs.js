const path = require('path');
const { fileLoader, mergeTypes } = require('merge-graphql-schemas');
const typesArray = fileLoader(path.join(__dirname, "./typedefs/"));
const typesMerged = mergeTypes(typesArray);

module.exports = {
  typeDefs: typesMerged
}
