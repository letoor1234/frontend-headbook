import React, { Component, Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Header from './components/Header'
import Login from './components/Login'
import NewAccount from './components/NewAccount'
import User from './components/User'


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
        <Route path='/user'>
          <Header
            contentButton= 'Log Out'
            enableButton= 'true'
            classButton= 'btn-danger'
          />
          <User/>
        </Route>
      </Router>
    );
  }
}

export default App;
