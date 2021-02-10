import React,{useContext, useReducer} from 'react'
import {Context} from 'context/User/UserContext'
import {getOneUSer} from 'context/User/UserState'
export default function UserList({usuarios}) {

  const {users, getOneUser} = useContext(Context)

  const getOne = (id)=>{
    const userOne = users.find((user)=>user.id===id)
    getOneUser(userOne)
     
  }
  return (
    <div className="list-group mt-5">
       {
         usuarios.map((user)=>(
            <a href="#!" onClick={e=>getOne(user.id)} className="list-group-item list-group-item-action" key={user.id}>
              <img src={user.avatar} className="img-fluid rounded-circle" width="75" alt=""/>
              <p>{user.first_name} {user.last_name}</p>
            </a>
         ))
       }
    </div>
  )
}
