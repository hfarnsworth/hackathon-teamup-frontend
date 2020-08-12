import React from 'react';
import TeamSelect from './TeamSelect.js';
import MemberTeams from './MemberTeams.js';

const Collaborator = ({ collaborator, teams }) => {

  return (
    collaborator
      ? <div className="Collaborator">
          <h3>{collaborator.name}</h3>
          <p>Primary Role: {collaborator.role}</p>
          <p>Skills: {collaborator.skills}</p>
          <MemberTeams teams={collaborator.teams} />
          <TeamSelect collaborator={collaborator} availableTeams={teams.filter(({ name: id1 }) => !collaborator.teams.some(({ name: id2 }) => id2 === id1))}/>
        </div>
      : <h3>...No Collaborator Here...</h3>
  )
}

export default Collaborator