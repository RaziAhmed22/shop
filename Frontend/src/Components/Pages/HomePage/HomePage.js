import React,{Component} from 'react';
import './HomePage.css';
import Offer from "./NewOffer/Offer.js"
import NewOffer from "./NewOffer/NewOffer.js"
import TopSellingOffer from "./TopSellingOffer/TopSellingOffer.js"
import PictureHover from "./PicturesHover/PictureHover.js"
import BrandStore from "./BrandsStore/BrandStore.js"

class HomePage extends Component{
	constructor(props){
		super(props);
		this.state={
			addOffers:[],
			todayOffer:[],
			sponsor:["lorem","lorem","lorem","lorem","lorem","lorem","lorem","lorem"],
			newOffer:Offer,
		}
	}
 
render(){
	const {Product,clickAddToCart,buttonTrigger}=this.props
	return(
		<div>
			<TopSellingOffer
			buttonTrigger={buttonTrigger}  
			clickAddToCart={clickAddToCart}
			Product={Product} 
			tab={this.state.tab} 
			stateupdater={this.stateupdater}/>
			<PictureHover/>
			<BrandStore sponsor={this.state.sponsor}/>
			<NewOffer 
			buttonTrigger={buttonTrigger} 
			clickAddToCart={clickAddToCart} 
			newOffer={this.state.newOffer}/>
		</div>
	)
}
}

export default HomePage;