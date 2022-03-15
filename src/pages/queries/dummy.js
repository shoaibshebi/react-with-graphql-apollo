// npm install graphql-ws

// import { GraphQLWsLink } from "@apollo/client/link/subscriptions";

// import { createClient } from "graphql-ws";

// const link = new GraphQLWsLink(
//   createClient({
//     url: "ws://localhost:3000/subscriptions",
//   })
// );

// --------

// "apollo-link-ws": "^1.0.20",
// "graphql-anywhere": "^4.2.7",
// "subscriptions-transport-ws": "^0.11.0",
// "graphql"
// "graphql-tag"

// import { split } from "apollo-link";
// import { HttpLink } from "apollo-link-http";
// import { ApolloClient } from "apollo-client";
// import { WebSocketLink } from "apollo-link-ws";
// import { getMainDefinition } from "apollo-utilities";
// import { InMemoryCache } from "apollo-boost";

// const wsLink = new WebSocketLink({
//   uri: `ws://localhost:8080/graphql`,
//   options: {
//     reconnect: true,
//   },
// });

// const httpLink = new HttpLink({
//   uri: "http://localhost:8080/graphql",
// });

// const link = split(
//   // split based on operation type
//   ({ query }) => {
//     const definition = getMainDefinition(query);
//     return (
//       definition.kind === "OperationDefinition" &&
//       definition.operation === "subscription"
//     );
//   },
//   wsLink,
//   httpLink
// );

// export default new ApolloClient({
//   cache: new InMemoryCache(),
//   link,
// });
