import { useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NotFound from '../Errors/NotFound';
import SignUp from './Signup';



const Login=(props)=>{
  const [success,setSuccess]=useState(false);
  const [user_name,setUsername] = useState("");
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
      console.log("already logged in");
      setAlreadyLoggedIn("mx-8 text-md visible text-red-500");
      setMessage("Already logeed in as " + user_name);
       setUsername("");
       setPassword("");
       setSuccess(true);
       props.onLogin(success);
    }
    else{
    const userObject = {
      username: user_name,
      password: Password,
    };
    console.log(userObject);
      axios.post("http://localhost:4000/users/Login", userObject).then(res=>{
        setUsername("");
        setPassword("");
        setSuccess(true);
        props.onLogin(true);
        navigate(-1);
      }
      ).catch(err=>{
        console.log(err.response.status);
        if(err.response.status===404){
        setAlreadyLoggedIn("mx-8 text-md visible text-red-500");
        setMessage(user_name+" user not found")
        document.getElementById("username").focus();
        setUsername("");
        }
        else if (err.response.status === 403){ 
        setAlreadyLoggedIn("mx-8 text-md visible text-red-500");
        document.getElementById("password").focus();
        setMessage("Incorrect Password") 
      }
        setPassword("")
      })
      
    } 
  }
    return (
      <div className="h-full w-full bg-gradient-to-t  from-cyan-500 to-blue-500 brightness-125">
        <form
          onSubmit={handleSubmit}
          className="absolute py-4 top-1/3 right-1/4 left-0 h-fit w-full bg-gradient-to-t from-indigo-800 to-violet-800 brightness-125 rounded-xl md:w-1/2 md:left-1/4 "
        >
          <input
            id="username"
            className="mx-6 px-3 my-3 h-9 w-[90%]  rounded-md opacity-60 focus:opacity-70 transition ease-out duration-500 "
            type="text"
            name="username"
            value={user_name}
            onChange={onChangeUsername}
            placeholder="Username"
            onFocus={() =>{
              setAlreadyLoggedIn(" text-lg invisible text-red-500");setMessage(""); }
            }
          ></input>
          <br></br>
          <input
            id="password"
            className="mx-6 px-3 my-3 h-9 w-[90%]  rounded-md opacity-60 focus:opacity-70 transition ease-out duration-500 "
            type="password"
            name="password"
            value={Password}
            onChange={onChangePassword}
            placeholder="Password"
            onFocus={() =>{
            setAlreadyLoggedIn(" text-lg invisible text-red-500");setMessage(""); }}
            required
          ></input>
          <p className={alreadyLoggedIn}>{message}</p>
          <input
            className="mx-6 my-6 h-9 w-[90%] rounded-md bg-blue-800 brightness-50 focus:bg-blue-950 transition ease-linear duration-500"
            type="submit"
            value="Login"
          ></input>
          <button
            className="mx-6  h-9 w-[90%] rounded-md bg-blue-900 brightness-50 focus:bg-blue-950 transition ease-linear duration-500"
            onClick={() => navigate("/SignUp")}
          >
            New Here?Go SignUp
          </button>
        </form>
      </div>
    );
}
export default Login;