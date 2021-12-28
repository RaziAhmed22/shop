import React,{Component} from 'react';
import "./TopSellingOffer.css"
import addOffer from "../addOffers/addOffer.js"
import todayOffer from "../todayOffer/todayOffer.js";

class TopSellingOffer extends Component{
	constructor(props){
		super(props);
		this.state={
			tab:"addOffer",
			allProduct:addOffer,
			dailyOffer:todayOffer
		}
	}

 stateUpdater=(state)=>{
  this.setState({tab:state})
 }
 mapping=(value)=>{
	return (
		value.map((val,index)=>{
			return(
				<div className="offer-card1">
					<div className="offer-tag"><div className="offer-tag-content">Offer</div></div>
					<img src={value[index].imageUrl} alt={value[index].name}/>
					<div>{value[index].name}</div>
					<div>ratings</div>
					<div className="price">
						<div>{`$${value[index].priceAfter}`}</div>
						<div className="discount">{`$${value[index].priceBefore}.00`}</div>
					</div>	
					<button
					className="bttn addToCartButton"
					 onClick={()=>{
					 	this.props.clickAddToCart(val)
					 	this.props.buttonTrigger(true)
					 }}
					 >Add to a cart</button>
				</div>
					)
				})
	)
}
render(){
	return(
		<div>
			<div className="topheader">
				<h2 className="firstHeader">TOP SELLING OFFERS</h2>
				<div className="borTop"></div>
			</div>
			<div className="offerTable">
				<div className="tableHeading">
					<div className="allProduct" 
					onClick={()=>{this.stateUpdater("addOffer")}}><h2 >ADVERTISED OFFERS</h2></div>
					<div className="dailyOffer" 
					onClick={()=>{this.stateUpdater("todayOffer")}}><h2>TODAY OFFERS</h2></div>
				</div>
				{
					this.state.tab==="addOffer"
					?<div>
						<div className="insidePara">
							<div><h5 className="hd">Advertised this Week</h5></div>
							<div><p className="Pg">We've pulled together all our advertised offers into one place, so you won't miss out on a great deal.</p></div>
						</div>
						<div className="offerTableCard">
							{this.mapping(this.state.allProduct)}
						</div>								
					 </div>
					:<div>
						<div className="insidePara">
							<div><h5 className="hd">This Week</h5></div>
							<div><p className="Pg">We've pulled together all our advertised offers into one place, so you won't miss out on a great deal.</p></div>
						</div>
						<div className="offerTableCard">
							{this.mapping(this.state.dailyOffer)}
						</div>								
					 </div>
				}
			</div>
		</div>
	)
}
}

export default TopSellingOffer;