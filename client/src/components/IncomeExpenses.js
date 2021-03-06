import { useContext } from "react"
import { GlobalContext } from "../context/GlobalProvider"

export const IncomeExpenses = ()=>{
    const {transactions}= useContext(GlobalContext);

    const amount = transactions.map((item)=>item.amount);

    const income = amount.filter((item)=>item>0)
                            .reduce((income,item)=>income+=item,0) * 1
                            .toFixed(2);

    const expense = amount.filter((item)=>item<0)
                            .reduce((expense,item)=>expense+=item,0) * (-1)
                            .toFixed(2);
    return(
        <div className="inc-exp-container">
            <div>
            <h4>Income</h4>
            <p className="money plus">${income}</p>
            </div>
            <div>
            <h4>Expense</h4>
            <p className="money minus">${expense}</p>
            </div>
      </div>
    )
}