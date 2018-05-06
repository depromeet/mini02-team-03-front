import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="container-wrapper">
          <Route exact path="/" component={LoginPage} />
        </div>
      </Fragment>
    );
  }
}

export default App;
