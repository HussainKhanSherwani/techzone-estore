import { useNavigate } from "react-router-dom";
const Product=(props)=>{
  const navigate=useNavigate();
  if(!props.obj){
    return null;
  }
  const handleAddToCart=()=>{
    if(props.login===false){
      navigate("/Login");
    }
  }
   const handleBuy= () => {
     if (props.login === false) {
       navigate("/Login");
     }
    }
    console.log(props.obj);
    return (
      <div className="h-72 m-2 even:bg-violet-700 odd:bg-indigo-700 drop-shadow-lg rounded-md brightness-90 sna">
        <div className="h-1/2 w-full">
          <img
            className="h-full w-1/2 inline  float-right rounded-md"
            src={props.obj.product_image}
          
          ></img>
          <div className="h-full w-1/2 inline rounded-xl float-left ">
            <p className="p-1 text-3xl font-bold float-left text-white">
              {props.obj.product_name}
            </p>
            <p className="clear-left"></p>
          </div>
        </div>
        <div className="p-1 h-1/3 overflow-hidden">
          <p className=" p-1 text-lg text-white font-semibold">
            {props.obj.product_name}
          </p>
        </div>
        <div className="p-1">
          <p className="text-2xl text-white font-bold float-left ">
            {props.obj.product_price}
          </p>
          <button
            className=" mx-1 p-2 text-base text-white  float-right bg-purple-950 rounded-2xl"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
          <button
            className=" mx-1 p-2 text-base  text-white float-right bg-purple-950 rounded-2xl"
            onClick={handleBuy}
          >
            Buy
          </button>
        </div>
      </div>
    );
}
export default Product;