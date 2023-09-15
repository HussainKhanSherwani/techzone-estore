import { useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NotFound from '../Errors/NotFound';
import SignUp from './Signup';



const Login=(props)=>{
  const [success,setSuccess]=useState(false);
  const [user_name,setUsername] = useState("");
  const [userId,setUserId] = useState("");
  const [Password,setPassword] = useState("");
  // const [incorrectPass,setIncorectPass]=useState(" text-sm invisible text-red-500");
  // const [noUser,setNoUser] = useState(" text-sm invisible text-red-500");
  const [alreadyLoggedIn,setAlreadyLoggedIn] = useState("mx-6 text-md visible text-red-500");
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  function onChangeUsername(e) {
    setUsername(e.target.value);
  }
  function onChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if(success===true || props.login===true){
      // console.log("already logged in");
      setAlreadyLoggedIn("mx-8 text-md visible text-red-500");
      setMessage("Already logeed in as " + user_name);
       setUsername("");
       setPassword("");
       setSuccess(true);
       props.onLogin(true);
    }
    else{
    const userObject = {
      username: user_name,
      password: Password,
    };
    // console.log(userObject);
      axios.post("http://localhost:4000/users/Login", userObject).then(res=>{
        setUsername("");
        setPassword("");
        setSuccess(true);
        setUserId(res.data.user_id)
        props.onLogin(true);
        props.alsoOnLogin(res.data.user_id);
        // console.log(userId)
        navigate("/");
      }
      ).catch(err=>{
        console.log(err.response.status);
        if(err.response.status===404){
        setAlreadyLoggedIn("mx-8 text-md visible text-red-500");
        setMessage(user_name+" user not found")
        // document.getElementById("username").focus();
        setUsername("");
        }
        else if (err.response.status === 403){ 
        setAlreadyLoggedIn("mx-8 text-md visible text-red-500");
        // document.getElementById("password").focus();
        setMessage("Incorrect Password") 
      }
        setPassword("")
      })
      
    } 
  }
    return (
      <div className="h-full w-full bg-blue-200">
        <form
          onSubmit={handleSubmit}
          className="absolute m-2 py-4 top-1/3 right-1/4 left-0 h-fit w-[95%]  rounded-xl md:w-1/2 md:left-1/4 bg-gray-100 border-2 border-black shadow-sky-400 shadow-xl"
        >
          <input
            id="username"
            className="mx-6 px-3 my-3 h-9 w-[90%]  rounded-md  focus:opacity-70 transition ease-out duration-500 focus:shadow-lg focus:shadow-white"
            style={{ backgroundColor: "#C0C0C0" }}
            type="text"
            name="username"
            value={user_name}
            onChange={onChangeUsername}
            placeholder="Username"
            onFocus={() => {
              setAlreadyLoggedIn(" text-lg invisible text-red-500");
              setMessage("");
            }}
          ></input>
          <br></br>
          <input
            id="password"
            className="mx-6 px-3 my-3 h-9 w-[90%]  rounded-md focus:opacity-70 transition ease-out duration-500 focus:shadow-lg focus:shadow-white"
            style={{ backgroundColor: "#C0C0C0" }}
            type="password"
            name="password"
            value={Password}
            onChange={onChangePassword}
            placeholder="Password"
            onFocus={() => {
              setAlreadyLoggedIn(" text-lg invisible text-red-500");
              setMessage("");
            }}
            required
          ></input>
          <p className={alreadyLoggedIn}>{message}</p>
          <input
            className="mx-6 my-6 h-9 w-[90%] rounded-md focus:opacity-70 transition ease-linear duration-500 focus:shadow-lg focus:shadow-white"
            style={{ backgroundColor: "#00B2FF" }}
            type="submit"
            value="Login"
          ></input>
          <button
            className="mx-6  h-9 w-[90%] rounded-md focus:opacity-70 transition ease-linear duration-500 focus:shadow-lg focus:shadow-white"
            style={{ backgroundColor: "#00B2FF" }}
            onClick={() => navigate("/SignUp")}
          >
            New Here?Go SignUp
          </button>
        </form>
      </div>
    );
}
export default Login;