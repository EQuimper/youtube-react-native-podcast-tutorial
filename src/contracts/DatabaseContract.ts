import {PodcastModel} from '../models/PodcastModel';

export interface IDatabaseContract {
  getAllPodcast(): Promise<PodcastModel[]>;
  subscribeToPodcast(podcast: PodcastModel): Promise<void>;
  isReady: boolean;
}
