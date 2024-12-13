const mongoose = require('mongoose');

const connection = async()=>{
  await mongoose.connect("mongodb+srv://hussainbeeshaik54:vzT09JvKFJUszF4z@cluster0.ashlxv4.mongodb.net/DevTinder");
}

module.exports =  connection;