import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.section`
  display: flex;
  height: 40px;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
`;

const Logo = styled.i.attrs({  className: 'fa fa-cutlery' })`
  color: #666666;
  width: 20px;
  height: 20px;
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
      <Logo />
      <BrandName>LunchTime</BrandName>
    </Wrapper>
  );
}
