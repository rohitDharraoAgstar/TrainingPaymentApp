import { useContext } from "react"
import { useState } from "react"
import * as api from "../api/payments"
import {PaymentsContext} from "./App"

export default function Payment(props){
    const [payment, setPayment]=useState(props.payment)
    const [updateFlag, setUpdateFlag]=useState(false)
    const [,setPayments]=useContext(PaymentsContext)

    function handleChange(event)
    {
        const{name,value} = event.target;
        console.log(value);
        setPayment(state => {
            return{
                ...state,
                [name]: value
            }
        })
    }

    const update =()=>{
        console.log(payment.id)
        console.log(updateFlag)
        setUpdateFlag(false)
        api.update(payment.id,payment)
    }
    const changeUpdateFlag=()=>{
        
        setUpdateFlag(!updateFlag)
    }

    const deletePayment=()=>{
        api.remove(payment.id).then(res=>{
            if(res.data.success===true)
                setPayments(state=>{return(state.filter(pmt=>pmt.id!==payment.id))})
        })
    }

    return(
        <div id="payment">
            {updateFlag?<div id="name">Name:<input name="name" value={payment.name} onChange={handleChange}></input></div>:<div id="name">Name: {payment.name}</div>}
            {updateFlag?<div id="amount">Amount:<input name="amount" value={payment.amount} onChange={handleChange}></input></div>:<div id="amount">Amount: {payment.amount}</div>}
            <div id="buttons">
                {updateFlag?(<button onClick={update}>Done</button>):(<button onClick={changeUpdateFlag}>Update</button>)}
                <button onClick={deletePayment}>Delete</button>
            </div>
        </div>
    )
}