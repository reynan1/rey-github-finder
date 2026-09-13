import type { IGithubUser } from "../../types/GitUser"

interface State {
  users: IGithubUser[]
  user: IGithubUser
  repos: Record<string, unknown>[],
  isLoading: boolean
}

type Action = 
 |  {
      type: 'GET_USERS'
      payload: IGithubUser[]
    }
 |  {
      type: 'LOGIN_USER'
      payload: IGithubUser
    }   
 |  {
      type: 'GET_REPOS'
      payload: Record<string, unknown>[]
    }    
 |  {
      type: 'CLEAR_USERS'
      payload: IGithubUser[]
    }    
 |  {
      type: 'SET_LOADING'
    }
const githubReducer = (state: State, action: Action) => {
  switch(action.type) {
    case 'GET_USERS': 
      return {
        ...state,
        users: action.payload,
        isLoading: false
      }
    case 'LOGIN_USER': 
      return {
        ...state,
        user: action.payload,
        isLoading: false
    }
    case 'GET_REPOS': 
      return {
        ...state,
        repos: action.payload,
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