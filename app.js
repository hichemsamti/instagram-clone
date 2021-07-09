const express = require ("express")
const app = express()
const PORT = process.env.PORT || 5000
const mongoose = require ("mongoose")
const {MONGOURI} =require ('./config/keys')
//const cors = require ("cors")


mongoose.connect(MONGOURI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:true,
}).then(console.log("Connected to DB")).catch(err=>console.log(err))

require('./models/user')
require('./models/post')


//app.use(cors())
app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/post'))
app.use(require('./routes/user'))

if(process.env.NODE_ENV== "production"){

    app.use(express.static("client/build"))
    const path = require ("path")
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,"client","build","index.html"))
    })


}


app.listen(PORT,()=>{
    console.log("Listening on " + PORT)
})