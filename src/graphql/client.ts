import ApolloClient from 'apollo-boost';

export const client = new ApolloClient({
  uri: 'https://youtube-golang-podcast.onrender.com/query',
});
