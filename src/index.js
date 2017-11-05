import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import NotFound from './pages/NotFound';
import registerServiceWorker from './registerServiceWorker';
import theme from './theme.style';
import './index.css';

const AppWrapper = styled.section`
  height: 100%;
  width: 100%;
  color: ${({ theme }) => theme.general.color.text};
  background-color: ${({ theme }) => theme.general.color.background};
  font-family: ${({ theme }) => theme.general.font.family};
  font-size: ${({ theme }) => theme.general.font.size};
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route component={NotFound} />
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
