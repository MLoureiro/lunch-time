import React, { Component } from 'react';
import styled from 'styled-components';
import { loginWithGoogle } from '../../services/auth/user';

const images = {
  google: require('./images/google.svg'),
};

const Link = styled.a``;

const Icon = styled.img`
  width: 80px;
`;

const GoogleIcon = styled(Link).attrs({
  children: <Icon src={images.google} />
})`
  display: inline-block;
  padding: 0;
  border-radius: 5px;
  
  &:hover {
    background-color: white;
    border: 1px solid #cccccc;  
  }
`;

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const IconWrapper = styled.div``;

const Title = styled.h1`
  font-size: 2em;
  margin-bottom: 1em;
`;

const ErrorMessage = styled.p`
  color: #6F0D0A;
  font-weight: bold;
`;

export default class LoginPageContainer extends Component {
  state = { hasLoginFailed: false };

  async googleSinIn() {
    this.setState({ hasLoginFailed: await loginWithGoogle() });
  }

  render() {
    return (
      <Wrapper>
        <Title>Login with:</Title>
        <IconWrapper>
          <GoogleIcon onClick={() => this.googleSinIn()} />
        </IconWrapper>
        {this.state.hasLoginFailed &&
          <ErrorMessage>
            Login failed.
          </ErrorMessage>
        }
      </Wrapper>
    )
  }
}
