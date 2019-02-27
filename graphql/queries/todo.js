const {GraphQLInputObjectType, GraphQLInt}  = require('graphql');
const TodoType = require('../types/todo');
const PaginationArgType = require('../types/paginationParam');
const PaginatedListType = require('../types/paginationOutput');
const Todo = require('../../models/todo')

const TodoQueryTypes = {
  todo: {
    type: PaginatedListType(TodoType),
    args: {
      pagination: {
        type: PaginationArgType,
        defaultValue: { offset: 0, limit: 2 }
      },
    },
    resolve: (_, args) => {
      const { offset, limit } = args.pagination
      return {
        items: Todo.find().skip(offset).limit(limit).exec(),
        count: Todo.count()
      }
    },
  }
}

module.exports = TodoQueryTypes
