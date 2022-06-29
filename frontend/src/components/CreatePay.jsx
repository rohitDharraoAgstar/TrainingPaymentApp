import { useContext } from "react";
import { useState } from "react";
import { create } from "../api/payments";
import { PaymentsContext } from "./App";
import "./styles/createpay.css"
export default function CreatePay(){
    const [payment,setPayment]=useState({name:"",amount:""})
    const [,setPayments]=useContext(PaymentsContext)
    
    const createPayment= (event)=>{
        event.preventDefault();
        create(payment).then(res=>{
            if(res.data.success===true){
                setPayments(state=>{
                    return([{...payment,id:res.data.id}].concat(state))
                })
            }
        }).catch(err=>console.log(err))
    }

    function handleChange(event)
    {
        const{name,value} = event.target;
        setPayment(state => {
            return{
                ...state,
                [name]: value
            }
        })
    }

    return(
        <form id="createpay" onSubmit={createPayment}>
            Name: <input type="text" name="name" value={payment.name} onChange={handleChange}></input>
            Amount: <input type="text" name="amount" value={payment.amount} onChange={handleChange}></input>
            <button type="submit">Create Payment</button>
        </form>    
    )
}