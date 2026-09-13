import type { IGithubUser } from "./GitUser";
import type { ReactNode } from "react";

export interface IGithubContext {
   users: IGithubUser[]
   user: IGithubUser,
   repos: Record<string, unknown>[],
   isLoading: boolean
   searchUsers: (text: string) => Promise<void>
   userProfile: (login: string) => void
   clearUsers: () => void
   getUserRepos: (login: string) => void
}

export interface IGithubContextProviderProps {
  children: ReactNode
}