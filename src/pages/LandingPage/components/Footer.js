import React from 'react';
import styled from 'styled-components'

const images = {
  logo: require('../../../components/images/logo.svg')
};

const Wrapper = styled.section`
  display: flex;
  height: 40px;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
`;

const Logo = styled.img`
  width: 20px;
  height: 20px;
  margin: 0 10px;
`;

const BrandName = styled.h1`
  color: #666666;
  font-size: 1em;
  font-weight: normal;
  font-family: 'Pacifico', cursive;
  margin-right: 1em;
`;

export default function Footer() {
  return (
    <Wrapper>
      <Logo src={images.logo} />
      <BrandName>LunchTime</BrandName>
    </Wrapper>
  );
}
