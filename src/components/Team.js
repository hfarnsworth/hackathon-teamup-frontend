import React from 'react'
import TeamMembers from './TeamMembers.js';

const Team = ({ team }) => {
  return (
    team
      ? <div className="Team">
          <h3>{team.name}</h3>
          <p>Project Description: {team.description}</p>
          <TeamMembers collaborators={team.collaborators} />
        </div>
      : <h3>...No Team Here...</h3>
  )
}

export default Team