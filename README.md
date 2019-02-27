# paginationGraphql
Mongoose Graphql Pagination


## how to start
```
git clone https://github.com/rubicode/paginationGraphql.git
cd paginationGraphql && npm install
npm start
```

## go to this url : http://localhost:3000/graphql, and then execute this query to try pagination :
```
{
  todo(pagination: {offset: 1, limit: 2}) {
    items {
      id
      title
      complete
    }
    count
  }
}
```
