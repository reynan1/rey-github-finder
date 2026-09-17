import type { IGithubRepo } from "./GithubRepo";
import type { IGithubUser } from "./GitUser";
import type { ReactNode } from "react";

export interface IGithubContext {
   users: IGithubUser[]
   user: IGithubUser,
   repos: IGithubRepo[],
   isLoading: boolean
   dispatch: any,
}

export interface IGithubContextProviderProps {
  children: ReactNode
}