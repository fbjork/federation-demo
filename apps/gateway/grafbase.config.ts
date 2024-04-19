import { graph, config } from "@grafbase/sdk";

export default config({
  graph: graph.Federated({
    subgraphs: [
      { name: "Product", url: "http://127.0.0.1:4001/graphql" },
      { name: "Review", url: "http://127.0.0.1:4002/graphql" },
    ],
  }),
});
