import { config, graph, scalar } from "@grafbase/sdk";

const g = graph.Standalone({ subgraph: true });

const review = g
  .type("Review", {
    id: scalar.id(),
    content: scalar.string(),
    rating: scalar.int(),
  })
  .key("id");

g.query("reviews", {
  returns: g.ref(review).list(),
  resolver: "reviews",
});

g.type("Product", {
  id: scalar.id(),
  reviews: g.ref(review).list().resolver("reviews"),
}).key("id");

export default config({
  graph: g,
  auth: {
    rules: (rules) => {
      rules.public();
    },
  },
});
