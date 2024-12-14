const express = require('express')
const app = express(); //instance of the server.
const connection = require("./config/database");
const user = require("./Models/user")

app.use(express.json()); //convert all the json objects to javascript objects

app.post("/signup" , async(req,res)=>{

    console.log(req.body)

    const userobject = new user(req.body)

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


