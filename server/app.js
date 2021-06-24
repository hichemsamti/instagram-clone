const express = require ("express")
const app = express()
const PORT = 5000
const mongoose = require ("mongoose")




app.get('/',(req,res)=>{

    res.send("hello")

})




app.listen(PORT,()=>{
    console.log("Listening on " + PORT)
})