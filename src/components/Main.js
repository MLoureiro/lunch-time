import React, { Component } from 'react';
import styled from 'styled-components';
import { Button } from './Styled/Button';
import { Modal } from './Styled/Modal';
import RestaurantManager from './RestaurantManager';

const SPACE = '\u00A0';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ChosenRestaurant = styled.h1`
  font-size: 5em;
`;

export default class Main extends Component {
  state = {
    isModalOpen: false,
    chosenRestaurant: null,
  };
  restaurantList = [
    'Vapiano',
    'Burgermeester',
    'Tasty Burgers',
    'Ter & Marsh Co.',
    'Poke Perfect',
  ];

  handleOpenModal() {
    this.setState({ isModalOpen: true });
  }

  handleCloseModal() {
    this.setState({ isModalOpen: false });
  }

  randomizeRestaurant() {
    const random = Math.floor(Math.random() * this.restaurantList.length);
    this.setState({ chosenRestaurant: this.restaurantList[random] })
  }

  render() {
    return (
      <Wrapper>
        <ChosenRestaurant>
          {this.state.chosenRestaurant || SPACE}
        </ChosenRestaurant>
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
