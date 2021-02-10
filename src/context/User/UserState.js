
  import React,{useReducer} from 'react'
  import {Context} from 'context/User/UserContext'
  import {reducer, initialization} from 'context/User/UserReduce'
   import { getAllUsers} from 'services/getUsers'


  export default function UserState({children}){
    
    const [state, dispatch] = useReducer(reducer, initialization)
    const getUser = async ()=>{
        const res = await getAllUsers()
         dispatch(
           {type:'GET_USERS',  payload:res.data}
         )
    }
    const getOneUser = async (data)=>{
       dispatch(
        {type:'GET_ONE_USERS',  payload:data}
      )
    }

    return (
      <Context.Provider 
      value={
          {
            users:state.users,
            getUser,
            getOneUser,
            selectedUser:state.selectedUser
          }
        }>
          {children}
      </Context.Provider>
    )
  }
