import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Title = styled.h3`
  font-size: 3em;
  margin: 0;
  padding: 0;
`;

const Error = styled.h1`
  color: #9b0000;
  font-size: 5em;
  margin: 0;
  padding: 0;
`;

export default function NotFound() {
  return (
    <Wrapper>
      <Error>404</Error>
      <Title>You lost?</Title>
    </Wrapper>
  );
}
