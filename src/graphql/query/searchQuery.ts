import {gql} from 'apollo-boost';

const searchQuery = gql`
  query SearchQuery($term: String!) {
    search(term: $term) {
      artist
      episodesCount
      feedUrl
      podcastName
      thumbnail
      genres
    }
  }
`;

export default searchQuery;
