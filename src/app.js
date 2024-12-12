const express = require('express')
const app = express(); //instance of the server.

app.use("/user" , (req,res)=>{
    res.send("hello from the user")
})

app.use("/test" , (req,res)=>{
    res.send("hello this is the request handler for test");
})

app.listen(8080 , ()=>{
    console.log("successfully listening to the port");
}); // listening to the server 