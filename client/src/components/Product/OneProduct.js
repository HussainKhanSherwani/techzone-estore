import { useLocation,useNavigate } from "react-router-dom"
import { useState,useEffect } from "react";
import Cart from "../Cart/Cart";
import axios from "axios";
const OneProduct=(props)=>{
    const location=useLocation();
    const navigate=useNavigate()
     const [cart, setCart] = useState({});
     const product=location.state;
      const handleAddToCart = () => {
        if (props.login === false) {
          navigate("/Login");
        } else {
          // console.log(props.user_id)
          // console.log(props.obj._id);
          axios.post("http://localhost:4000/cart/", {
              user_id: props.user_id,
              product_id: product._id,
              product_name: product.product_name,
              product_price: product.product_price,
              product_image: product.product_image,
            })
            .then((res) => {
              // console.log(res.data.cart+"in product");
              props.onAddToCart(res.data.cart);
              // console.log(res.data.cart);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      };
     useEffect(() => {
       if (props.login) {
         axios
           .get("http://localhost:4000/cart/" + props.user_id)
           .then((res) => {
             setCart(res.data);
             //  console.log(res.data);
             //  console.log(cart);
           })
           .catch((err) => {
             console.log(err.response);
           });
       }
     }, []);
  
    return (
      <>
        <div
          className={`h-full w-[60%] grid bg-white laptop:w-3/4 ${
            !cart && "w-full laptop:w-full"
          }`}
        >
          <div className="h-32 opacity-0"></div>
          <div
            className={`border-2 border-black  m-2 shadow-xl rounded-md bg-gray-100  hover:shadow-gray-500 opacity-[95] hover:opacity-100 ${
              !cart && "w-full laptop:w-full"
            }`}
          >
            <img
              className="w-[40%] inline rounded-md h-1/2  float-left laptop:h-3/4 laptop:w-[30%]"
              src={product.product_image}
            ></img>
            <div className="h-3/4 w-[60%] laptop:w-[70%] inline  float-right overflow-hidden break-words hover:h-[45%]transition-all ease out duration-500 hover:overflow-visible hover:border-b-2 hover:border-t-2 border-black ">
              <p className="p-1 h-1/2 w-full text-sm font-[Poppins] font-bold float-left  overflow-hidden  laptop:text-lg">
                {product.product_name}
              </p>
              <p className="p-1 h-1/2  w-full text-gray-600 text-sm font-[Poppins] float-left clear-left overflow-hidden laptop:h-2/3 laptop:text-lg ">
                {product.product_description}
              </p>
            </div>

            <div className="p-1 h-1/4  w-full float-left laptop:h-[16.67%]">
              <p className=" h-[95%] w-[40%] text-sm text-gray-600 font-bold font-[Poppins] float-left laptop:text-2xl">
                {"Price:Rs." + product.product_price + " "}
                {"remaining " + product.product_quantity}
              </p>
              <button
                className="h-[95%] mx-1 p-2 text-xs float-right rounded-2xl shadow-md shadow-sky-400 hover:shadow-sky-600 laptop:text-base laptop:h-fit"
                style={{ backgroundColor: "#00B2FF" }}
                onClick={handleAddToCart}
              >
                Add
              </button>
            </div>
          </div>
        </div>
        <div className={`absolute right-0 top-0 h-screen visible w-[40%] laptop:w-1/4 bg-blue-50 overflow-y-scroll ${!cart&&"hidden w-0 laptop:w-0"}`}>
          <Cart cart={cart} user_id={props.user_id} login={props.login}></Cart>
        </div>
      </>
    );
}
export default OneProduct;