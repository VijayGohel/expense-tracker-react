import { useContext , useEffect } from "react"
import { GlobalContext } from "../context/GlobalProvider"
import { Transaction } from "./Transaction";

export const TransactionList = ()=>{

    const {transactions, getTransactions} = useContext(GlobalContext);

    useEffect(()=>{
        getTransactions() }, []);

    return(
        <>
            <h3>History</h3>
            <ul className="list">
            {
                transactions.map((transaction)=><Transaction key={transaction.id} 
                    transaction={transaction}/>)
            }
        </ul>
      </>
    )
}