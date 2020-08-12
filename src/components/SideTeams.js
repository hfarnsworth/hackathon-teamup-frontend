import React from 'react';
import { Link } from 'react-router-dom'

const SideTeams = ({ teams, deleteTeam }) => {

  const handleDeleteClick = team => {
    deleteTeam(team)
  }

  const teamLinks = teams.map ( team => (
    <li key={team.id}><Link key={team.id} to={`/teams/${team.id}`}>{team.name}</Link><button onClick={() => handleDeleteClick(team)} className="delete">Delete</button></li>
  ))

  return(
    <div className="SideBar">
    <h4>List of Teams </h4>
      <ul>{teamLinks}</ul>
    </div>
  )
}


export default SideTeams