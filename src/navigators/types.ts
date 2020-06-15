import {SearchQuery_search} from '../types/graphql';

export type SearchStackRouteParamsList = {
  Search: undefined;
  PodcastDetails: {
    data: SearchQuery_search;
  };
};
