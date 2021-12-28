import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import './Nav1.css';
import { Link } from "react-router-dom";
import SubCategories from "../../Pages/CategoryPage/SubCategories.js";
import Categories from "../../Pages/CategoryPage/Categories.js";
import {useDispatch} from "react-redux"
import { logout } from "../../Redux/userRedux";



const Nav1=({
	stateCategoryUpdater,
	stateSubCategoryUpdater,
	stateUpdater,
	buttonTrigger,
	user,
	setSearchChange
})=>{
	const dispatch=useDispatch()
	const handleSignOut=(e)=>{
		e.preventDefault();
		dispatch(logout())
	}
	const withSubCategories=(item,items)=>{
		return(
			<div>
				{item.title===items.title && 
				<ReactBootStrap.NavDropdown className="navbar3" title={items.title} id="basic-nav-dropdown">
		          <ReactBootStrap.NavDropdown.Item  onClick={
		          	()=>{
		          		stateCategoryUpdater("Grocery")
		          		stateSubCategoryUpdater("")
		          		stateUpdater("category")
		          	}
		      		}>
		          	{items.heading}
		          </ReactBootStrap.NavDropdown.Item>
		          <ReactBootStrap.NavDropdown.Divider />
		          <ReactBootStrap.NavDropdown.Item
		          	onClick={
		          		()=>{
		          			stateSubCategoryUpdater(items.subTitle);
		          			stateCategoryUpdater("");
		          			stateUpdater("category")
		          		}
		          	}
		      		>
		          	<Link className="allLinks" to={`/products/${items.subTitle}`}><div value="DalsAndPulse">{items.subTitle}</div></Link>
		          </ReactBootStrap.NavDropdown.Item>
		        </ReactBootStrap.NavDropdown>}
			</div>
		)
	}
	const withOutSubCategories=(item)=>{
		return(
			<div>
				<ReactBootStrap.Nav.Link className="navbar3" 
			         onClick={
			          		(event)=>{
			          			stateSubCategoryUpdater("");
			          			stateCategoryUpdater(item.title);
			          			stateUpdater("category")
			          		}
			      			}>
			        	<Link className="allLinks" to={`/products/${item.title}`}><div value="Gourmet"><span className="whiteHeaders">Gourmet</span></div></Link>
			        </ReactBootStrap.Nav.Link>
			</div>
		)
	}
	const handleSearchBar=(e)=>{
		setSearchChange(e.target.value)
	}
	return(

		<div>
			<div>
				<div className="nav1">
					<div className="nav1OutterItem">SALE UP TO 70% OFF. USE CODE "SALE70%".<span> SHOP NOW</span></div>
					<div className="nav1Buffer"></div>
					<div className="innerNav1">
						{user && <Link className="allLinks nav1Item" to="/"
						  	onClick={handleSignOut}
							>
							<div className="nav1Item" >SignOut</div>
						</Link>}
						{!user&&<div className="ifnotlogin">
							<Link className="allLinks nav1Item" to="/register"><div className="nav1Item" >Create Account</div></Link>
							<Link className="allLinks nav1Item" to="/login"><div className="nav1Item" >Login</div></Link>
						 </div>
						}
						<div className="nav1Item">Help</div>
						<div className="nav1Buffer"></div>
						<div className="nav1Item" onClick={()=>{buttonTrigger(true)}}>Cart</div>
					</div>
				</div>
			</div>
			<div>
				<div className="nav2">
					<div className="item">Order online or call us : (+0123) 234 567</div>
					<div className="nav2buffer1"></div>
					<div className="item"><span className="nav2item">Super Market</span></div>
					<div className="nav2buffer1"></div>
					<div className="innerNav2 item">
						<div className="chking-something"><input
						onChange={handleSearchBar} 
						type="search" 
						placeholder="Search for a Product"/></div>
						<div className="nav2buffer2"></div>
						<div className="Q">Q</div>
					</div>
				</div>
			</div>
			<div>
				<div>
					<ReactBootStrap.Navbar collapseOnSelect expand="lg" className="navbar">
					  <ReactBootStrap.Container>
						  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
						  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
						    <ReactBootStrap.Nav className="me-auto">
						    	<ReactBootStrap.Nav.Link className="navbar3">
						    	<Link className="allLinks"to="/"><span className="whiteHeaders">Home</span></Link></ReactBootStrap.Nav.Link>
						    	{Categories.map(item=>{
							    	return (
							    		item.subTitle===""
							    		?withOutSubCategories(item)
							    		:SubCategories.map((items,index)=>{
							    			return(
							    				withSubCategories(item,items)
								    		)
							    		})
							    		)
							    	})}
						    	<ReactBootStrap.Nav.Link className="navbar3">
							       <Link className="allLinks" to="/offer"><span className="whiteHeaders">Offers</span></Link>
							    </ReactBootStrap.Nav.Link>
						        <ReactBootStrap.Nav.Link className="navbar3" onClick={()=>{
						        	stateCategoryUpdater("Contact")
						        	stateSubCategoryUpdater("")
						        	stateUpdater("")
						        }}>
						        	<span className="whiteHeaders">Contact</span>
						       </ReactBootStrap.Nav.Link>
						      </ReactBootStrap.Nav>
							</ReactBootStrap.Navbar.Collapse>
						  </ReactBootStrap.Container>
					    </ReactBootStrap.Navbar>
				</div>
			</div>
		</div>
	)
}
export default Nav1;