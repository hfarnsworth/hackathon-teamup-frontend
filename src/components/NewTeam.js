import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createTeam } from '../actions/teams';
import { withRouter } from 'react-router-dom';
import ErrorMessage from './ErrorMessage.js';

class NewTeam extends Component {
  state = {
    name: '',
    description: '',
    error: '',
  };

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleOnSubmit = e => {
    e.preventDefault();
    this.setState({
      error: '',
    })
    const teamExists = this.props.teams.filter(team =>
      team.name.toLowerCase() === this.state.name.toLowerCase())
    if (this.state.name === ''|| this.state.description === '') {
      this.setState({
        error: "field(s) must not be left blank"
      })
    } else if (teamExists.length) {
      this.setState({
        error: "only one team may use this name"
      })
    } else {
      this.props.createTeam({
        name: this.state.name,
        description: this.state.description
      },this.props.history)
      this.setState({
        name: '',
        description: ''
      })
    }
  }

  render() {
    return(
      <div className="newTeam">
        <h2>New Team</h2>
        <ErrorMessage error={this.state.error} />
        <form onSubmit={this.handleOnSubmit} >
          <p><label>Team Name:</label><input name="name" type="text" onChange={this.handleOnChange} value={this.state.name} /></p>
          <p><label>Project Description:</label><input name="description" type="text" onChange={this.handleOnChange} value={this.state.description} /></p>
          <input type="submit" onSubmit={this.handleOnSubmit} />
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ teams }) => ({ teams })

export default withRouter(connect(mapStateToProps,{ createTeam })(NewTeam))