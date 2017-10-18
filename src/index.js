import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import registerServiceWorker from './registerServiceWorker';
import theme from './theme.style';
import './index.css';

const AppWrapper = styled.section`
  background-color: ${({ theme }) => theme.main.color.background};
  color: ${({ theme }) => theme.main.color.text};
  height: 100%;
  width: 100%;
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Header />
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
console.log(app);
ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
