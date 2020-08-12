const API = "http://localhost:3000/"
const teamsAPI = API + "teams/"

const loadTeams = teams => ({ type: "LOAD_TEAMS", teams })

const addTeam = team => ({ type: "ADD_TEAM", team })

const removeTeam = team => ({ type: "DELETE_TEAM", team })

const removeTeamFromCollaborators = team => ({type: "DELETE_TEAM_FROM_COLLABORATORS", team })

export const fetchTeams = () => {
  return dispatch => {
    return fetch(teamsAPI)
      .then(resp => resp.json())
      .then(teams => 
        dispatch(loadTeams(teams))
      )
  }
}

export const createTeam = (team,history) => {
  return dispatch => {
    const body = {
      team
    }
    return fetch(teamsAPI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(r => r.json())
      .then(newTeam => {
        if (!newTeam.id) {
          alert(JSON.stringify(newTeam))
        } else {
          dispatch(addTeam({
            ...newTeam,
            collaborators: []
          }))
          history.push('/teams')
        }
      })
  }
}

export const deleteTeam = team => {
  return dispatch => {
    return fetch(teamsAPI + team.id, {
      method: "DELETE"
    })
    .then(dispatch(removeTeam(team)))
    .then(dispatch(removeTeamFromCollaborators(team)))
  }
}