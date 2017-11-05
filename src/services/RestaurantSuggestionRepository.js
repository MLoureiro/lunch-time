import { app } from './firebase';
import RestaurantRepository from './RestaurantRepository';
import { restaurants as config } from '../config.json';

/* interface RestaurantSuggestion {
  list: Restaurant[]
  votes: @TODO make votes
}*/

class RestaurantSuggestionRepository {
  database;
  restaurantRepository;
  totalSuggestionsPerDay;

  constructor({ database, restaurantRepository, totalSuggestionsPerDay }) {
    this.database = database;
    this.restaurantRepository = restaurantRepository;
    this.totalSuggestionsPerDay = totalSuggestionsPerDay;
  }

  async add(restaurantList) {
    const suggestion = {
      list: {},
      createdAt: Date.now(),
    };

    restaurantList.forEach(
      restaurant => suggestion.list[restaurant.id] = restaurant
    );

    this.database
      .child(this.constructor._getNextId())
      .set(suggestion)
  }

  async get(id) {
    return this.constructor._mapToSuggestion(
      (await this.database.child(id).once('value')).val()
    );
  }

  async getAfterAdded(id) {
    await this.database.child(id).once('child_added');

    return this.get(id);
  }

  async getTodaySuggestions() {
    let todayId = this.constructor._getIdFromDate();
    const suggestions = await this.get(todayId);

    if (suggestions) {
      return suggestions.list;
    }

    this.add(await this.generateSuggestions());

    return (await this.getAfterAdded(todayId)).list;
  }

  async generateSuggestions() {
    const restaurantList = await this.restaurantRepository.getAll();

    if (restaurantList.length === 0 ) {
      throw Error('No available restaurants');
    }

    if (restaurantList.length < this.totalSuggestionsPerDay) {
      return restaurantList;
    }

    let suggestionsPositions = [];
    while (suggestionsPositions.length < this.totalSuggestionsPerDay) {
      const randomPosition = Math.floor(Math.random() * restaurantList.length);
      if (!suggestionsPositions.includes(randomPosition)) {
        suggestionsPositions.push(randomPosition);
      }
    }

    return suggestionsPositions.map(position => restaurantList[position]);
  }

  static _getIdFromDate(date = new Date()) {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);

    return `${year}-${month}-${day}`;
  }

  static _mapToSuggestion(suggestion) {
    if (!suggestion) {
      return null;
    }

    return {
      list: Object.keys(suggestion.list).map(key => ({
        id: key,
        ...suggestion.list[key],
      }))
    };
  }

  static _getNextId() {
    return this._getIdFromDate(new Date());
  }
}

const currentTeam = config.currentTeamId; // @todo fix with session team
export default new RestaurantSuggestionRepository({
  database: app.database().ref(`/teams/${currentTeam}/restaurants-suggestion`),
  restaurantRepository: RestaurantRepository,
  totalSuggestionsPerDay: config.suggestionsPerDay,
});
