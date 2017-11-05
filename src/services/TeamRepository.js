import { app } from './firebase';

class TeamRepository {
  database;

  constructor({ database }) {
    this.database = database;
  }

  async add({ name }) {
    this.database
      .child(this._getNextId())
      .set({
        metadata: {
          name,
          createdAt: Date.now(),
          // @todo add author as current user
        },
        members: [
          // @todo add current user
        ],
      });
  }

  _getNextId() {
    return this.database.push().key;
  }
}

export default new TeamRepository({
  database: app.database().ref('/teams/'),
});
