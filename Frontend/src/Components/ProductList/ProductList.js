import React from 'react'; 
import ProductCard from './ProductCard/ProductCard.js'
const ProductList=({Product})=>{
	return(
		<div>
			{Product.map(({id,...otherProps})=>{
				return <ProductCard className="ProductList" key={id} {...otherProps}/>
			})}
		</div>
	)
}
export default ProductList;