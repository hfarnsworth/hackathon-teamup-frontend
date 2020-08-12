const API = "http://localhost:3000/"
const collaboratorsAPI = API + "collaborators/"

const loadCollaborators = collaborators => ({ type: "LOAD_COLLABORATORS", collaborators })

const addCollaborator = collaborator => ({ type: "ADD_COLLABORATOR", collaborator })

const removeCollaborator = collaborator => ({type: "DELETE_COLLABORATOR", collaborator })

const removeCollaboratorFromTeams = collaborator => ({type: "DELETE_COLLABORATOR_FROM_TEAMS", collaborator })

export const fetchCollaborators = () => {
  return dispatch => {
    return fetch(collaboratorsAPI)
      .then(resp => resp.json())
      .then(collaborators => 
        dispatch(loadCollaborators(collaborators))
      )
  }
}

export const createCollaborator = (collaborator,history) => {
  return dispatch => {
    const body = {
      collaborator
    }
    return fetch(collaboratorsAPI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(r => r.json())
      .then(newCollaborator => {
        if (!newCollaborator.id) {
          alert(JSON.stringify(newCollaborator))
        } else {
          dispatch(addCollaborator({
            ...newCollaborator,
            teams: [],
          }))
          history.push('/collaborators')
        }
      })
  }
}

export const deleteCollaborator = collaborator => {
  return dispatch => {
    return fetch(collaboratorsAPI + collaborator.id, {
      method: "DELETE"
    })
    .then(dispatch(removeCollaborator(collaborator)))
    .then(dispatch(removeCollaboratorFromTeams(collaborator)))
  }
}