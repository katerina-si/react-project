import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, useLocation } from "react-router-dom"

import configureStore from './store';
import './App.css';
import MainRouter from "./routes/MainRouter";
import { ModalContainer } from './containers';

export const store = configureStore();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router >
          <MainRouter />
          <ModalContainer />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
