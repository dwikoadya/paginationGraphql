const {GraphQLSchema} = require('graphql');
const queryType = require('./queries');

exports.todoSchema = new GraphQLSchema({
  query: queryType
})
