import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from 'react-router-dom';
const AllOrders=(props)=>{
    const [orders,setOrders]=useState([])
    const navigate=useNavigate()
    useEffect(()=>{
      if (props.login && props.user_id){
        axios
          .post("http://localhost:4000/order/", { user: props.user_id })
          .then((res) => {
            // console.log(res.data);
            setOrders(res.data);
          })
          .catch((err) => {
            console.log(err.message);
          });
        }
        else{
          navigate("/Login")
        }
    },[])
    if(props.login && props.user_id){
      return (
        <div className="h-full w-full grid overflow-y-scroll">
          <div className="h-32 opacity-0"></div>
          <div className=" w-full grid grid-cols-1 grid-flow-row gap-3 laptop:grid laptop:grid-cols-3 rounded-md ">
            {orders.map((order) => (
              <div
                key={order._id}
                className=" w-full h-[500px] rounded-md grid grid-cols-1 grid-flow-row gap-3 laptop:grid laptop:grid-cols-1 border-2 bg-gray-300 p-5 border-black overflow-scroll"
              >
                <h3 className="text-lg font-semibold">
                  {"Order_id is" + order._id}
                </h3>
                {order.products.map((item) => (
                  <div
                    key={item._id}
                    className="bg-gray-100  p-4 rounded-lg shadow mb-4 border-2 border-black"
                  >
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <img
                      src={item.image}
                      className="float-right h-32 m-0"
                    ></img>
                    <p className="text-gray-600">Quantity:{item.quantity}</p>
                    <p className="text-gray-600">Price:{item.price}</p>
                  </div>
                ))}
                <h3 className="text-xl font-semibold">
                  {"total was" + order.total}
                </h3>
                <h3 className="text-xl font-semibold">
                  {"Order was created at" + order.created_at}
                </h3>
              </div>
            ))}
          </div>
        </div>
      );
    }
}
export default AllOrders;