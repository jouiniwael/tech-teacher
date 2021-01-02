const express = require ('express');
const app =express();
const port=5000;
const mongoose = require('mongoose')

const db = mongoose.connection;
app.use(express.static('public'))
app.use(express.json()); 
app.use(express.urlencoded({extended:true}));


app.post('/register',(req,res)=>{ 
    console.log(req.body.firstname,req.body.lastname,req.body.password,req.body.email,req.body.username)
var firstname=req.body.firstname;
var lastname=req.body.lastname;
var password=req.body.password;
var email=req.body.email;
var username=req.body.username;
})

app.post('/save',(req,res)=>{
    var username=req.body.username;
    var emailusername=req.body.emailusername;
    var image=req.body.image;
    var textDsc=req.body.textDsc
    Posts.create({
        username:username,  
        useremail:emailusername,
        imgUrl: image,
        text: textDsc,
        date:Date.now()
    }) 
})