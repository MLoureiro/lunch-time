import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Main from './components/Main/index';

const Wrapper = styled.article``;

export default function LandingPageContainer() {
  return (
    <Wrapper>
      <Header />
      <Main />
    </Wrapper>
  );
}
