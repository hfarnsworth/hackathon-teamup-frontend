import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
      {/* Old Navbar before Bootstrap template
      
      <NavLink exact to="/">About</NavLink>
      <NavLink exact to="/teams"> Teams </NavLink>
      <NavLink exact to="/newTeam"> New Team </NavLink>
      <NavLink exact to="/collaborators"> Collaborators </NavLink>
      <NavLink exact to="/newCollaborator"> New Collaborator </NavLink> */}

      <div class="container">
        <a class="navbar-brand" href="#">Hackathon Teamup</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/">About</a>
                <span class="sr-only">(current)</span>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/teams"> Teams </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/newTeam"> New Team </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/collaborators">Collaborators</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/newCollaborator">New Collaborator</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavBar;