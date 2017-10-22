import React, { Component } from 'react';
import base from '../../services/rebase';
import RestaurantManager from './RestaurantManager';

function generateRestaurantIdFromName(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9-]+/g, '-')
    .replace(/(^-)?(-$)?/g, '');
}

function makeNewRestaurantFromName(name) {
  const id = generateRestaurantIdFromName(name);
  return {
    id: id,
    name: name,
    createdAt: Date.now(),
  };
}

export default class RestaurantManagerContainer extends Component {
  state = {
    restaurantList: [],
  };

  componentWillMount() {
    base.syncState(`restaurants`, {
      context: this,
      state: 'restaurantList',
      asArray: true,
    });
  }

  addRestaurant(restaurant) {
    if (!restaurant) {
      return false;
    }
    const newRestaurant = makeNewRestaurantFromName(restaurant);
    const idList = this.state.restaurantList.map(restaurant => (restaurant.id));

    if (idList.includes(newRestaurant.id)) {
      return false;
    }

    this.setState(({ restaurantList }) => ({
      restaurantList: [...restaurantList, newRestaurant]
    }));

    return true;
  }

  removeRestaurant({ id }) {
    this.setState(({ restaurantList }) => ({
      restaurantList: restaurantList.filter(restaurant => restaurant.id !== id)
    }));
  }

  render() {
    return (
      <RestaurantManager
        restaurants={this.state.restaurantList}
        onAdd={restaurant => this.addRestaurant(restaurant)}
        onRemove={restaurant => this.removeRestaurant(restaurant)}
      />
    )
  }
}
