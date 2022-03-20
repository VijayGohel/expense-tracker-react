const Transaction = require("../models/Transaction");

exports.getTransactions=async (req,res,next)=>{
    try {
        const transactions = await Transaction.find();
        return res.status(201).json({
            success:true,
            count:transactions.length,
            data:transactions
        });
    } catch (error) {
        return res.status(500).json({
            success:false,
            error
        });
    }
    
}

exports.addTransaction= async (req,res,next)=>{
    try {
        const transaction = await Transaction.create(req.body);
        res.status(201).json({
            success:true,
            data:transaction
        });
    } catch (error) {
        // console.log(error);
        if(error.name === "ValidationError")
        {
            const messages = Object.values(error.errors).map((item)=>item.message);

            return res.status(404).json({
                success:false,
                error:messages
            })
        }
        else
        {
            return res.status(500).json(
                {
                    success:false,
                    error
                }
            )
        }
    }
    
}

exports.deleteTransaction= async (req,res,next)=>{
    
    try {
        const transaction =await Transaction.findByIdAndRemove(req.params.id);

        if(!transaction){
            return res.status(404).json({
                success:false,
                error: "No transaction found"
            });
        }

        return res.status(200).json({
            success:true,
            data:{}
        })

    } catch (error) {
        return res.status(500).json({
            success:false,
            error
        })
    }

    
}