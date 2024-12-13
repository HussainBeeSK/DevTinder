const express = require('express')
const app = express(); //instance of the server.
const connection = require("./config/database");
const user = require("./Models/user")



app.post("/signup" , async(req,res)=>{
    const userobject = new user({
        firstName : "Jaanu",
        lastName : "Kakita",
        emailId   : "kakitajaanu234@gmail.com",
        password : "Jaanu@123",
        age : "22",
        gender : "female"
    })
    try{
        await  userobject.save();
        res.send("user created successfully")

    }
    catch(err){
        res.status(400).send(err.Message)
    }
    
})













connection().then(()=>{
    console.log("Database connected successfully");

    app.listen(8080 , ()=>{
        console.log("successfully listening to the port");
    }); // listening to the server 
})
.catch(()=>{
    console.log("There is an issue Establishing Database connection");
});


