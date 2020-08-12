import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="NavBar">
      <NavLink exact to="/">About</NavLink>
      <NavLink exact to="/teams"> Teams </NavLink>
      <NavLink exact to="/newTeam"> New Team </NavLink>
      <NavLink exact to="/collaborators"> Collaborators </NavLink>
      <NavLink exact to="/newCollaborator"> New Collaborator </NavLink>
    </div>
  )
}

export default NavBar;