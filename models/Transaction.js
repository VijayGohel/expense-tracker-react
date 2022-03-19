const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
    text:{
        type:String,
        trim:true,
        required:[true, "Pease add some text"]
    },
    amount:{
        type:Number,
        required:[true, "Please add amount"]
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model("Transaction", transactionSchema);