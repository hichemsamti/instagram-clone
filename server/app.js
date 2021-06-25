const express = require ("express")
const app = express()
const PORT = 5000
const mongoose = require ("mongoose")
const {MONGOURI} =require ('./keys')

require('./models/user')



app.use(express.json())
app.use(require('./routes/auth'))

mongoose.connect(MONGOURI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:true,
}).then(console.log("Connected to DB")).catch(err=>console.log(err))




app.listen(PORT,()=>{
    console.log("Listening on " + PORT)
})