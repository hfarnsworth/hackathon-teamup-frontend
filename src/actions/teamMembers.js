const API = "http://localhost:3000/"
const teamMembersAPI = API + "team_members/"

const addTeamToMember = (collaboratorID,team) => ({ type: "ADD_TEAM_TO_COLLABORATOR", collaboratorID, team })
const addMemberToTeam = (teamID,collaborator) => ({ type: "ADD_COLLABORATOR_TO_TEAM", teamID, collaborator })

export const createTeamMember = (collaborator,team) => {
  return dispatch => {
    const body = {
      team_id: `${team.id}`,
      collaborator_id: `${collaborator.id}`
    }
    return fetch(teamMembersAPI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(r => r.json())
      .then(teamMember => {
        if (teamMember.error) {
          alert(teamMember.error)
        } else {
          dispatch(addTeamToMember(teamMember.collaborator_id,team))
          dispatch(addMemberToTeam(teamMember.team_id,collaborator))
        }
        return teamMember
      })
  }
}
