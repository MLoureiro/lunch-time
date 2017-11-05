import React, { Component } from 'react';
import RestaurantRepository from '../../../../services/RestaurantRepository';
import RestaurantManager from './RestaurantManager';

export default class RestaurantManagerContainer extends Component {
  state = { restaurantList: [] };
  listener;

  componentWillMount() {
    this.listener = RestaurantRepository.onChange(list => {
      this.setState({ restaurantList: list })
    });
  }

  componentWillUnmount() {
    this.listener.off();
  }

  render() {
    return (
      <RestaurantManager
        restaurants={this.state.restaurantList}
        onAdd={restaurant => RestaurantRepository.add({ name: restaurant })}
        onRemove={({ id }) => RestaurantRepository.remove({ id })}
      />
    )
  }
}
