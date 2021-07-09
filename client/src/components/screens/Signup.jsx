import React from 'react'
import {Link, useHistory} from "react-router-dom"
import {useState,useEffect} from "react"
import M from "materialize-css"



export default function Signup() {
    const history = useHistory()
    const [name,setName] = useState("")
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")
    const [image,setImage] = useState("")
    const [url,setUrl] = useState (undefined)


    useEffect(()=>{
        
       if(url){
       uploadFields()
       }


    },[url])



    const uploadPic = ()=>{
        const data = new FormData()
        data.append("file",image)
        data.append("upload_preset","instagram-clone")
        data.append("cloud-name","dnpkkxist")
        fetch("https://api.cloudinary.com/v1_1/dnpkkxist/image/upload",{
            method:"post",
            body:data
        })
        .then(res=>res.json())
        .then(data=>{
           setUrl(data.url)
        })
        .catch(err=>{
            console.log(err)
        })
 
     
    }


   
    const uploadFields=()=>{

        if(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
         
   

            fetch("/signup",{
                method:"post",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    name,
                    password,
                    email,
                    pic:url
    
    
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



    const PostData = () =>{

         if(image){
             uploadPic()
         }
         
         else{

            uploadFields()
         
         
       
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
            type="password"
            placeholder="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />

            <div className="file-field input-field">
            <div className="btn #64b5f6 blue darken-1">
                <span>Uplaod Picture</span>
                <input type="file" onChange={(e)=>setImage(e.target.files[0])} />
            </div>
            <div className="file-path-wrapper">
                <input className="file-path validate" type="text" />
            </div>
            </div>
     
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
