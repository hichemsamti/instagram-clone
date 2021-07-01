const express = require("express")
const router = express.Router()
const mongoose= require("mongoose")
const requireLogin = require ('../middleware/requireLogin')
const Post = mongoose.model("Post")




router.get('/allpost',requireLogin,(req,res)=>{
    Post.find()
    .populate("postedBy","_id name")
    .then(posts=>{
        res.json({posts:posts})
    })
    .catch(err=>{
        console.log(err)
    })


})










router.post("/createpost",requireLogin,(req,res)=>{
    const {title,body,pic} = req.body
    if(!title || !body || !pic){
        res.status(422).json({error:"please fill all the fields"})

    }
    console.log(req.user)
    
 req.user.password = undefined
 const post = new Post({
       title:title,
       body:body,
       photo:pic,
       postedBy:req.user
   })
   console.log(post)
   post.save().then(result=>{
    console.log("result" + result)
       res.json({post:result})
   })
   .catch(err=>{
       console.log(err)
   })
})





router.get("/mypost",requireLogin,(req,res)=>{
    Post.find({postedBy:req.user._id})
    .populate("postedBy","name _id")
    .then(mypost=>{
        res.json({mypost:mypost})
    })
    .catch(err=>{
        console.log(err)
    })
})

module.exports= router