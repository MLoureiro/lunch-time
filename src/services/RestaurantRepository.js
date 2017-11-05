import { app } from './rebase';
import { restaurants as config } from '../config.json';

/* interface Restaurant {
  name: string
  createdAt: timestamp
}*/

class RestaurantRepository {
  database;

  constructor({ database }) {
    this.database = database;
  }

  async add({ name }) {
    this.database
      .child(this._getNextId())
      .set({
        name,
        createdAt: Date.now(),
      })
  }

  async remove({ id }) {
    if (!id) {
      throw Error('ID is required for restaurant removal');
    }

    this.database.child(id).remove();
  }

  async getAll() {
    const data = this.constructor._mapToRestaurant(
      (await this.database.once('value')).val()
    );

    return data ? data : [];
  }

  onChange(callback) {
    const listener = this.database.on(
      'value',
      (snapshot) => {
        const list = this.constructor._mapToRestaurant(snapshot.val());
        callback(list || []);
      });

    return { off: () => listener.off()};
  }

  static _mapToRestaurant(list) {
    if (!list) {
      return null;
    }

    return Object.keys(list).map(key => ({
      id: key,
      ...list[key],
    }));
  }

  _getNextId() {
    return this.database.push().key;
  }
}

const currentTeam = config.currentTeamId; // @todo fix with session team
export default new RestaurantRepository({
  database: app.database().ref(`/teams/${currentTeam}/restaurants-available`),
});
