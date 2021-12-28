import React,{Component} from "react";
import "./CategoryPage.css";
import DifferentCard from "./DifferentCard/DifferentCard.js";
import SideList from "../../SideList/SideList.js";
import axios from "axios"

class CategoryPage extends Component{
	constructor(props){
		super(props);
		this.state={
			array:[],
			products:[]
		}
	}
	componentDidMount(){
		const getProducts= async()=>{
			try{
				const res=await axios.get("http://localhost:3001/products/");
				this.setState({products:res.data})
			}catch(err){
				console.log(err)
			}
		}
		getProducts()
	}
	render(){
		const {
			Category,
			SubCategory,
			clickAddToCart,
			buttonTrigger
		}=this.props
		return(
			<div className="CategoryPageBg">
			<div className='extraBar'>
				<div className="innerBar">
					{	Category==="" && SubCategory===""
						?<div>
							<span className="hBar">{`Home`}</span>
						</div>
						:(
						  Category && SubCategory==="" 
						   ?<div><span className="hBar">Home /</span>{` ${Category}`}</div>
						   :<div><span className="hBar">Home / </span>{` ${SubCategory}`}</div>
						  )
					}
				</div>
			</div>
					{
						this.state.products.find(item=>{
							item.title===Category
							?item.items.map((val,index)=>{this.state.array[index]=val})
							:this.state.products.find(item=>{
								item.subTitle===SubCategory
								?item.items.map((val,index)=>{this.state.array[index]=val})
								:<div></div>
						})
						})	
					}
				<div className="psuedo">
					<div className="sideBox"><SideList/></div>
					<div className="pr-list">
						<DifferentCard
						 buttonTrigger={buttonTrigger}  
						 clickAddToCart={clickAddToCart} 
						 array={this.state.array}
						/>
					</div>
				</div>
			</div>
		)
	}
}
export default CategoryPage;