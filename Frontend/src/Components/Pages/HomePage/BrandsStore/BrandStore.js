import React from 'react';
import "./BrandStore.css"


const BrandStore=({sponsor})=>{
	return(
			<div className="brands">
				<div className="brand-upper-heading"> 
					<h1 className="heading-store-1">BRANDS STORE</h1>
					<div className="bordTop-1"></div>
				</div>
				<div className="containerDiv">
					{sponsor.map(item=>{
						return(
							<div className="outterDiv">
								<div className="innerContainer">
									<h5>{item}</h5>
								</div>
							</div>
						)
					})}
				</div>
			</div>
	)
}
export default BrandStore;