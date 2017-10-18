import React from 'react';
import styled from 'styled-components'

const images = {
    logo: require('./images/logo.svg')
};

const Wrapper = styled.section`
  height: 70px;
  width: 100%;
  background: ${({ theme }) => theme.header.color.background};
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 40px;
  height: 40px;
  margin: 0 10px;
  padding: 5px;
  border-radius: 10px; 
  border: 1px solid #666666;
`;

const BrandName = styled.h1`
  color: #666666;
  font-size: 32px;
  font-weight: normal;
`;

export default function Header() {
  return (
    <Wrapper>
      <Logo src={images.logo} />
      <BrandName>LunchTime</BrandName>
    </Wrapper>
  );
}
