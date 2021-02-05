import React, { Component, Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Header from './components/Header'
import Login from './components/Login'
import NewAccount from './components/NewAccount'


class App extends Component {
  render(){
    return (
      <Router>
        <Route path='/' exact>
          <Header
            enableButton= 'false'
          />
          <Login/>
        </Route>
        <Route path='/subscribe'>
          <Header
            contentButton= 'Cancel'
            enableButton= 'true'
            classButton= 'btn-dark'
          />
          <NewAccount/>
        </Route>
      </Router>
    );
  }
}

export default App;
