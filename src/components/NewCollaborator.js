import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createCollaborator } from '../actions/collaborators';
import { withRouter } from 'react-router-dom';
import ErrorMessage from './ErrorMessage.js';


class NewCollaborator extends Component {
  state = {
    name: '',
    role: '',
    skills: '',
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
    if ( !this.state.name || !this.state.role || !this.state.skills ) {
      this.setState({
        error: "field(s) must not be left blank"
      })
    } else {
      this.props.createCollaborator(this.state,this.props.history)
      this.setState({
        name: '',
        role: '',
        skills: ''
      })
    }
  }

  render() {
    return(
      <div className="newCollaborator">
        <h2>New Collaborator</h2>
        <ErrorMessage error={this.state.error} />
        <form onSubmit={this.handleOnSubmit} >
          <p><label>Name:</label><input name="name" type="text" onChange={this.handleOnChange} value={this.state.name} /></p>
          <p><label>Role:</label><input name="role" type="text" onChange={this.handleOnChange} value={this.state.role} /></p>
          <p><label>Skills:</label><input name="skills" type="text" onChange={this.handleOnChange} value={this.state.skills} /></p>
          <input type="submit" onSubmit={this.handleOnSubmit} />
        </form>
      </div>
    )
  }
}

export default withRouter(connect(null,{ createCollaborator })(NewCollaborator))