import React from 'react';
import Collaborator from '../components/Collaborator.js';
import SideCollabos from '../components/SideCollabos.js';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { deleteCollaborator } from '../actions/collaborators';

class CollaboratorsContainer extends React.Component {
  state = {
    count: 0
  }

  handleOnClick = () => {
    // this.setState({
    //   count: this.state.count + 1
    // })

    const API = "http://localhost:3000/"
    const collaboratorsAPI = API + "collaborators/"


    console.log("a");

    fetch(collaboratorsAPI)
      .then(resp => {
        console.log("b")
        return resp.json();
      })
      .then(data => console.log('c', data))
      .catch(errors => console.log('d', errors))
      
    
    console.log('e');


    // a, e, b, c
  }

  render() {
    return (
      <div className="CollaboratorsContainer">
        <button onClick={this.handleOnClick}>Click Me!</button>{this.state.count}
        <SideCollabos collaborators={this.props.collaborators} deleteCollaborator={this.props.deleteCollaborator} />

        <Switch>
          <Route exact path="/collaborators/:id" render={ routerProps => {
            const collaborator = this.props.collaborators.find(collaborator => collaborator.id === parseInt(routerProps.match.params.id))
            return <Collaborator {...routerProps} collaborator={collaborator} teams={this.props.teams}/>
          }}/>
        </Switch>

      </div>
    )
  }
}

const mapStateToProps = ({ collaborators, teams }) => ({ collaborators, teams })

export default connect(mapStateToProps,{deleteCollaborator})(CollaboratorsContainer)