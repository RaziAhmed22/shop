import React from "react";
import "./Cart.css"
const Cart = ({cartItems,clickRemoveItem,buttonTrigger})=>{
	const itemsPrice=cartItems.reduce((a,c)=>a+c.priceAfter*c.qty,0)
	return(
		<div>
			<div className="mainDiv">
				<div className="OutterBox">
					<div className="close-tag">
						<span 
						onClick={()=>buttonTrigger(false)}
						className="closing-tag-content">x</span>
					</div>
					<div className="innerBox">
						<div>
							<div>{cartItems.length===0 && <div>Cart is empty</div>}</div>
							{cartItems.map((item,index)=>{
								return(
									<div>
									<div className="innerFirstDiv" key={index}>
										<div><span className="name-first">{item.name}</span></div>
										<div className="firstSecondItem">
											<div className="divsItem1"><span className="item1span">{item.qty}</span></div>
											<div className="divsItem2" onClick={()=>{clickRemoveItem(item)}}>X</div>
											<div className="divsItem3">${(item.qty * item.priceAfter).toFixed(2)}</div>
										</div>
									</div>
									<div><span className="discountHeader">{`Discount: $${(item.qty*(item.priceBefore-item.priceAfter)).toFixed(2)} USD`}</span></div>
									</div>
								)
							})}
						</div>
					</div>
					<div className="subTotal">{`Subtotal: ${itemsPrice.toFixed(2)}`}</div>
				</div>
			</div>
		</div>
	)
}
export default Cart;