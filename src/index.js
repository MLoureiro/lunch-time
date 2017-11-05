import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import registerServiceWorker from './registerServiceWorker';
import theme from './theme.style';
import { auth, isAuthenticated, userIdManager } from './services/auth/user';
import './index.css';

const AppWrapper = styled.section`
  height: 100%;
  width: 100%;
  color: ${({ theme }) => theme.general.color.text};
  background-color: ${({ theme }) => theme.general.color.background};
  font-family: ${({ theme }) => theme.general.font.family};
  font-size: ${({ theme }) => theme.general.font.size};
`;

function LoginRoute () {
  return (
    <Route
      exact
      path="/login"
      render={renderProps => (
        !isAuthenticated() ? (
          <LoginPage />
        ) : (
          <Redirect to="/" />
        )
      )}
    />
  )
}

class App extends Component {

  render() {
    return (
      <AppWrapper>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <LoginRoute />
          <Redirect to="/" />
        </Switch>
      </AppWrapper>
    );
  }
}

const app = (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
