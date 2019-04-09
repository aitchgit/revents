import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../App/Features/Event/EventDashboard/EventDashboard';
import NavBar from '../Features/Nav/NavBar/NavBar';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Container className="main">        
          <EventDashboard />
        </Container>
      </div>      
    );
  }
}

export default App;
