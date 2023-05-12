import { useEffect, useState } from "react";
import Product from "./Product";
import axios from "axios";

const ProductPage=(props)=>{
  const [products,setProducts]=useState([]);
  useEffect(()=>{
    axios.get("http://localhost:4000/product/").then(res=>{
      setProducts(res.data);
      
      console.log(products)
      products.map((product)=><Product key={product.product_id} obj={product} ></Product>)
    }).catch(err=>{
      console.log(err);
    })

  },[])
   return (
     <div className="h-full w-full bg-gradient-to-t  from-cyan-500 to-blue-500 brightness-110  overflow-y-scroll scroll-sm">
       <div className="h-32 opacity-0"></div>
       <div className="grid grid-cols-2 grid-flow-row  md:grid md:grid-cols-3 md:grid-flow-row">
         <Product login={props.login}></Product>
         <Product login={props.login}></Product>
         <Product login={props.login}></Product>
         <Product login={props.login}></Product>
         <Product login={props.login}></Product>
         <Product login={props.login}></Product>
         <Product login={props.login}></Product>
         <Product login={props.login}></Product>
         <Product login={props.login}></Product>
         <Product login={props.login}></Product>
         <Product login={props.login}></Product>
         <Product login={props.login}></Product>
         {products.map((product)=>
         <Product key={product.product_id} obj={product}></Product>)}
       </div>
     </div>
   );
}
export default ProductPage;