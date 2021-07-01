/*import React from 'react'
import {useState} from "react"
import {useHistory} from "react-router-dom"
import M from "materialize-css"

export default function CreatePost() {

    const history=useHistory()
    const [title,setTitle]= useState('')
    const [body,setBody]= useState('')
    const [image,setImage]= useState('')
    const [url,setUrl]=useState('')

    const PostDetails = ()=>{
        const data =new FormData()
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

        fetch("http://localhost:5000/createpost",{
          
          method:"post",
          headers:{
              "Content-Type":"application/json"
          },
          body:JSON.stringify({
                
          title,
          body,
          pic:url
            


        })
          .then(res=>{
            res.json()
          })
          
          .then(data=>{
            console.log(data)
            if(data.error){

                M.toast({html:data.error,classes:"#d32f2f red darken-2"})
            }

            else{

                M.toast({html:"created successfully", classes:"#43a047 green darken-1"})
                history.push('/')

            }
        }).catch(err=>{
            console.log(err)
        })
        }
        )

    }



    return (
        <div className="card input-filed"
        style={{
            margin:"20px auto",
            maxWidth:"500px",
            padding:"20px",
            textAlign:"center"
        }}>
            <input type="text" 
            placeholder="title"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            />
            <input type="text"
             placeholder="body"
             value={body}
             onChange={(e)=>setBody(e.target.value)}

             />

            <div className="file-field input-field">
               <div className="btn blue darken-1">
                 <span>File</span>
                 <input type="file"
                 onChange={(e)=>setImage(e.target.files[0])}
                 
                  />
               </div>
               <div className="file-path-wrapper">
               <input className="file-path validate" type="text"/>
              </div>
            </div>

            <button className="btn waves-effect waves-light #64b5f6 blue darken-1"
            
            onClick={PostDetails}

            >Submit
                   
            </button>
            
        </div>
    )
}*/



import React,{useState,useEffect} from 'react'
import M from 'materialize-css'
import {useHistory} from 'react-router-dom'
const CretePost = ()=>{
    const history = useHistory()
    const [title,setTitle] = useState("")
    const [body,setBody] = useState("")
    const [image,setImage] = useState("")
    const [url,setUrl] = useState("")
    useEffect(()=>{
       if(url){
        fetch("http://localhost:5000/createpost",{
            method:"post",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                title,
                body,
                pic:url
            })
        }).then(res=>res.json())
        
        .then(data=>{
            console.log( data)
    
           if(data.error){
              M.toast({html: data.error,classes:"#c62828 red darken-3"})
           }
           else{
               M.toast({html:"Created post Successfully",classes:"#43a047 green darken-1"})
               history.push('/')
           }
        }).catch(err=>{
            console.log(err)
        })
    }
    },[url])
  
   const postDetails = ()=>{
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
 

   return(
       <div className="card input-filed"
       style={{
           margin:"30px auto",
           maxWidth:"500px",
           padding:"20px",
           textAlign:"center"
       }}
       >
           <input 
           type="text"
            placeholder="title"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            />
           <input
            type="text"
             placeholder="body"
             value={body}
            onChange={(e)=>setBody(e.target.value)}
             />
           <div className="file-field input-field">
            <div className="btn #64b5f6 blue darken-1">
                <span>Uplaod Image</span>
                <input type="file" onChange={(e)=>setImage(e.target.files[0])} />
            </div>
            <div className="file-path-wrapper">
                <input className="file-path validate" type="text" />
            </div>
            </div>
            <button className="btn waves-effect waves-light #64b5f6 blue darken-1"
            onClick={()=>postDetails()}
            
            >
                Submit post
            </button>

       </div>
   )
}


export default CretePost
