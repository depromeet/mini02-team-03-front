import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import StudyListPage from '../pages/StudyListPage';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/study" component={StudyListPage} />
      </Fragment>
    );
  }
}

export default App;
