import { useNavigate } from "react-router-dom";
import "./Product.css"
import axios from "axios";
const Product=(props)=>{
  const navigate=useNavigate();
  if(!props.obj){
    return null;
  }
  const handleAddToCart=()=>{
    if(props.login===false){
      navigate("/Login");
    }
    else{
      // console.log(props.user_id)
      // console.log(props.obj._id);
      axios.post("http://localhost:4000/cart/",
      {user_id:props.user_id,
       product_id:props.obj._id,
       product_name:props.obj.product_name,
       product_price:props.obj.product_price,
       product_image:props.obj.product_image
    }).then(res=>{
      // console.log(res.data.cart+"in product");
      props.onAddToCart(res.data.cart);
      // console.log(res.data.cart);
    }).catch(err=>{
      console.log(err);
    });
    }
  }
    // console.log(props.obj);
    return (
      <div
        id="product"
        className="border-2 border-black h-72 m-2 shadow-xl rounded-md bg-gray-100  hover:shadow-gray-500 opacity-[95] hover:opacity-100"
      >
        <img
          className="w-[40%] inline rounded-md h-1/2  float-left laptop:h-3/4 laptop:w-[30%]"
          src={props.obj.product_image}
          onClick={() => {
            navigate("/Product/" + props.obj._id, { state: props.obj });
          }}
        ></img>
        <div className="h-3/4 w-[60%] laptop:w-[70%] inline  float-right overflow-hidden break-words hover:h-[45%]transition-all ease out duration-500 hover:overflow-visible hover:border-b-2 hover:border-t-2 border-black ">
          <p
            className="p-1 h-1/2 w-full text-sm font-[Poppins] font-bold float-left  overflow-hidden  laptop:text-lg"
            onClick={() => {
              navigate("/Product/" + props.obj._id, { state: props.obj });
            }}
          >
            {props.obj.product_name}
          </p>
          <p
            className="p-1 h-1/2  w-full text-gray-600 text-sm font-[Poppins] float-left clear-left overflow-hidden laptop:h-2/3 laptop:text-lg "
            onClick={() => {
              navigate("/Product/" + props.obj._id, { state: props.obj });
            }}
          >
            {props.obj.product_description}
          </p>
        </div>

        <div className="p-1 h-1/4  w-full float-left laptop:h-[16.67%]">
          <p className=" h-[95%] w-[40%] text-sm text-gray-600 font-bold font-[Poppins] float-left laptop:text-2xl">
            {"Price:Rs." + props.obj.product_price + " "}
            {"remaining " + props.obj.product_quantity}
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
    );
}
export default Product;