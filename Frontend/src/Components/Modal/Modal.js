import React from "react";
import "./Modal.css";
import Cart from ".././Cart/Cart.js"
const Modal=(props)=> { 
  return (props.trigger) ? (
      <div className="popup">
        <div className="pop-up-inner">
          <Cart buttonTrigger={props.buttonTrigger} cartItems={props.cartItems} clickRemoveItem={props.clickRemoveItem}/>
        </div>
      </div>
  ):"";
}
export default Modal;