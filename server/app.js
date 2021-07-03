const express = require ("express")
const app = express()
const PORT = 5000
const mongoose = require ("mongoose")
const {MONGOURI} =require ('./keys')
const cors = require ("cors")


mongoose.connect(MONGOURI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:true,
}).then(console.log("Connected to DB")).catch(err=>console.log(err))

require('./models/user')
require('./models/post')


app.use(cors())
app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/post'))
app.use(require('./routes/user'))


app.listen(PORT,()=>{
    console.log("Listening on " + PORT)
})