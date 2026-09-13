import type { ReactNode } from "react";

export interface IAlertContext {
    alert: { msg: string, type: string } | null
    setAlert: (msg: string, state: string) => void
}    

export interface IAlertContextProviderProps {
  children: ReactNode
}