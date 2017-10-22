import React from 'react';
import styled from 'styled-components';
import RestaurantManager from '../RestaurantManager';
import { Button } from '../Styled/Button';
import { Modal } from '../Styled/Modal';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ChosenRestaurant = styled.h1`
  font-size: 5em;
`;

export default function Main({ restaurant, isModalOpen, onModalOpen, onModalClose, onRandomize }) {
  return (
    <Wrapper>
      {restaurant &&
        <ChosenRestaurant>
          {restaurant.name}
        </ChosenRestaurant>
      }
      <Button
        primary
        onClick={onRandomize}
      >
        Randomize
      </Button>
      <Button
        tiny
        onClick={onModalOpen}
      >
        Manage Restaurants
      </Button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={onModalClose}
      >
        <RestaurantManager />
      </Modal>
    </Wrapper>
  );
}
