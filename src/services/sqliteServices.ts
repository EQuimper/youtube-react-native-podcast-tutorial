import SQLite from 'react-native-sqlite-storage';

import {IDatabaseContract} from '../contracts/DatabaseContract';
import {PodcastModel} from '../models/PodcastModel';

export class SQliteServices implements IDatabaseContract {
  private _db: SQLite.SQLiteDatabase;
  public isReady = false;

  constructor() {
    this._db = SQLite.openDatabase(
      {
        name: 'db.sqlite',
        location: 'Documents',
      },
      () => {
        console.log('sQlite database connect');
        this.init();
      },
      (err) => {
        console.log('sQlite database error', err);
      },
    );
  }

  private async init() {
    await this._db.executeSql(`
      CREATE TABLE IF NOT EXISTS podcasts (
        name VARCHAR(255) UNIQUE,
        episodes_count INT DEFAULT 0,
        feed_url TEXT,
        artist TEXT,
        thumbnail TEXT
      );
    `);

    this.isReady = true;
  }

  public getAllPodcast(): Promise<PodcastModel[]> {
    const podcasts: PodcastModel[] = [];

    return new Promise((resolve, reject) => {
      this._db.transaction((tx) => {
        tx.executeSql(
          'SELECT * FROM podcasts ORDER BY name;',
          [],
          (_, results) => {
            for (let i = 0; i < results.rows.length; i++) {
              const row = results.rows.item(i);

              podcasts.push(
                new PodcastModel({
                  name: row.name,
                  thumbnail: row.thumbnail,
                  artist: row.artist,
                  episodesCount: row.episodes_count,
                  feedUrl: row.feed_url,
                }),
              );
            }

            resolve(podcasts);
          },
          (_, err) => {
            reject(err);
          },
        );
      });
    });
  }

  public subscribeToPodcast(podcast: PodcastModel): Promise<void> {
    return new Promise((resolve, reject) => {
      this._db.transaction((tx) => {
        tx.executeSql(
          'INSERT INTO podcasts (artist, episodes_count, feed_url, name, thumbnail) VALUES ($1, $2, $3, $4, $5)',
          [
            podcast.artist,
            podcast.episodesCount,
            podcast.feedUrl,
            podcast.name,
            podcast.thumbnail,
          ],
          () => {
            console.log('podcast insert');
            resolve();
          },
          (_, err) => {
            console.log('error insert podcast', err);
            reject(err);
          },
        );
      });
    });
  }
}
