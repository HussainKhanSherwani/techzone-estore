import { useState } from "react"
import { useLocation ,useNavigate} from "react-router-dom";
import axios from "axios";
const CheckOut= (props)=>{
    const [address,setAddress]=useState("")
    const [contact,setContact]=useState("")
    const [sure,setSure]=useState(false)
    const location = useLocation();
    const navigate = useNavigate();
    const cart = location.state;
    // console.log(cart);
    const handleSubmit=(e)=>{
      e.preventDefault();
      console.log("Submitted")
      alert(
      );
        axios
          .post("http://localhost:4000/order/" + cart._id, {
            user: props.user_id,
            products: cart.products,
            total: cart.total,
            address: address,
            contact: contact,
          })
          .then((res) => {
            // console.log(res.data);
            navigate("/Orders", { state: res.data.order });
          })
          .catch((err) => {
            console.log(err);
          });
      
    }
    const OnChangeAddress=(e)=>{
        setAddress(e.target.value);
        // console.log(address)
    }
    const OnChangeContact=(e)=>{
        setContact(e.target.value);
    }
    return (
      <div className="h-full w-full bg-blue-200">
        <div className=""></div>
        <form
          onSubmit={handleSubmit}
          className="absolute m-2 py-4 top-1/3 right-1/4 left-0 h-fit w-[95%]  rounded-xl md:w-1/2 md:left-1/4 bg-gray-100 border-2 border-black shadow-sky-400 shadow-xl"
        >
          <input
            id="contact"
            className="mx-6 px-3 my-3 h-9 w-[90%]  rounded-md  focus:opacity-70 transition ease-out duration-500 focus:shadow-lg focus:shadow-white"
            style={{ backgroundColor: "#C0C0C0" }}
            type="tel"
            name="contact"
            value={contact}
            onChange={OnChangeContact}
            placeholder="Contact No:XXXX-XXXXXXX"
            pattern="[0-9]{4}-[0-9]{7}"
            required
          ></input>
          <br></br>
          <input
            id="address"
            className="mx-6 px-3 my-3 h-9 w-[90%]  rounded-md focus:opacity-70 transition ease-out duration-500 focus:shadow-lg focus:shadow-white"
            style={{ backgroundColor: "#C0C0C0" }}
            type="text"
            name="address"
            value={address}
            onChange={OnChangeAddress}
            placeholder="Address"
            required
          ></input>
          <br></br>
          <input
            className="mx-6 my-6 h-9 w-[90%] rounded-md focus:opacity-70 transition ease-linear duration-500 focus:shadow-lg focus:shadow-white"
            style={{ backgroundColor: "#00B2FF" }}
            type="submit"
            value="Confirm"
          ></input>
          <button
            className="mx-6  h-9 w-[90%] rounded-md focus:opacity-70 transition ease-linear duration-500 focus:shadow-lg focus:shadow-white"
            style={{ backgroundColor: "#00B2FF" }}
            onClick={(e)=>{
              e.preventDefault();
              navigate(-1)}}
          >
            Cancel
          </button>
        </form>
      </div>
    );
}
export default CheckOut;