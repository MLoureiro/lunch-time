import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

class App extends Component {
  render() {
    return (
      <section className="main">
      </section>
    );
  }
}

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
console.log(app);
ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
