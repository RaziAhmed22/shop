import { loginFailure, loginStart, loginSuccess,logout } from "./userRedux";
import axios from "axios";
export const login=async (dispatch,user)=>{
	dispatch(loginStart());
	if(!user){
		dispatch(logout())
	}
	try{
		const res=await axios.post("http://localhost:3001/auth/login",user);
		dispatch(loginSuccess(res.data))
	}
	catch(err){
		dispatch(loginFailure())
	}
}
