import React from 'react'
import {useEffect,useState,useContext} from "react"
import {UserContext} from "../../App"

export default function Profile() {

    const [mypics,setPics] = useState([])
    const {state,dispatch} = useContext(UserContext)

    useEffect(()=>{

        fetch("http://localhost:5000/mypost",{
            method:"get",
            headers:{
                "Authorization":"Bearer "+ localStorage.getItem("jwt")

            }
        }).then(res=>res.json())
        .then(result=>{
            setPics(result.mypost)
        })





    },[])
    return (
        <div style={{maxWidth:"550px", margin:"0px auto"}}>

            <div style={{
                display:"flex",
                justifyContent:'space-around',
                margin:"18px 0px",
                borderBottom:"1px solid grey"
            }} >


                  <div>

                   <img style={{width:"160px",height:"160px",borderRadius:"80px"}}
                   src={state ? state.pic : "loading"} alt=""
                   
                   />

                  <button className="btn waves-effect waves-light #64b5f6 blue lighten-2"
                  onClick={} >Update Picture

                  </button>

                  </div>

                  <div>
                 
                  <h4>{state?state.name:"loading"}</h4>
                  <h5>{state?state.email:"loading"}</h5>

                  <div style={{display:"flex", justifyContent:"space-between", width:"110%"}}>
                      <h6>{state?mypics.length:"loading"} posts</h6>
                      <h6>{state?state.followers.length:"loading"} followers</h6>
                      <h6>{state?state.following.length:"loading"} following</h6>
                  </div>

            </div>

           
           
            </div>

            <div className="gallery">
 
                 {
                     mypics.map(item=>{
                         return(
                            <img  key={item._id} className="item" src={item.photo} alt={item.title}/>
                         )
                     })
                 }


      



            </div>



        </div>
    )
}
