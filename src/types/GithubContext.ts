import type { IGithubUser } from "./GitUser";
import type { ReactNode } from "react";

export interface IGithubContext {
   users: IGithubUser[]
   user: IGithubUser,
   repos: Record<string, unknown>[],
   isLoading: boolean
   dispatch: any,
}

export interface IGithubContextProviderProps {
  children: ReactNode
}