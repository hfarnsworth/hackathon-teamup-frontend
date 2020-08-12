import React from 'react';
import Team from '../components/Team.js';
import SideTeams from '../components/SideTeams.js';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { deleteTeam } from '../actions/teams';

class TeamsContainer extends React.Component {
  render() {
    return (
      <div className="TeamsContainer">
        <SideTeams teams={this.props.teams} deleteTeam={this.props.deleteTeam}/>

        <Switch>
          <Route exact path="/teams/:id" render={ routerProps => {
            const team = this.props.teams.find(team => team.id === parseInt(routerProps.match.params.id))
            return <Team {...routerProps} team={team}/>
          }}/>
        </Switch>

      </div>
    )
  }
}

const mapStateToProps = ({ teams }) => ({ teams })

export default connect(mapStateToProps,{deleteTeam})(TeamsContainer)