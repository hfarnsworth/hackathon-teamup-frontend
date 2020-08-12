import React from 'react'
import { Link } from 'react-router-dom';

const MemberTeams = ({ teams }) => {
  return (
    teams.length
      ? <div className="MemberTeams">
          <p>Teams</p>
          <ul>{teams.map ( team =>
            <li key={team.id}>
              <Link key={team.id} to={`/teams/${team.id}`}>{team.name}</Link>
            </li>
          )}</ul>
        </div>
      : <h3>...No Teams Yet...</h3>
  )
}

export default MemberTeams