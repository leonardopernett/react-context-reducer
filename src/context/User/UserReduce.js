
export const initialization = {
  users:[],
  selectedUser:null
}

export const reducer = (state=initialization, actions)=>{
  if(actions.type=="GET_USERS"){
     return {
        ...state,
        users:actions.payload
     }
    
  }

  if(actions.type=="GET_ONE_USERS"){
    return {
       ...state,
       selectedUser:actions.payload
    }
   
 }


  return state
}