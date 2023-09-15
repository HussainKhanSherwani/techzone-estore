import './App.css';
import { useState } from 'react';
import  Navbar  from './components/Navbar/Navbar';
import { Routes, Route } from "react-router-dom";
import SignUp from './components/Signup/Signup';
import Home from './components/Home/Home';
import Login from './components/Signup/Login';
import NotFound from './components/Errors/NotFound';
import ProductPage from "./components/Product/ProductPage"
import About from './components/About/About';
import CheckOut from './components/Cart/Checkout';
import Order from './components//Orders/Order';
import AllOrders from "./components/Orders/AllOrders"
import OneProduct from "./components/Product/OneProduct"

function App() {
  const [logIn,setLogIn]=useState(false);
  const [category,setCategory]=useState("");
  const [userId,setUserId]=useState("");
  const [cart,setCart]=useState("");
  const isLoggedIn=(logIN)=>{
    setLogIn(logIN);
    // console.log(logIN)
  }
  const getCategory=(cat)=>{
    setCategory(cat);
  }
  const getUser=(user_id)=>{
  setUserId(user_id);
  }
  const getCart=(cart)=>{
  setCart(cart);
  }
  return (
    <div className="h-screen w-screen overflow-x-hidden">
      <Navbar
        login={logIn}
        onLogout={isLoggedIn}
        onCategoryChange={getCategory}
        user_id={userId}
      ></Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <Home login={logIn} user_id={userId} getCart={getCart}></Home>
          }
        ></Route>
        <Route
          path="/About"
          element={<About login={logIn} user_id={userId}></About>}
        ></Route>
        <Route path="/Signup" element={<SignUp login={logIn}></SignUp>}></Route>
        <Route
          path="/Login"
          element={
            <Login
              login={logIn}
              onLogin={isLoggedIn}
              alsoOnLogin={getUser}
            ></Login>
          }
        ></Route>
        <Route
          path="/Checkout"
          element={<CheckOut login={logIn} user_id={userId}></CheckOut>}
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
        <Route path="/Orders" element={<Order></Order>}></Route>
        <Route
          path="/AllOrders"
          element={<AllOrders login={logIn} user_id={userId}></AllOrders>}
        ></Route>
        <Route
          path="/Product/:id"
          element={<OneProduct login={logIn} user_id={userId}></OneProduct>}
        ></Route>
        <Route
          path={"/" + category}
          element={
            <ProductPage
              login={logIn}
              category={category}
              user_id={userId}
              getCart={getCart}
            ></ProductPage>
          }
        ></Route>
        
      </Routes>
    </div>
  );
}

export default App;
