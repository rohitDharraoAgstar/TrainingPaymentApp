import { useContext } from "react";
import Payment from "./Payment";
import "./styles/payments.css";
import { PaymentsContext } from "./App";

export default function Payments(){
    const [payments,]=useContext(PaymentsContext)

    return(
        <div id="payments">
            <h1 id="heading">Payments</h1>
        {payments.map(payment=><Payment key={payment.id} payment={payment}></Payment>)}
        </div>
    )
}