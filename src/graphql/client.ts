import ApolloClient from 'apollo-boost';

export const client = new ApolloClient({
  uri: 'https://frozen-river-77426.herokuapp.com/query',
});
