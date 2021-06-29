import React from 'react'
import {Link, useHistory} from "react-router-dom"
import {useState} from "react"
import M from "materialize-css"


export default function Signup() {
    const history = useHistory()
    const [name,setName] = useState("")
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")
    const PostData = () =>{

      if(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
         
   

        fetch("http://localhost:5000/signup",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,
                password,
                email


            })
        }).then(res=>res.json())
        .catch(err=>{
            console.log(err)
        })
        .then(data=>{
            if(data.error){

                M.toast({html:data.error,classes:"#d32f2f red darken-2"})
            }

            else{

                M.toast({html:data.message, classes:"#43a047 green darken-1"})
                history.push('/signin')

            }
        }).catch(err=>{
            console.log(err)
        })

    }
    else{

        M.toast({html:"invalid email",classes:"#d32f2f red darken-2"})
    }

    }





    return (
        <div className="mycard">
        <div className="card auth-card ">
            <h2>Instagram</h2>

            <input 
            type="text"
            placeholder="name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />


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
             onClick={PostData} >Signup
                
            </button>

            <h5>

           <Link to="/signin"> Already have an account ? </Link> 

           </h5>
     
   </div>
  </div>
    )
}
