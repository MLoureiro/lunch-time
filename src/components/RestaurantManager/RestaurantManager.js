import React from 'react';
import styled from 'styled-components';
import { InputWithButton } from '../Styled/InputWithButton';

const List = styled.ul`
  list-style: none;
  margin: 0 0 1em;
  padding: 0;
  border-radius: 3px;
`;

const ListItem = styled.li`
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

const DeleteButton = styled.button.attrs({
  children: 'X',
  type: 'button',
})`
  float: right;
  border: 1px solid #ccc;
  border-radius: 50%;
  font-weight: bolder;
  color: #C10000;
  background-color: white;
  
  &:hover {
    color: white;
    background-color: #C10000;
    border-color: #C10000;
  }
`;

export default function RestaurantManager({ restaurants, onAdd, onRemove }) {
  return (
    <div>
      <List>
        {restaurants.map(restaurant => (
          <ListItem key={restaurant.id}>
            {restaurant.name}
            <DeleteButton onClick={() => onRemove(restaurant)} />
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
