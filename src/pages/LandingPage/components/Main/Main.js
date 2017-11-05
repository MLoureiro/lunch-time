import React from 'react';
import styled from 'styled-components';
import RestaurantManager from '../RestaurantManager/index';
import { Button } from '../../../../components/Styled/Button';
import { Modal } from '../../../../components/Styled/Modal';

const Wrapper = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  border-radius: 2px;
  background-color: ${({ theme }) => (theme.general.color.sheet)};
`;

const ChosenRestaurant = styled.p`
  font-size: 2em;
`;

export default function Main({ restaurantList, isModalOpen, onModalOpen, onModalClose, onRandomize }) {
  return (
    <Wrapper>
      {restaurantList && restaurantList.map(restaurant => (
        <ChosenRestaurant key={restaurant.id}>
          {restaurant.name}
        </ChosenRestaurant>
      ))}
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
