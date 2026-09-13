import { createContext, useReducer } from 'react'
import alertReducer from './AlertReducer'
import type { IAlertContext, IAlertContextProviderProps } from '../../types/AlertContext'

const AlertContext = createContext<IAlertContext>({
  alert: null,
  setAlert: () => {}
})

export const AlertProvider = ({children}: IAlertContextProviderProps) => {
  const initialState:{msg: string, type: string} | null = null

  const [state, dispatch] = useReducer(alertReducer, initialState)


  const setAlert = (msg: string, type: string) => {
    console.log(msg + " " + type)
    dispatch({
      type: 'SET_ALERT',
      payload: {msg, type}
    })

    setTimeout(() => dispatch({ type: 'REMOVE_ALERT' , payload: {msg: "Remove Alert", type: "error"}}), 3000)
  }

  return <AlertContext.Provider value={{ alert: state, setAlert }}>
    { children }
  </AlertContext.Provider>

}

export default AlertContext