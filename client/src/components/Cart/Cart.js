import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Cart = (props) => {
  const navigate = useNavigate();
  const[products,setProducts]=useState([])
  const[userId,setUserId]=useState("");
  const [cart, setCart] = useState();
  const handleDeleteCart=()=>{
     axios
       .delete("http://localhost:4000/cart/" + props.user_id + "/sd" + "/dksj")
       .then((res) => {
        // console.log("Cart successfully deleted!");
        setCart();
       })
       .catch((error) => {
         console.log(error);
       });
  }
  const handleCheckout=()=>{
      navigate("/Checkout",{state:cart});
      // console.log("press")
  }
  useEffect(()=>{
    // console.log(props.user_id);
    setUserId(props.user_id)
    // console.log(props.cart)
    // console.log(props.login+"hdksd")
    if (props.login) {
      axios
        .get("http://localhost:4000/cart/" + props.user_id)
        .then((res) => {
          setCart(res.data);
          // console.log(res.data);
          // console.log(cart);
        })
        .catch((err) => {
          console.log(err.response);
        });
      } else {
        console.log("login first1");
      }
    },[props.cart])
  if(!props.login){
    // console.log("login first");
    // console.log(cart)
    return null;
  }
  else if(cart===undefined || cart===null){
    // console.log("empty cart");
    return null;
  } else if(cart.products) {
    const total=cart.total;
    // console.log(cart.products);
    return (
      <div className="w-[95%] mx-2 grid grid-flow-row grid-cols-1 gap-3 p-4 absolute top-[140px] rounded-lg border-2 border-black">
        <h2 className="text-2xl font-bold mb-4 ">Cart</h2>
        <h4 className="text-xl font-bold">Total Amount:{total}</h4>
        <button
          className="bg-cyan-400 rounded-md h-10 text-base"
          onClick={handleCheckout}
        >
          Checkout
        </button>
        <button
          className="bg-cyan-400 rounded-md h-10 text-base"
          onClick={handleDeleteCart}
        >
          DeleteCart
        </button>
        {cart.products.map((item) => (
          <div
            key={item.product}
            className="bg-gray-100 p-4 rounded-lg shadow mb-4 border-2 border-black"
          >
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-gray-600">Quantity:{item.quantity}</p>
            <p className="text-gray-600">Price:{item.price}</p>
            <button
              key={item._id}
              className="float left text-3xl"
              onClick={() => {
                axios
                  .post("http://localhost:4000/cart/" + "-", {
                    id: cart.user,
                    product: item.product,
                  })
                  .then((res) => {
                    console.log(res.data);
                    setCart(res.data.cart);
                    props.getCart(res.data.cart);
                  })
                  .catch((err) => {
                    console.log(err.message);
                  });
              }}
            >
              -
            </button>
            <button
              key={item._id}
              className="clear-left text-3xl"
              onClick={() => {
                axios
                  .post("http://localhost:4000/cart/" + "+", {
                    id: cart.user,
                    product: item.product,
                  })
                  .then((res) => {
                    console.log(res.data);
                    setCart(res.data.cart);
                    props.getCart(res.data.cart)
                  })
                  .catch((err) => {
                    console.log(err.message);
                  });
              }}
            >
              +
            </button>
          </div>
        ))}
      </div>
    );
  }
};

export default Cart;





