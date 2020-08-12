import React from 'react';
import { Link } from 'react-router-dom';

const SideCollabos = ({ collaborators, deleteCollaborator }) => {

  const handleDeleteClick = collaborator => {
    deleteCollaborator(collaborator)
  }

  const collaboratorLinks = collaborators.map ( collaborator => (
    <li key={collaborator.id}><Link key={collaborator.id} to={`/collaborators/${collaborator.id}`}>{collaborator.name}</Link><button onClick={() => handleDeleteClick(collaborator)} className="delete">Delete</button></li>
  ))

  return(
    <div className="SideBar">
    <h4>List of Collaborators</h4>
      <ul>{collaboratorLinks}</ul>
    </div>
  )
}


export default SideCollabos