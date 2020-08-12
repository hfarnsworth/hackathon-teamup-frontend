import React from 'react'
import { Link } from 'react-router-dom';

const TeamMembers = ({ collaborators }) => {
  return (
    collaborators.length
      ? <div className="TeamMembers">
        <p>Team Members</p>
          <ul>{collaborators.map ( collaborator =>
            <li key={collaborator.id}>
              <Link key={collaborator.id} to={`/collaborators/${collaborator.id}`}>{collaborator.name}</Link>
            </li>
          )}</ul>
        </div>
      : <h3>...No Members Yet...</h3>
  )
}

export default TeamMembers