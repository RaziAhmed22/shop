import React from 'react';
import './Footer.css'

const Footer=()=>{
	return(
		<div className="bground">
			<div className="footer">
				<div className="footer-div">
					<h1>Contact</h1>
					<ul>
						<li>avenue</li> 
						<li>info@gmail.com</li> 
						<li>123456</li> 
					</ul>
				</div>
				<div className="footer-div">
					<h1>Information</h1>
					<ul>
						<li>About US</li> 
						<li>Contact Us</li> 
						<li>Short Codes</li> 
						<li>FAQ's</li> 
						<li>Special Products</li> 
					</ul>
				</div>
				<div className="footer-div">
					<h1>Category</h1>
					<ul>
						<li>Groceries</li> 
						<li>HouseHold</li> 
						<li>Personal Care</li> 
						<li>Packaged Foods</li> 
						<li>Beverages</li> 
					</ul>
				</div>
				<div className="footer-div">
					<h1>Profile</h1>
					<ul>
						<li>Store</li> 
						<li>My Cart</li> 
						<li>Login</li> 
						<li>Create Account</li> 
					</ul>
				</div>
			</div>
			<div className="horFooter">
				<div>© 2017 Super Market. All rights reserved | Design by </div>
				<div><span> W3layouts</span></div>
			</div>
		</div>
	)
}
export default Footer;