import React from 'react';
const DifferentCard=({array,clickAddToCart,buttonTrigger,searchChange})=>{
	return(
		<div>
			{array.map((item)=>{
				return (
					<div className="Card" key={item.id}>
						<div className="offer-tag"><div className="offer-tag-content">Offer</div></div>
						<img src={item.imageUrl} alt={item.name}/>
						<div>{item.name}</div>
						<div>ratings</div>
						<div className="price">
							<div>{`$${item.priceAfter}`}</div>
							<div className="discount">{`$${item.priceBefore}.00`}</div>
						</div>	
						<button className="addToCartButton" 
						onClick={()=>{
							clickAddToCart(item)
							buttonTrigger(true)
						}}>Add to a cart</button>
					</div>
				)
				})
			}
		</div>
	)
}
export default DifferentCard;