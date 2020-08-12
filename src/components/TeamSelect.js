import React from 'react';
import { connect } from 'react-redux';
import { createTeamMember } from '../actions/teamMembers';

class TeamSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {team: null};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //props are collaborator and availableTeams

  handleChange(e) {
    this.setState({team: this.props.availableTeams[e.target.value]});
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.team) {
      this.props.createTeamMember(this.props.collaborator,this.state.team)
      this.setState({team: null})
    }
  }

  render() {
    return (
      this.props.availableTeams.length
        ?
          <div className="TeamSelect">
            <form value={this.state.team} onSubmit={this.handleSubmit}>
              <label>
                Select a Team:
                <select onChange={this.handleChange}>
                  <option value={null}>Select a Team</option>
                  {this.props.availableTeams.map( (team,index) =>
                    <option key={index} value={index}>
                      {team.name}
                    </option>
                  )}
                </select>
              </label>
              <input type="submit" value="Join Team" />
            </form>
          </div>
        :
        <div>You're on all the teams</div>
    )
  }
}

export default connect(null,{createTeamMember})(TeamSelect)