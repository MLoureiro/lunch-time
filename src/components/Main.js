import React, { Component } from 'react';
import styled from 'styled-components';
import Rebase from 're-base';
import RestaurantManager from './RestaurantManager';
import { Button } from './Styled/Button';
import { Firebase } from '../services/firebase';
import { Modal } from './Styled/Modal';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ChosenRestaurant = styled.h1`
  font-size: 5em;
`;

function makeChosenRestaurant(restaurant) {
  return {
    restaurant,
    createdAt: Date.now(),
  };
}

export default class Main extends Component {
  state = {
    isModalOpen: false,
    chosenRestaurant: null,
    restaurantList: [],
  };

  componentWillMount() {
    const base = Rebase.createClass(Firebase.app().database());
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
        const todayTimestamp = (new Date(today.getFullYear(), today.getMonth(), today.getDay())).getTime();

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

    Rebase
      .createClass(Firebase.app().database())
      .push('chosenRestaurants', {
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
    return (
      <Wrapper>
        {this.state.chosenRestaurant &&
          <ChosenRestaurant>
            {this.state.chosenRestaurant.restaurant.name}
          </ChosenRestaurant>
        }
        <Button
          primary
          onClick={() => this.randomizeRestaurant()}
        >
          Randomize
        </Button>
        <Button
          tiny
          onClick={() => this.handleOpenModal()}
        >
          Manage Restaurants
        </Button>
        <Modal
          isOpen={this.state.isModalOpen}
          onRequestClose={() => this.handleCloseModal()}
        >
          <RestaurantManager />
        </Modal>
      </Wrapper>
    );
  }
}
