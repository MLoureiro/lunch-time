import React, { Component } from 'react';
import Main from './Main';
import base from '../../../../services/rebase';

function makeChosenRestaurant(restaurant) {
  return {
    restaurant,
    createdAt: Date.now(),
  };
}

export default class MainContainer extends Component {
  state = {
    isModalOpen: false,
    chosenRestaurant: null,
    restaurantList: [],
  };

  componentWillMount() {
    base.listenTo('chosenRestaurants', {
      context: this,
      state: 'chosenRestaurant',
      asArray: true,
      queries: {
        limitToLast: 1,
        orderByChild: 'createdAt',
      },
      then: function(chosenRestaurant) {
        const today = new Date();
        const todayTimestamp = (
          new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate(),
            0,0,1,
          )).getTime();

        if (!chosenRestaurant || chosenRestaurant[0].createdAt < todayTimestamp) {
          return;
        }

        this.setState({ chosenRestaurant: chosenRestaurant[0] });
      }
    });
    base.bindToState('restaurants', {
      context: this,
      state: 'restaurantList',
    });
  }

  handleOpenModal() {
    this.setState({ isModalOpen: true });
  }

  handleCloseModal() {
    this.setState({ isModalOpen: false });
  }

  randomizeRestaurant() {
    if (!this.canRandomizeRestaurants()) {
      return;
    }

    let chosen = null;
    do {
      chosen = this.getRandomRestaurant();
    } while (!this.isNewRestaurant(chosen));

    base.push('chosenRestaurants', {
      data: makeChosenRestaurant(chosen),
    });
  }

  canRandomizeRestaurants() {
    const { restaurantList, chosenRestaurant } = this.state;

    return restaurantList.length > 1
      || (chosenRestaurant === null && restaurantList.length === 1);
  }

  isNewRestaurant({ id }) {
    return !this.state.chosenRestaurant
      || this.state.chosenRestaurant.restaurant.id !== id;
  }

  getRandomRestaurant() {
    const { restaurantList } = this.state;
    const position = Math.floor(Math.random() * restaurantList.length);

    return restaurantList[position];
  }

  render() {
    const restaurant = this.state.chosenRestaurant
      ? this.state.chosenRestaurant.restaurant
      : null;
    return (
      <Main
        restaurant={restaurant}
        isModalOpen={this.state.isModalOpen}
        onModalOpen={() => this.handleOpenModal()}
        onModalClose={() => this.handleCloseModal()}
        onRandomize={() => this.randomizeRestaurant()}
      />
    );
  }
}
