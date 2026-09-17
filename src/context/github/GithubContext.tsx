import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";
import type { IGithubUser } from "../../types/GitUser";
import type { IGithubContext, IGithubContextProviderProps } from "../../types/GithubContext";

const GithubContext = createContext<IGithubContext>({
  users: [],
  user: {} as IGithubUser,
  repos: [] as Record<string, unknown>[],
  isLoading: true,
  dispatch: {}, 
})


export const GithubProvider = ({children}: IGithubContextProviderProps) => {
  const initialState = {
    users: [] as IGithubUser[],
    user: {} as IGithubUser,
    repos: [] as Record<string, unknown>[],
    isLoading: false
  }
  
  const [state, dispatch] = useReducer(githubReducer, initialState)


  return <GithubContext.Provider value={{
      ...state,
      dispatch
    }}>
      {children}
    </GithubContext.Provider>
}


export default GithubContext