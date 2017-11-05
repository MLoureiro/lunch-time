import React from 'react';
import styled from 'styled-components';
import { InputWithButton } from '../../../../components/Styled/InputWithButton';
import { IconButton } from '../../../../components/Styled/IconButton';

const List = styled.ul`
  list-style: none;
  margin: 0 0 1em;
  padding: 0;
  border-radius: 3px;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  
  &:first-child{
    border-top-left-radius: 3px;  
    border-top-right-radius: 3px;  
  }
  
  &:last-child {
    border-bottom-left-radius: 3px;  
    border-bottom-right-radius: 3px;  
  }
  
  &:hover {
    background-color: #D5FFFA;
  }
`;

export default function RestaurantManager({ restaurants, onAdd, onRemove }) {
  return (
    <div>
      <List>
        {restaurants.map(restaurant => (
          <ListItem key={restaurant.id}>
            {restaurant.name}
            <IconButton
              icon="times"
              small
              danger
              onClick={() => onRemove(restaurant)}
            />
          </ListItem>
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
