import Product from "../Product/Product";
import axios from 'axios';
import { useState,useEffect } from 'react';
import Cart from "../Cart/Cart";
  
const Home=(props)=>{
  const [cart, setCart] = useState();
  const [products, setProducts] = useState([]);
  const AddtoCart = (cart) => {
    // console.log(cart);
    setCart(cart);
  };
  // console.log(cart);
  // console.log("login is"+props.login);
  
   useEffect(() => {
     axios
       .get("http://localhost:4000/product/")
       .then((res) => {
         setProducts(res.data);
       })
       .catch((err) => {
         console.log(err.message);
       });
     if (props.login) {
       axios
         .get("http://localhost:4000/cart/" + props.user_id)
         .then((res) => {
           setCart(res.data)
          //  console.log(res.data);
          //  console.log(cart);
         })
         .catch((err) => {
          setCart();
           console.log(err.response);
         });
     }
   }, []);
    return (
      <>
        <div className={`h-full w-[60%] grid bg-white laptop:w-3/4 ${!cart&&"w-full laptop:w-full"}`} >
          <div className="h-32 opacity-0"></div>
          <div className=" w-full grid grid-cols-1 grid-flow-row overflow-y-scroll scroll-lg ">
            {products.map((product, i) => (
              <Product
                key={i}
                obj={product}
                user_id={props.user_id}
                login={props.login}
                onAddToCart={AddtoCart}
              ></Product>
            ))}
          </div>
        </div>
        <div className={`absolute right-0 top-0 h-screen w-[40%] bg-blue-50 overflow-y-scroll laptop:w-1/4 ${!cart&&" hidden w-0 laptop:w-0"}`}>
          <Cart cart={cart} user_id={props.user_id} login={props.login}></Cart>
        </div>
      </>
    );

}
export default Home;