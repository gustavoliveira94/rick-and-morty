import { ApolloProvider } from '@apollo/client';

import { client } from 'config/graphql';

interface IProviderGraphql {
  children: JSX.Element;
}

export const ProviderGraphql: React.FC<IProviderGraphql> = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
