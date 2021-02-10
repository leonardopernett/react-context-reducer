import {lazy, useEffect, useContext} from 'react'
import {Context} from 'context/User/UserContext'

const Profile   = lazy(() => import('components/profile'))
const UserList  = lazy(() => import('components/userList'))

export default function User() {
  const {getUser, users} = useContext(Context)

  useEffect(() => {
    getUser();
  }, [])
   
  return (
<div className="row">
      <div className="col-md-6">
          <UserList usuarios={users} />
      </div>
      <div className="col-md-6">
        <Profile  />
      </div>
   </div>
   

  )
}
