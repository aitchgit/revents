import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import EventDashboard from '../../Features/Event/EventDashboard/EventDashboard';
import NavBar from '../../Features/Nav/NavBar/NavBar';
import HomePage from '../../Features/Home/HomePage';
import EventForm from '../../Features/Event/EventForm/EventForm';
import SettingsDashboard from '../../Features/User/Settings/SettingsDashboard';
import UserDetailedPage from '../../Features/User/UserDetailed/UserDetailedPage';
import PeopleDashboard from '../../Features/User/PeopleDashboard/PeopleDashboard';
import EventDetailedPage from '../../Features/Event/EventDetailed/EventDetailedPage';
import TestComponent from '../../Features/TestArea/TestComponent';


class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={HomePage} />
        </Switch>
        <Route path='/(.+)' render={() => (
        <div>
          <NavBar />
          <Container className="main">
            <Switch>
              <Route path='/events' component={EventDashboard} />
              <Route path='/test' component={TestComponent} />
              <Route path='/event/:id' component={EventDetailedPage} />
              <Route path='/manage/:id' component={EventForm} />
              <Route path='/people' component={PeopleDashboard} />
              <Route path='/profile/:id' component={UserDetailedPage} />
              <Route path='/settings' component={SettingsDashboard} />
              <Route path='/createEvent' component={EventForm} />
            </Switch>
          </Container>
        </div>
        )} />
      </div>      
    );
  }
}

export default App;
