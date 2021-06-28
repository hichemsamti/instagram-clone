import React from 'react'

export default function Profile() {
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
                   src="https://images.unsplash.com/photo-1551179939-b839002d0a18?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt=""
                   
                   />

                  </div>

                  <div>
                 
                  <h4>Hichem SAMTI</h4>

                  <div style={{display:"flex", justifyContent:"space-between", width:"110%"}}>
                      <h6>40 posts</h6>
                      <h6>40 followers</h6>
                      <h6>40 following</h6>
                  </div>

            </div>

           
           
            </div>

            <div className="gallery">
                <img className="item" src="https://images.unsplash.com/photo-1551179939-b839002d0a18?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt=""/>
                <img className="item" src="https://images.unsplash.com/photo-1551179939-b839002d0a18?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt=""/>
                <img className="item" src="https://images.unsplash.com/photo-1551179939-b839002d0a18?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt=""/>
                <img className="item" src="https://images.unsplash.com/photo-1551179939-b839002d0a18?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt=""/>
                <img className="item" src="https://images.unsplash.com/photo-1551179939-b839002d0a18?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt=""/>



            </div>



        </div>
    )
}
