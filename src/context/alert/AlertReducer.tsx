
type Action = 
 |  {
      type: 'SET_ALERT'
      payload: {msg: string, type: string}
    }
 |  {
      type: 'REMOVE_ALERT'
      payload: {msg: string, type: string}
    } 

const alertReducer = (state: {msg: string, type: string} | null, action: Action) => {
  switch(action.type) {
    case 'SET_ALERT': 
      return action.payload
    case 'REMOVE_ALERT':
       return null 
    default: 
      return state
  }
}

export default alertReducer