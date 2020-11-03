import React,{useState,useEffect} from 'react';

import {useSelector} from "react-redux";
import {postOrder} from "../../api";

import {setToppings,setSize,setCrust,setValue,setMax} from "../../redux/actions";
import {useDispatch} from "react-redux";

import './style.scss';
  
function Confirm() {
  const dispatch = useDispatch();

  const [disabledConfirm, setDisabledConfirm] = useState(true)
  const [finalMessage, setFinalMessage] = useState("Something is missing, check if you have selected size and crust of your order.")
  const {toppings, size, crust,price} = useSelector(state => state);

  useEffect(() => {
    if(size&&crust&&price?.reduce((acc, value)=>acc+value)){
      setDisabledConfirm(false)
    }
  }, [])
  
  const sendData = async () => {
    const data = {
      size,
      crust,
      toppings,
      value:price.reduce((acc, value)=>acc+value)
    }
    try{
      const resp = await postOrder(data);
      setFinalMessage("Order sent, identifyer: "+resp.newRecord._id)
      setDisabledConfirm(true)
    }catch{
      setFinalMessage("Something went wrong, please refreshe and try again")

    }
  }


  return (
    <div className="main_container">
      <header className="main_header">
        <h2 className="main_title">confirm your order</h2>
      </header>
        <div className="confirm_order">
           <div className="confirm_details">
            <p>pizz'n'go</p>
              --------------------------------------------------
                <p><strong>{size}</strong> pizza,</p>
                <p><strong>{crust}</strong> crust,</p>
                <p>toppings;</p>
                {toppings.map((topping,index)=>{
                  return(<p><strong>{index+1} - {topping}</strong></p>)
                })}
              --------------------------------------------------
              <p className="confirm_total"><strong>Total: {price?.reduce((acc, value)=>acc+value).toFixed(2)}</strong></p>
            
            {disabledConfirm?<h3>{finalMessage}</h3>:""}
             
            </div> 
      <button onClick={sendData} disabled={disabledConfirm} className="confirm_button">confirm order</button>
      </div>
       
    </div>
  );
}

export default Confirm;
