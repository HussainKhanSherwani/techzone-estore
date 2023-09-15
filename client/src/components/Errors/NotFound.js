import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import SignUp from "../Signup/Signup";
import Product from "../Product/Product";
import Home from "../Home/Home";
import Login from "../Signup/Login";
import { useEffect } from "react";
const NotFound = () => {
  const navigate=useNavigate();
  useEffect(()=>{
    setTimeout(()=>navigate("/"),2000)
  },[])
  return (
    <div className="h-screen w-screen bg-red-600">
      <p className=" absolute text-9xl left-32 top-64 text-teal-50">Page Not Found</p>
      <p className=" relative text-9xl left-32 top-[400px] text-teal-50">Redirecting to Homepage in 2 seconds</p>
    </div>
  );
};
export default NotFound;
