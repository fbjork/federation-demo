import { config, graph, scalar } from "@grafbase/sdk";

const g = graph.Standalone({ subgraph: true });

const product = g
  .type("Product", {
    id: scalar.id(),
    title: scalar.string(),
    description: scalar.string(),
    price: scalar.int(),
  })
  .key("id");

g.query("products", {
  returns: g.ref(product).list(),
  resolver: "products",
});

export default config({
  graph: g,
  auth: {
    rules: (rules) => {
      rules.public();
    },
  },
});
