import React, { Component } from 'react';
import NavBar from './components/NavBar.js';
import About from './components/About.js';
import NewTeam from './components/NewTeam';
import NewCollaborator from './components/NewCollaborator.js';
import TeamsContainer from './containers/TeamsContainer';
import CollaboratorsContainer from './containers/CollaboratorsContainer';
import { connect } from 'react-redux';
import { fetchCollaborators } from './actions/collaborators';
import { fetchTeams } from './actions/teams';
import { Switch, Route } from 'react-router-dom';

import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.fetchCollaborators()
    this.props.fetchTeams()
  }

  render() {
    return (
      <div className="App">
        <h1>Hackathon Teamup</h1>
        <NavBar />
        <Switch>
          <Route exact from="/" component={About} />
          <Route exact path="/newTeam" component={NewTeam}/>
          <Route exact path="/newCollaborator" component={NewCollaborator}/>
          <Route path="/collaborators" component={CollaboratorsContainer}/>
          <Route path="/teams" component={TeamsContainer}/>
          
        </Switch>
      </div>
    );
  }
}

 
export default connect(null,{ fetchCollaborators, fetchTeams })(App)