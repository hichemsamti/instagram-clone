import React from 'react'
import {useContext} from "react"
import {Link,useHistory} from 'react-router-dom'
import {UserContext} from "../App"

export default function Navbar() {

    const{state,dispatch}=useContext(UserContext)
    const history = useHistory()

    const renderList =()=>{

      if(state){

        return [
          <li><Link to="/profile">Profile</Link></li>,
          <li><Link to="/create">Create Post</Link></li>,
          <li><Link to="/myfollowingspost">Following Posts</Link></li>,
          <li>
            <button className="btn #c62828 red darken-3"
            
            onClick={()=>{localStorage.clear()
            dispatch({type:"CLEAR"})
            history.push('/signin')
            
            }}>
               Logout
            </button>
          </li>,
          
        ]
      }
      else{
        return[
          <li><Link to="/signin">Signin</Link></li>,
          <li><Link to="/signup">Signup</Link></li>,

        ]

      }

    }
    return (
       
  <nav>
  <div className="nav-wrapper white" style={{color:"black"}}>
    <Link to={state? "/" : "/signin"} className="brand-logo left">Instagram</Link>
    <ul id="nav-mobile" className="right ">
     {renderList()}
    </ul>
  </div>
</nav>
    )
}
