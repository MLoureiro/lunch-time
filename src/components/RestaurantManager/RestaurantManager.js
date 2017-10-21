import React from 'react';
import styled from 'styled-components';
import { InputWithButton } from '../Styled/InputWithButton';

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  padding: 5px;
`;

export default function RestaurantManager({ restaurants, onAdd }) {
  return (
    <div>
      <List>
        {restaurants.map(item => (
          <ListItem key={item}>{item}</ListItem>
        ))}
      </List>
      <InputWithButton
        name="newRestaurant"
        button="+"
        onSubmit={onAdd}
      />
    </div>
  );
}
