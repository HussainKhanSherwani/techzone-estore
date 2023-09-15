import './App.css';
import { useState } from 'react';
import  Navbar  from './components/Navbar/Navbar';
import { Routes, Route } from "react-router-dom";
import SignUp from './components/Signup/Signup';
import Product from './components/Product/Product';
import Home from './components/Home/Home';
import Login from './components/Signup/Login';
import NotFound from './components/Errors/NotFound';
import ProductPage from "./components/Product/ProductPage"

function App() {
  const [logIn,setLogIn]=useState(false);
  const isLoggedIn=(logIN)=>{
    setLogIn(logIN);
    console.log(logIN)
    console.log("in app");
  }
  return (
    <div className="h-screen w-screen">
      <Navbar login={logIn} onLogout={isLoggedIn}></Navbar>
      <Routes>
        <Route path="/" element={<Home login={logIn}></Home>}></Route>
        <Route path="/Signup" element={<SignUp login={logIn}></SignUp>}></Route>
        <Route path="/Login" element={<Login login={logIn} onLogin={isLoggedIn} ></Login>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
        <Route
          path="/Monitors"
          element={<ProductPage login={logIn} category="Monitors"></ProductPage>}
        ></Route>
        <Route
          path="/Laptops"
          element={<ProductPage login={logIn} category="Laptops"></ProductPage>}
        ></Route>
        <Route
          path="/Keyboards"
          element={<ProductPage login={logIn} category="Keyboards"></ProductPage>}
        ></Route>
        <Route
          path="/Mouse"
          element={<ProductPage login={logIn} category="Mouses"></ProductPage>}
        ></Route>
        <Route
          path="/HDD"
          element={<ProductPage login={logIn} category="HDD"></ProductPage>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
