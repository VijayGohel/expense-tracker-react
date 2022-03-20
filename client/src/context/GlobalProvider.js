import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer"
const axios = require("axios");

const initialState = {
    transactions:[],
    loading:false,
    error:null
}

export const GlobalContext =  createContext(initialState);

const GlobalProvider = ({children})=>{

    async function getTransactions()
    {
        try {
            const res =await axios.get("/api/v1/transactions");

            dispatch({
                type:"GET_TRANSACTIONS",
                payload:res.data.data
            })
        } catch (err) {
            dispatch({
                type: "TRANSACTION_ERROR",
                payload: err.response.data.error
            }) ;
        }
    }
    async function deleteTransaction(id)
    {
        try {
           await axios.delete(`/api/v1/transactions/${id}`);

            dispatch({
                type: "DELETE_TRANSACTION",
                payload: id
            })    
        } catch (err) {
            dispatch({
                type: "TRANSACTION_ERROR",
                payload: err.response.data.error
            }) ;
        }

        
    }

    async function addTransaction(transaction)
    {
        try {
            const config = {
                headers:{
                    'Content-Type': 'application/json'    
                }
            }
            await axios.post("/api/v1/transactions",transaction,config);
            dispatch({
                type: "ADD_TRANSACTION",
                payload: transaction
            })    
        } catch (err) {
            dispatch({
                type: "TRANSACTION_ERROR",
                payload: err.response.data.error
            }) ;
        }
        
    }

    const [state, dispatch] = useReducer(AppReducer,initialState);

    return(
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction,
            getTransactions
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
export default GlobalProvider;