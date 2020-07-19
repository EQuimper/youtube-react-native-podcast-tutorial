export class PodcastModel {
  public artist: string;
  public episodesCount: number;
  public feedUrl: string;
  public name: string;
  public thumbnail: string;

  constructor(params: {
    artist: string;
    episodesCount: number;
    feedUrl: string;
    name: string;
    thumbnail: string;
  }) {
    this.artist = params.artist;
    this.episodesCount = params.episodesCount;
    this.feedUrl = params.feedUrl;
    this.name = params.name;
    this.thumbnail = params.thumbnail;
  }
}
