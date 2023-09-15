import { useEffect, useState } from "react";
import Product from "./Product";
import axios from "axios";
import Cart from "../Cart/Cart";
const ProductPage=(props)=>{
  const [products,setProducts]=useState([]);
  const [category,setCategory]=useState("")
  const [cart,setCart]=useState()
  const AddtoCart=(cart)=>{
    setCart(cart)
    // console.log(cart);
  }
  
  useEffect(()=>{
    setCategory(props.category);
    // console.log(props.category + "in Product Page ");
    axios.get("http://localhost:4000/product/"+props.category).then(res=>{
      setProducts(res.data);
      // console.log(products);
      // console.log( props.user_id+" in pp")
    }).catch(err=>{
      console.log(err.message);
    })
    if (props.login) {
      axios
        .get("http://localhost:4000/cart/" + props.user_id)
        .then((res) => {
          setCart(res.data);
           console.log(res.data);
          //  console.log(cart);
        })
        .catch((err) => {
          setCart()
          console.log(err.response);
        });
    }
  },[props.category])
   return (
     <>
       <div
         className={`h-full w-[60%] grid bg-white laptop:w-3/4 m-0 ${
           !cart && "w-[99%] laptop:w-[99%]"
         }`}
       >
         <div className="h-32 opacity-0"></div>
         <div
           className={`h-screen  grid grid-cols-1 w-full  grid-flow-row overflow-y-scroll scroll-lg ${
             !cart && "w-full laptop:w-full"
           }`}
         >
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
       {console.log(cart)}
       <div
         className={`fixed right-0 top-0 h-screen visible w-[40%] laptop:w-1/4 bg-blue-50 overflow-y-scroll ${
           !cart && "hidden w-0 laptop:w-0"
         }`}
       >
         <Cart cart={cart} user_id={props.user_id} login={props.login}></Cart>
       </div>
     </>
   );
}
export default ProductPage;