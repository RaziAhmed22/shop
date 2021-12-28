import React,{useState,useEffect} from 'react';
import Nav1 from './Components/Header/Nav1/Nav1.js';
import Footer from './Components/Footer/Footer.js';
import Product from './Components/ProductList/Product.js'
import HomePage from './Components/Pages/HomePage/HomePage.js'
import CategoryPage from './Components/Pages/CategoryPage/CategoryPage.js'
import Offer from './Components/Pages/Offer/Offer.js'
import './App.css';
import Modal from './Components/Modal/Modal.js';
import Login from './Components/Login/Login.js';
import SignUp from './Components/SignUp/SignUp.js';
import {useSelector} from "react-redux";
import Card from "./Components/Pages/CategoryPage/Card/Card.js"
import axios from "axios"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

const App=()=>{
  const[products,setProducts]=useState([])
  const[searchChange,setSearchChange]=useState("")
  const [product]=useState(Product)
  const [Category,setCategory]=useState("")
  const [SubCategory,setSubCategory]=useState("")
  const [value,setvalue]=useState("home")
  const [cartItems,setcartItems]=useState([])
  const [buttonPopup,setbuttonPopup]=useState(false)
  const user=useSelector(state=>state.user.currentUser)
  const buttonTrigger=(value)=>{
    setbuttonPopup(value)
  }
  const stateCategoryUpdater=(val)=>{
    setCategory(val)
  }
  const stateSubCategoryUpdater=(val)=>{
    setSubCategory(val)
  }
  const stateUpdater=(val)=>{
    setvalue(val)
  }
  const clickAddToCart=(product)=>{
    const exist= cartItems.find(item=>item.id===product.id)
    if (exist){
      setcartItems(cartItems.map(item=>item.id===product.id ? {...exist,qty:exist.qty+1}:item))
    }else{
      setcartItems([...cartItems,{...product,qty:1}])
    }
  }
  const clickRemoveItem=(product)=>{
    setcartItems(cartItems.filter(item=>{
      return item.id!==product.id
    }))
  }
  useEffect(()=>{
    const getProducts= async()=>{
      try{
        const res=await axios.get("http://localhost:3001/products/");
        setProducts(res.data)
      }catch(err){
        console.log(err)
      }
    }
    getProducts()
  },[])
    return(
      <div className="App">
        {searchChange===""
          ?<Router>
          <Modal 
            trigger={buttonPopup} 
            buttonTrigger={buttonTrigger}  
            cartItems={cartItems} 
            clickRemoveItem={clickRemoveItem}/>
          <Nav1 
            setSearchChange={setSearchChange}
            user={user}
            buttonTrigger={buttonTrigger}
            stateCategoryUpdater={stateCategoryUpdater} 
            stateSubCategoryUpdater={stateSubCategoryUpdater}
            stateUpdater={stateUpdater}    
            SubCategory={SubCategory}      
            />
          <Switch>
            <Route exact path="/">
              <HomePage 
              buttonTrigger={buttonTrigger} 
              clickAddToCart={clickAddToCart} 
              Product={product} 
              />
            </Route>
            <Route path={`/products/:Category`}>
             <CategoryPage
                searchChange={searchChange}
                buttonTrigger={buttonTrigger}  
                clickAddToCart={clickAddToCart}
                Category={Category}
                SubCategory={SubCategory}
                value={value}/>    
            </Route>
            <Route path="/login">
              {user ? <Redirect to="/"/>:<Login/>}
            </Route>
            <Route path="/register">
              {user ? <Redirect to="/"/>:<SignUp/>}
            </Route>
            <Route path="/offer">
              <Offer/>
            </Route>
          </Switch>
          <Footer/>
        </Router>
        :<Router>
          <Modal 
            trigger={buttonPopup} 
            buttonTrigger={buttonTrigger}  
            cartItems={cartItems} 
            clickRemoveItem={clickRemoveItem}/>
          <Nav1 
            setSearchChange={setSearchChange}
            user={user}
            buttonTrigger={buttonTrigger}
            stateCategoryUpdater={stateCategoryUpdater} 
            stateSubCategoryUpdater={stateSubCategoryUpdater}
            stateUpdater={stateUpdater}    
            SubCategory={SubCategory}      
            />
            <div className="just-checking-by-the-way">
              <Card
              searchChange={searchChange}
              buttonTrigger={buttonTrigger}  
              clickAddToCart={clickAddToCart} 
              array={products}
              />
            </div>
          <Footer/>
         </Router>
        }
      </div>
    )   
}

export default App;

