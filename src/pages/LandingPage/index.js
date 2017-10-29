import React from 'react';
import styled from 'styled-components';
import Footer from './components/Footer';
import Main from './components/Main/index';

const Wrapper = styled.article`
  display: flex;
  height: 100%;
  overflow: hidden;
  flex-direction: column;
  justify-content: space-between;
  
`;

const ContentWrapper = styled.section`
  display: flex;
  flex: 1;
  width: 80%;
  align-self: center;
`;

const Header = styled.header`
  display: flex;
  height: 50px;
  justify-content: flex-end;
  background-color: ${({ theme }) => (theme.header.color.background)};
`;

export default function LandingPage() {
  return (
    <Wrapper>
      <Header />
      <ContentWrapper>
        <Main />
      </ContentWrapper>
      <Footer />
    </Wrapper>
  );
}
