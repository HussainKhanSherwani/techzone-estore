import {  useLocation,useNavigate } from "react-router-dom"
import NotFound from "../Errors/NotFound";
const Order=(props)=>{
    const location=useLocation()
    const navigate=useNavigate()
    const order=location.state;
    // console.log(order)
   if(order===undefined || order===null){
    return <NotFound></NotFound>
   }
   else{
     return (
       <>
         <div className="h-full w-full grid overflow-y-scroll">
           <div className="h-32 opacity-0"></div>
           <h1 className="text-4xl font-bold">You order is Placed</h1>
           <p className="text-2xl font-semibold">
             Your Order will be delivered at {order.address} and you will be
             contacted at {order.contact}
           </p>
           <p className="text-2xl font-semibold">This is your order</p>
           <div className=" w-full grid grid-cols-1 grid-flow-row gap-3 laptop:grid laptop:grid-cols-3">
             {order.products.map((item) => (
               <div
                 key={item.product}
                 className="bg-gray-100  p-4 rounded-lg shadow mb-4 border-2 border-black"
               >
                 <h3 className="text-lg font-semibold">{item.name}</h3>
                 <img src={item.image} className="float-right h-32 m-0"></img>
                 <p className="text-gray-600">Quantity:{item.quantity}</p>
                 <p className="text-gray-600">Price:{item.price}</p>
               </div>
             ))}
           </div>
         </div>
       </>
     );
   }
}
export default Order;
 