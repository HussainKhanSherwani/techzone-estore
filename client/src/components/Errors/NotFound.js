import Navbar from "../Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import SignUp from "../Signup/Signup";
import Product from "../Product/Product";
import Home from "../Home/Home";
import Login from "../Signup/Login";
const NotFound = () => {
  return (
    <div className="h-screen w-screen bg-red-600">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Signup" element={<SignUp></SignUp>}></Route>
        <Route path="/Login" element={<Login></Login>}></Route>
      </Routes>
      <p className=" absolute text-9xl left-32 top-80 text-teal-50">Page Not Found</p>
    </div>
  );
};
export default NotFound;