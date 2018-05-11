import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import StudyListPage from '../pages/StudyListPage';
import AttendListPage from '../pages/AttendListPage';
import AttendListAdminPage from '../pages/AttendListAdminPage';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/study" component={StudyListPage} />
        <Route exact path="/attendlist" component={AttendListPage} />
        <Route exact path="/attendlist/admin" component={AttendListAdminPage} />
      </Fragment>
    );
  }
}

export default App;
