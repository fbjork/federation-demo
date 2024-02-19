## Grafbase Products Subgraph

Configures a Products subgraph that is to be composed with a Reviews subgraph to add product reviews.

Schema:

```graphql
type Product {
  id: ID!
  title: String!
  description: String!
  price: Int!
  reviews: Review[]
}
```
