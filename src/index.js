import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import Main from './components/Main';
import registerServiceWorker from './registerServiceWorker';
import theme from './theme.style';
import './index.css';

const AppWrapper = styled.section`
  height: 100%;
  width: 100%;
  color: ${({ theme }) => theme.general.color.text};
  background-color: ${({ theme }) => theme.general.color.background};
  font-size: ${({ theme }) => theme.general.font.size};
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Header />
        <Main />
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
