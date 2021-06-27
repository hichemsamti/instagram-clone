import React from 'react'
import {Link} from "react-router-dom"

export default function Signup() {
    return (
        <div className="mycard">
        <div className="card auth-card ">
            <h2>Instagram</h2>

            <input 
            type="text"
            placeholder="text"
            />


            <input 
            type="text"
            placeholder="email"
            />


            <input 
            type="text"
            placeholder="password"
            />
     
            <button className="btn waves-effect waves-light #64b5f6 blue lighten-2" >Signup
                
            </button>

            <h5>

           <Link to="/signin"> Already have an account ? </Link> 

           </h5>
     
   </div>
  </div>
    )
}
