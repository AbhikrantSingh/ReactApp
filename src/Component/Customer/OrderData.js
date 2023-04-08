import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
function OrderData() {
    const total = useSelector(state=>state.orderD.total);
    const [check,setCheck]=useState(false);
  return (
      <>
    <div hidden={check}>
        <h1>Pls Enter ur address</h1>
        <label>Enter ur Address</label>
        
        <input type ="text"/>
        <br></br>
        <label>Enter ur Phone Number</label>
        <input type ="text"/>
        <br></br>
        <h2>Totals Amount of your Order:{total}</h2>
        <button onClick={()=>{
            setCheck(!check);
        }}>PlaceOrder</button>
    </div>
    <div hidden={!check}>
        <h1>Order placed Successuffly will reach at Door Soon!!.</h1>
    </div>
    </>
  )
}

export default OrderData