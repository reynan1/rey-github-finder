import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";
import type { IGithubUser } from "../../types/GitUser";
import type { IGithubContext, IGithubContextProviderProps } from "../../types/GithubContext";

const GithubContext = createContext<IGithubContext>({
  users: [],
  user: {} as IGithubUser,
  repos: [] as Record<string, unknown>[],
  isLoading: true,
  searchUsers: async () => {},
  userProfile: async () => {},
  clearUsers: () => {},
  getUserRepos: () => {}
})

const GITHUB_URL = import.meta.env.VITE_APP_GITHUB_URL
const GIT_TOKEN =  import.meta.env.VITE_APP_GITHUB_TOKEN 

export const GithubProvider = ({children}: IGithubContextProviderProps) => {
  const initialState = {
    users: [] as IGithubUser[],
    user: {} as IGithubUser,
    repos: [] as Record<string, unknown>[],
    isLoading: false
  }
  
  const [state, dispatch] = useReducer(githubReducer, initialState)

  const setLoading = () => dispatch({
      type: 'SET_LOADING'
  })

  // const [users, setUsers] = useState<IGithubUser[]>([])
  // const [isLoading, setIsLoading] = useState<boolean>(true)

  const getUserRepos = async (login: string) => {
    setLoading()

    const params = new URLSearchParams({
      sort: 'created',
      per_page: '10'
    })
        
    const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
      headers: {
        Authorization: `token ${GIT_TOKEN}`
      }
    })

    const data = await response.json()

    console.log(`data`)
    dispatch({
      type: 'GET_REPOS',
      payload: data
    })

    // Set Loading
  }

  const searchUsers = async (text: string) => {
    console.log(text)
    setLoading()
    
    const params = new URLSearchParams({
      q: text
    })
    
    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GIT_TOKEN}`
      }
    })

    const { items } = await response.json()
    console.log(`read data ${items}`)

    // setUsers(data)
    // setIsLoading(false)

    dispatch({
      type: 'GET_USERS',
      payload: items
    })

    // Set Loading
  }


  const clearUsers =  () =>  dispatch({ type: 'CLEAR_USERS',payload: []})

  const userProfile = async (login: string) => {
   
      const response = await fetch(`${GITHUB_URL}/users/${login}`, {
          headers: {
            Authorization: `token ${GIT_TOKEN}`
          }
      })

      if(response.status === 400) { 
        window.location = "/notfound"
      } else {
        const  data = await response.json()
        console.log(`read ` + data.login)
        dispatch({
          type: 'LOGIN_USER',
          payload: data
        })
      }
  }

  // const fetchUsers = async () => {
  //   setLoading()
    
  //   const response = await fetch(`${GITHUB_URL}/users`, {
  //     headers: {
  //       Authorization: `token ${GIT_TOKEN}`
  //     }
  //   })

  //   const data = await response.json()
  
  //   // setUsers(data)
  //   // setIsLoading(false)

  //   dispatch({
  //     type: 'GET_USERS',
  //     payload: data
  //   })

  //   // Set Loading
  
  // }


  return <GithubContext.Provider value={{
      users: state.users,
      user: state.user,
      repos: state.repos,
      isLoading: state.isLoading,
      searchUsers,
      userProfile,
      clearUsers,
      getUserRepos
    }}>
      {children}
    </GithubContext.Provider>
}


export default GithubContext