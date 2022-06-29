import React from "react";
import Payments from "./Payments"
import CreatePay from "./CreatePay"
import { useEffect,useState } from "react";
import { getAll } from "../api/payments";

export const PaymentsContext = React.createContext();

export default function App(){
    const [payments,setPayments]=useState([])

    useEffect(()=>{
        getAll().then(res=>setPayments(res.data.payment)).catch(err=>console.log(err))
        
    },[]);

    return(
        <PaymentsContext.Provider value={[payments,setPayments]}>
            <Payments></Payments>
            <CreatePay></CreatePay>
        </PaymentsContext.Provider>
    )
}