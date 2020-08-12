export default (state=[], action) => {
  let idx;
  let teams = [];
  let collaborators = [];
  switch (action.type) {
    case "LOAD_COLLABORATORS":
      return action.collaborators
    case "ADD_COLLABORATOR":
      return state.concat(action.collaborator)
    case "DELETE_COLLABORATOR":
      return state.filter(collaborator => collaborator !== action.collaborator)
    case "ADD_TEAM_TO_COLLABORATOR":
      idx = state.findIndex(collaborator => collaborator.id  === action.collaboratorID);
      teams = state[idx].teams;
      return [
        ...state.slice(0, idx),
        {
           ...state[idx],
           teams: [...teams, action.team],
        },
        ...state.slice(idx + 1),
     ]
     case "DELETE_TEAM_FROM_COLLABORATORS":
      collaborators = state
      collaborators.forEach(collaborator=>
        collaborator.teams = collaborator.teams.filter(team=> team.id !== action.team.id)
        )
      return collaborators
    default:
      return state
  }
}