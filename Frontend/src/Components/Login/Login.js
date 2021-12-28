import React,{useState} from "react";
import "./Login.css";
import {useDispatch , useSelector} from "react-redux";
import {login} from "../Redux/apiCalls";
import { Link } from "react-router-dom";
const Login=()=>{
	const [username,setUsername]=useState("")
	const [password,setPassword]=useState("")
	const dispatch=useDispatch()
	const {isFetching,error}=useSelector((state)=>state.user)
	const handleClick=(e)=>{
		e.preventDefault()
		login(dispatch,{username,password})
	}
	return(
		<div> 
			<div className="loginComponent">
				<div className="topheader bg-div">
					<h2 className="firstHeader">Login Form</h2>
					<div className="borTop"></div>
				</div>
				<div className="combine-div">
					<div className="loginDiv">
						<div className="loginOuterDiv">
							<div className="login-first-div">
								<div className="login-input">
									<input 
									onChange={(e)=>{setUsername(e.target.value)}}
									type="email" 
									placeholder="Email"/>
								</div>
								<div className="login-input">
									<input 
									onChange={(e)=>{setPassword(e.target.value)}}
									type="password" 
									placeholder="Password"/>
								</div>
								<div className="login-bottom-div">
									<div className="login-inner-div">Forgot Password?</div>
									<div className="login-button-div">
										<button 
										disabled={isFetching} 
										onClick={handleClick}
										className="login-button">
											Login
										</button>
									</div>
									{error && <div className="error">Something went wrong</div>}
								</div>
							</div>
						</div>
						<div className="login-second-div">
							<div className="login-heading"><h4>For New People</h4></div>
							<div className="login-second-inner-div">
								<Link className="allLinks" to="/register"><div><span className="login-styling1">Register Here</span></div></Link>
								<div className="login-styling">(Or) go back to</div>
								<Link className="allLinks" to="/"><div><span className="login-styling2">Home ></span></div></Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Login;