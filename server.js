const path = require("path");
const express = require("express");
const colors= require("colors");
const dotenv= require("dotenv");
const morgan = require("morgan");
const transactions = require("./routes/transactions");
const connectDb = require("./config/connectDb");

dotenv.config({path:"./config/config.env"});

connectDb();

const app = express();

const PORT = process.env.PORT || 5000; 

app.use(express.json());
app.use("/api/v1/transactions", transactions);

if(process.env.NODE_ENV === "dev")
{
    app.use(morgan("dev"));
}
if(process.env.NODE_ENV === "prod")
{
    app.use(express.static("client/build"));
    app.get("*",(req,res)=>(res.sendFile(path.resolve(__dirname,"client","build","index.html"))));
}
app.listen(PORT, ()=>{
    console.log(`Server started in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold);
})