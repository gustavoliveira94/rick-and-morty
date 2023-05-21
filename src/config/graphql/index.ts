import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export const client = new ApolloClient({
  uri: process.env.REACT_APP_RICK_AND_MORTY_API,
  cache: new InMemoryCache(),
});

export const graphql = gql;
