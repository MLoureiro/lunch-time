import React, { Component } from 'react';
import RestaurantManager from './RestaurantManager';

export default class RestaurantManagerContainer extends Component {
  state = {
    restaurantList: [
      'Vapiano',
      'Burgermeester',
      'Tasty Burgers',
      'Ter & Marsh Co.',
      'Poke Perfect',
    ]
  };

  addRestaurant(restaurant) {
    if (!restaurant) {
      return false;
    }
    const list = this.state.restaurantList;
    const upperCase = list.map(x => (x.toUpperCase ?  x.toUpperCase() : x));

    if (upperCase.includes(restaurant.toUpperCase())) {
      return false
    }

    this.setState({ restaurantList: [...list, restaurant] });

    return true;
  }

  render() {
    return (
      <RestaurantManager
        restaurants={this.state.restaurantList}
        onAdd={restaurant => this.addRestaurant(restaurant)}
      />
    )
  }
}
