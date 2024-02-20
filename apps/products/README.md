## Products Subgraph

Schema:

```graphql
type Product @key(fields: "id") {
  id: ID!
  title: String!
  description: String!
  price: Int!
}
```
