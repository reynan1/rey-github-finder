import type { IGithubUser } from "../../types/GitUser"

interface State {
  users: IGithubUser[]
  user: IGithubUser
  repos: Record<string, unknown>[],
  isLoading: boolean
}

type Action = 
 |  {
      type: 'SET_LOADING'
    }
 |  {
      type: 'GET_USERS'
      payload: IGithubUser[]
    }
 |  {
      type: 'GET_USERS_AND_REPOS'
      payload: {user: IGithubUser, repos: Record<string, unknown>[]}
    }   
 |  {
      type: 'CLEAR_USERS'
      payload: IGithubUser[]
    }    
    
const githubReducer = (state: State, action: Action) => {
  switch(action.type) {
    case 'GET_USERS': 
      return {
        ...state,
        users: action.payload,
        isLoading: false
      }
    case 'GET_USERS_AND_REPOS': 
      return {
        ...state,
        user: action.payload.user,
        repos: action.payload.repos,
        isLoading: false
    }
    case 'CLEAR_USERS':  
      return {
        ...state,
        users: action.payload,
        isLoading: false
      }
    case 'SET_LOADING' :
      return {
        ...state,
        isLoading: true
      }  


    default: 
      return state
  }
}

export default githubReducer