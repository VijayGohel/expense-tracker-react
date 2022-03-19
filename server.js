const express = require("express");
const colors= require("colors");
const dotenv= require("dotenv");
const morgan = require("morgan");

dotenv.config({path:"./config/config.env"});

const app = express();

const PORT = process.env.PORT || 5000; 

app.get("/", (req,res)=>{
    res.send("Hello");
})

app.listen(PORT, ()=>{
    console.log(`Server started in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold);
})