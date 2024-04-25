import { graph, config } from "@grafbase/sdk";

const typeDefs = /* GraphQL */ `
  type Review @key(fields: "id") {
    id: ID!
    content: String!
    rating: Int!
  }

  type Product @key(fields: "id") {
    id: ID!
    reviews: [Review!]! @resolver(name: "reviews")
  }

  type Query {
    reviews: [Review!]! @resolver(name: "reviews")
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
