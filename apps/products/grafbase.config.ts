import { graph, config } from "@grafbase/sdk";

const typeDefs = /* GraphQL */ `
  type Product @key(fields: "id") {
    id: ID!
    title: String!
    description: String!
    price: Int!
  }

  type Query {
    products: [Product!]! @resolver(name: "products")
  }
`;

const g = graph.Standalone({ typeDefs, subgraph: true });

export default config({
  graph: g,
  auth: {
    rules: (rules) => {
      rules.public();
    },
  },
});
