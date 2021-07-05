import React from 'react'
import {useEffect,useState,useContext} from "react"
import {UserContext} from "../../App"
import {useParams} from "react-router-dom"


export default function UserProfile() {

    const [userProfile,setProfile] = useState(null)
    const [showfollow, setShowFollow]= useState (true)
    const {state,dispatch} = useContext(UserContext)
    const {userid} = useParams()
    

   

    useEffect(()=>{
        fetch(`/user/${userid}`,{
            method:"get",
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            console.log(result)
          
             setProfile(result)
             console.log(state)
        })
        .catch(err=>{console.log(err)})
     },[])


    const  followUser =  () =>{
        fetch("/follow",{
            method:"put",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer " + localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                followId:userid

            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)

            dispatch({type:"UPDATE",payload:{
                following:data.following,
                followers:data.followers
            }})
            localStorage.setItem("user",JSON.stringify(data))

              

              setProfile((prevState)=>{
                 
               

                  return {
                      ...prevState,
                      user:{
                          ...prevState.user,
                          followers:[...prevState.user.followers,data._id]
                      }
                  }
              })
             setShowFollow(false)
        })
        .catch(err=>{
            console.log(err)
        })
    }



    const  unfollowUser =  () =>{
        fetch("/unfollow",{
            method:"put",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer " + localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                unfollowId:userid

            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)

            dispatch({type:"UPDATE",payload:{
                following:data.following,
                followers:data.followers
            }})
            localStorage.setItem("user",JSON.stringify(data))

              setProfile((prevState)=>{

                const newFollower = prevState.user.followers.filter(item=>item !== data._id)
                  return {
                      ...prevState,
                      user:{
                          ...prevState.user,
                          followers:newFollower
                      }
                  }
              })


              setShowFollow(true)

              
            
        })
        .catch(err=>{
            console.log(err)
        })

    }
    return (


           <>
           {userProfile ? 
           
           <div style={{maxWidth:"550px", margin:"0px auto"}}>

           <div style={{
               display:"flex",
               justifyContent:'space-around',
               margin:"18px 0px",
               borderBottom:"1px solid grey"
           }} >


                 <div>

                  <img style={{width:"160px",height:"160px",borderRadius:"80px"}}
                  src="https://images.unsplash.com/photo-1551179939-b839002d0a18?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt=""
                  
                  />

                 </div>

                 <div>
                
                 <h4>{userProfile.user.name}</h4>
                 <h5>{userProfile.user.email}</h5>

                 <div style={{display:"flex", justifyContent:"space-between", width:"110%"}}>
                     <h6>{userProfile.posts.length} posts</h6>
                     <h6>{userProfile.user.followers.length} followers</h6>
                     <h6>{userProfile.user.following.length} following</h6>
                 </div>

                 {showfollow ? (<button style={{margin:"10px"}} className="btn waves-effect waves-light #64b5f6 blue darken-1" 
                 onClick={followUser}
                 >  Follow    </button>)
                :(<button style={{margin:"10px"}} className="btn waves-effect waves-light #64b5f6 blue darken-1" 
                onClick={unfollowUser}
                >  Unfollow    </button>)
                }

                 
                

           </div>

          
          
           </div>

           <div className="gallery">

                {
                    userProfile.posts.map(item=>{
                        return(
                           <img  key={item._id} className="item" src={item.photo} alt={item.title}/>
                        )
                    })
                }


     



           </div>



       </div>
           
           
           : <h2>loading...</h2> }

       

        </>
    )
}
