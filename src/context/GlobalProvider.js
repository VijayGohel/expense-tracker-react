import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer"
const initialState = {
    transactions:[
        {id:1 ,text:"Flower", amount:-20},
        {id:2 ,text:"Salary", amount:2000}
    ]
}

export const GlobalContext =  createContext(initialState);

const GlobalProvider = ({children})=>{

    const [state, dispatch] = useReducer(AppReducer,initialState);

    return(
        <GlobalContext.Provider value={{
            transactions: state.transactions
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
export default GlobalProvider;