import React from "react";
import "./NewOffer.css"
const NewOffer=({newOffer,clickAddToCart,buttonTrigger})=>{
	return(
		<div>
			<div className="newoffers">
				<div className="headings">
					<h1>NEW OFFER</h1>
					<div className="bordTop"></div>
				</div>
				<div className="offerContainer">
					{newOffer.map((items,index)=>{
						return(
							<div className="offerCard">
								<img src={newOffer[index].imageUrl} alt={newOffer[index].name}/>
								<div>{newOffer[index].name}</div>
								<div>ratings</div>
								<div className="price">
									<div>{`$${newOffer[index].priceAfter}`}</div>
									<div className="discount">{`$${newOffer[index].priceBefore}.00`}</div>
								</div>	
								<button 
								className=" addToCartButton"
								onClick={()=>{
									clickAddToCart(items)
									buttonTrigger(true)
								}}>
								Add to a cart</button>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}
export default NewOffer