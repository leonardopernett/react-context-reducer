
import {Suspense} from 'react'
import {Route, Redirect} from 'wouter'
import User from 'pages/User';
import UserState from 'context/User/UserState'

const NotFoundRedirect = () => <Redirect to='/not-found' />

const Notfound = ()=>{
  return "page not found"
}

function Router() {
  return (
    <UserState>
        <Suspense fallback={null}>
         <div className="container">
           <Route path="/users" component={User} />
           <Route path="/not-found" component={Notfound} />
           <Route component={NotFoundRedirect}/>
         </div>
       </Suspense>
    </UserState>
  )
}

export default Router;
