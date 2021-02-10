import React,{useContext} from 'react'
import {Context} from 'context/User/UserContext'

export default function Profile() {
  const {selectedUser} = useContext(Context)

  return (
    <div className="mt-5">
       {
         selectedUser != null ? (
            <div className="card">
               <div className="card-body text-center">
                      <img src={selectedUser.avatar} className="img-fluid rounded-circle" width="75" alt=""/>
                      <p>{selectedUser.first_name} {selectedUser.last_name}</p>
               </div>
            </div>
         ):(
           <p>not data yet</p>
         )
          
       }
    </div>
  )
}
