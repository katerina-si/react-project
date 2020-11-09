import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom"

import configureStore from './store';
import Users from './routes/Users'
import './App.css';
import MainRouter from "./routes/MainRouter";

export const store = configureStore();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
          <Router >
              <MainRouter />
          </Router>
        <Users />
      </Provider>
    </div>
  );
}

export default App;
