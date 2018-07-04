const {makeExecutableSchema} = require('graphql-tools');
const resolvers = require('./resolvers');

// ...

module.exports = makeExecutableSchema({typeDefs, resolvers});