import React from 'react';
import './SideList.css';
const SideList=()=>{
	return(
		<div className="SideList">
			<h2>categories</h2>
			<div className="list">
				<ul>
					<li>Fruits And Vegetables</li>
						<ul>
							<li>Cut & Sprouts</li>
							<li>Flowers</li>
							<li>Fresh Herbs & Seasonings</li>
							<li>Fresh Vegetables</li>
							<li>International Vegetables</li>
							<li>Organic Fruits & Vegetables</li>
						</ul>
					<li>Grocery & Staples</li>
						<ul>
							<li>Dals & Pulses</li>
							<li>Dry Fruits</li>
							<li>Edible Oils & Ghee</li>
							<li>Flours & Sooji</li>
							<li>Masalas & Spices</li>
							<li>Organic Staples</li>
							<li>Rice & Rice Products</li>
							<li>Salt, Sugar & Jaggery</li>
						</ul>
					<li>Personal Care</li>
						<ul>
							<li>Baby Care</li>
							<li>Cosmetics</li>
							<li>Does & Perfumes</li>
							<li>Skin Care</li>
							<li>Sanitary Needs</li>
							<li>Oral Care</li>
							<li>Personal Hygiene</li>
							<li>Shaving Needs</li>
						</ul>
				</ul>
			</div>
		</div>
	)
}
export default SideList;