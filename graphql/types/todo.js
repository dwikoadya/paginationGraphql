const {GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLString, GraphQLBoolean}  = require('graphql');

const TodoType = new GraphQLObjectType({
  name: 'Todo',
  fields: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    title: { type: GraphQLString },
    complete: { type: GraphQLBoolean }
  }
})

module.exports = TodoType;
