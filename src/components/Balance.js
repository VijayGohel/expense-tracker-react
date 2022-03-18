import { useContext } from "react"
import { GlobalContext } from "../context/GlobalProvider"

export const Balance = ()=>{
    const {transactions}= useContext(GlobalContext);

    const amount = transactions.map((item)=>item.amount);

    const balance = amount.reduce((income,item)=>income+=item,0)
                            .toFixed(2);

    const sign = balance < 0 ? "-" : ""
    return(
        <div>
            <h4>Your Balance</h4>
            <h1>{sign}${Math.abs(balance)}</h1>
        </div>
    )
}