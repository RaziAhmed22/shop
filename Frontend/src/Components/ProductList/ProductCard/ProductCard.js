import React from 'react';
import './ProductCard.css'
const ProductCard=({title,items})=>{
	return(
		<div>
			{/*{console.log(title)}*/}
			{/*<h1>{title}</h1>*/}
			{items.filter((item,index)=>index<3).map((item)=>{
				return (
					<div className="ProductCard" key={item.id}>
						<img src={item.imageUrl} alt={item.name}/>
						<div>{item.name}</div>
						<div>ratings</div>
						<div className="price">
							<div>{`$${item.priceAfter}`}</div>
							<div className="discount">{`$${item.priceBefore}.00`}</div>
						</div>	
						<button>Add to a cart</button>
					</div>
				)
				})
			}
		</div>
	)
}
export default ProductCard;