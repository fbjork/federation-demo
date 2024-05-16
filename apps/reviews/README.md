## Reviews Subgraph

Schema:

```graphql
type Review @key(fields: "id") {
  id: ID!
  content: String!
  rating: Int!
}

type Product @key(fields: "id") {
  reviews: [Review!]!
}

type Query {
  reviews: [Review!]!
}
```
