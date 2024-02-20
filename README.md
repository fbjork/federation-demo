## Grafbase Federation Demo

This monorepo contains a federated graph composed of Products and Reviews subgraphs.

### Get started
1. Install dependencies: `pnpm i`
2. Start gateway + subgraphs: `pnpm dev`
5. Publish the products subgraph: `pnpm --filter products publish:dev`
6. Publish the reviews subgraph: `pnpm --filter reviews publish:dev`
7. Open Pathfinder and explore your graph: http://localhost:4000
