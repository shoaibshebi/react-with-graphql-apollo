import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { split } from "apollo-link";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";

const defaultOptions = {
  watchQuery: {
    fetchPolicy: "no-cache",
    errorPolicy: "ignore",
  },
  query: {
    fetchPolicy: "no-cache",
    errorPolicy: "ignore",
  },
};

const wsLink = new WebSocketLink({
  uri: "ws://api.spacex.land/graphql/",
  options: {
    reconnect: true,
  },
});
const httpLink = new HttpLink({
  uri: "https://api.spacex.land/graphql/",
});

const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind == "OperationDefinition" &&
      definition.operation == "subscription"
    );
  },
  wsLink,
  httpLink
);

export default new ApolloClient({
  cache: new InMemoryCache(),
  link,
  defaultOptions: defaultOptions,
});
