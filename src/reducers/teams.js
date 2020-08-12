export default (state=[], action) => {
  let idx;
  let collaborators = [];
  let teams = [];
  switch (action.type) {
    case "LOAD_TEAMS":
      return action.teams
    case "ADD_TEAM":
      return state.concat(action.team)
    case "DELETE_TEAM":
      return state.filter(team => team !== action.team)
    case "ADD_COLLABORATOR_TO_TEAM":
      idx = state.findIndex(team => team.id  === action.teamID);
      collaborators = state[idx].collaborators;
      return [
        ...state.slice(0, idx),
        {
           ...state[idx],
           collaborators: [...collaborators, action.collaborator],
        },
        ...state.slice(idx + 1),
     ]
    case "DELETE_COLLABORATOR_FROM_TEAMS":
      teams = state
      teams.forEach(team=>
        team.collaborators = team.collaborators.filter(collaborator=> collaborator.id !== action.collaborator.id)
        )
      return teams
    default:
      return state
  }
}