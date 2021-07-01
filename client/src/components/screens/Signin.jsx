import React from 'react'
import {Link, useHistory} from "react-router-dom"
import {useState,useContext} from "react"
import M from "materialize-css"
import {UserContext} from '../../App'

export default function Signup() {

    const {state,dispatch} =useContext(UserContext)
    const history = useHistory()
    
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")
    const PostData = () =>{

      
         
   

        fetch("http://localhost:5000/signin",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                
                password,
                email


            })
        }).then(res=>res.json())
        .catch(err=>{
            console.log(err)
        })
        .then(data=>{
            console.log(data)
            if(data.error){

                M.toast({html:data.error,classes:"#d32f2f red darken-2"})
            }

            else{
                localStorage.setItem("jwt",data.token)
                localStorage.setItem("user",JSON.stringify(data.user))
                dispatch({type:"USER",payload:data.user})
                M.toast({html:"signed in", classes:"#43a047 green darken-1"})
                history.push('/')

            }
        }).catch(err=>{
            console.log(err)
        })

   
    }

    return (
     <div className="mycard">
           <div className="card auth-card ">
               <h2>Instagram</h2>
               <input 
            type="email"
            placeholder="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />


            <input 
            type="text"
            placeholder="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
        
               <button className="btn waves-effect waves-light #64b5f6 blue lighten-2" 
               onClick={PostData}>Login
                   
               </button>

               <h5>

               <Link to="/signup"> Don't have an account ? </Link> 

               </h5>
        
      </div>
     </div>
    )
}
