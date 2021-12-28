import React, {useState} from "react";
import { Link } from "react-router-dom";
import {loginSuccess} from "../Redux/userRedux";
import "./SignUp.css";
import axios from "axios";
import {useDispatch} from "react-redux";


const SignUp=()=>{
	const dispatch=useDispatch()
	const[user,setUser]=useState({
		username:"",
		email:"",
		password:"",
		cpassword:""
	})

	const handleChange=(e)=>{
		const name=e.target.name;
		const value=e.target.value
		setUser({...user,[name]:value})
	}
	const handleSignUp= async(e)=>{
		e.preventDefault()
		if (user.password===user.cpassword){
			try{
				const res= await axios.post("http://localhost:3001/auth/register",user)
				dispatch(loginSuccess(res.data))

			}catch(err){
				console.log(err)
			}
		}
	}
	return(
		<div>
			<div className="loginComponent">
				<div className="topheader bg-div">
					<h2 className="firstHeader">Register Here</h2>
					<div className="borTop"></div>
				</div>
				<div className="combine-div">
					<div className="loginDiv">
						<div className="loginOuterDiv">
							<div className="login-first-div">
								<div className="signup-inner-div">PROFILE INFORMATION</div>
								<div className="login-input">
									<input
									name="username" 
									onChange={handleChange}
									type="text" 
									placeholder="  User Name..."/>
								</div>
								{/*<div className="login-input"><input type="text" placeholder="  Second Name..."/></div>*/}
								<div className="checkBox">
									<div className="checkBox-div">
										<input className="subletter" 
										type="checkbox" id="subscribeletter" 
										name="subscribeletter" 
										value="lettersubscribed"/>
									</div>
									<div className="checkBox-value">Subscribe to NewsLetter</div>
								</div>
								<div className="signup-inner-div">PROFILE INFORMATION</div>
								<div className="login-input">
									<input 
									name="email"
									onChange={handleChange}
									type="email" 
									placeholder="  Email..."/>
								</div>
								<div className="login-input">
									<input 
									name="password"
									onChange={handleChange}
									type="password" 
									placeholder="  Password..."/>
								</div>
								<div className="login-input">
									<input 
									name="cpassword"
									onChange={handleChange}
									type="password" 
									placeholder="  Password Confirmation..."/></div>
								<div className="checkBox">
									<div className="checkBox-div">
										<input className="subletter" 
										type="checkbox" id="terms" 
										name="terms" 
										value="acceptterm"/>
									</div>
									<div className="checkBox-value">I accept the terms and conditions</div>
								</div>
								<div
								onClick={handleSignUp} 
								className="signup-button-div">
									<button className="signup-button">SignUp</button>
								</div>
							</div>
						</div>
						<Link className="allLinks" to="/"><div><button className="home-button">Home</button></div></Link>
					</div>
				</div>
			</div>
		</div>
	)
}
export default SignUp;