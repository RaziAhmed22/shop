import React,{Component} from "react";
import "./Offer.css"
import addOffers from ".././HomePage/addOffers/addOffer.js"
import todayOffer from ".././HomePage/todayOffer/todayOffer.js"
class Offer extends Component{
	constructor(props){
		super(props);
		this.state={
			tab:"allProduct",
			allProduct:addOffers,
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
							<button class="bttn addToCartButton" 
							onClick={()=>{this.props.clickAddToCart()}}>Add to a cart</button>
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
							<div className="allProduct" onClick={()=>{this.stateUpdater("allProduct")}}><h2 >ALL PRODUCT</h2></div>
							<div className="dailyOffer" onClick={()=>{this.stateUpdater("dailyOffer")}}><h2>DAILY OFFER</h2></div>
						</div>
						{
							this.state.tab==="allProduct"
							?<div>
								<div className="insidePara">
									<div><h5 className="hd">ALL PRODUCT</h5></div>
									<div><p className="Pg">We've pulled together all our advertised offers into one place, so you won't miss out on a great deal.</p></div>
								</div>
								<div className="offerTableCard">
									{this.mapping(this.state.allProduct)}
								</div>								
							 </div>
							:<div>
								<div className="insidePara">
									<div><h5 className="hd">DAILY OFFERS</h5></div>
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
export default Offer;