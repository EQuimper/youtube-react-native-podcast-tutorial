/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FeedQuery
// ====================================================

export interface FeedQuery_feed {
  __typename: "FeedItem";
  description: string;
  duration: string;
  image: string | null;
  linkUrl: string;
  pubDate: string;
  text: string;
  title: string;
}

export interface FeedQuery {
  feed: FeedQuery_feed[];
}

export interface FeedQueryVariables {
  feedUrl: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SearchQuery
// ====================================================

export interface SearchQuery_search {
  __typename: "Podcast";
  artist: string;
  episodesCount: number;
  feedUrl: string;
  podcastName: string;
  thumbnail: string;
  genres: string[];
}

export interface SearchQuery {
  search: SearchQuery_search[];
}

export interface SearchQueryVariables {
  term: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
