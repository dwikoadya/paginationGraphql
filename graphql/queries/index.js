const {GraphQLObjectType}  = require('graphql');
const TodoQueryTypes = require('./todo')

const QueryType = new GraphQLObjectType({
  name: 'QueryType',
  fields: {
    ...TodoQueryTypes,
  },
});

module.exports = QueryType
