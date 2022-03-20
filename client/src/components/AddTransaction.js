import { useState } from "react"
import { useContext } from "react"
import { GlobalContext } from "../context/GlobalProvider"

export const AddTransaction = ()=>{

    const [text,setText] = useState("");
    const [amount,setAmount] = useState(0);

    const {addTransaction} = useContext(GlobalContext);

    function onSubmit(e)
    {
        e.preventDefault();

        const transaction = {
            // id : Math.floor(Math.random()*10000),
            text,
            amount:JSON.parse(amount)
        }

        addTransaction(transaction);

        setText("");
        setAmount(0);
    }

    return(
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" placeholder="Enter text..." onChange={(e)=>setText(e.target.value)} value={text}/>
                </div>
                <div className="form-control">
                <label htmlFor="amount"
                    >Amount <br />
                    (negative - expense, positive - income)</label
                >
                <input type="number" placeholder="Enter amount..." onChange={(e)=>setAmount(e.target.value)} value={amount}/>
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}