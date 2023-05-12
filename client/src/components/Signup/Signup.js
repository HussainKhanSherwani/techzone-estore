import axios from "axios";
import {useState} from "react";
import bcrypt from "bcryptjs";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [Fname, setFname] = useState("");
  const [user_name, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const navigate=useNavigate();


 function onChangeFname(e){
    setFname(e.target.value);
  }

  function onChangeUsername(e) {
    setUsername(e.target.value);
  }

  function onChangeEmail(e) {
    setEmail(e.target.value);
  }
  function onChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
      const hashedPassword=bcrypt.hashSync(Password, 10);
    const userObject={
      username:user_name,
      password:hashedPassword,
      email:Email,
      fullname:Fname,
    };
    console.log(userObject);
    if (user_name) {
      
    }
    axios.post("http://localhost:4000/users/SignUp", userObject);

    setFname("");
    setEmail("")
    setUsername("");
    setPassword("");
    document.getElementById("signupbutton").disabled=true;
    navigate("/Login");
  }

  return (
    <div className="h-full w-full bg-gradient-to-t  from-cyan-500 to-blue-500 brightness-125">
      <form
        className="absolute py-4 top-1/4 right-1/4 left-0 h-fit w-full bg-gradient-to-t from-indigo-800 to-violet-800  rounded-xl  md:w-1/2 md:left-1/4 brightness-125"
        onSubmit={handleSubmit}
      >
        <input
          className="mx-6 px-3 my-3 h-9 w-[90%] rounded-md opacity-60 focus:opacity-70 transition ease-out duration-500 "
          type="text"
          name="fname"
          value={Fname}
          placeholder="Fullname"
          onChange={onChangeFname}
          required
        ></input>
        <br></br>
        <input
          className="mx-6 px-3 my-3 h-9 w-[90%] rounded-md opacity-60 focus:opacity-70 transition ease-out duration-500 "
          type="text"
          name="username"
          placeholder="Username"
          value={user_name}
          onChange={onChangeUsername}
          required
        ></input>

        <br></br>
        <input
          className="mx-6 px-3 my-3 h-9 w-[90%]  rounded-md opacity-60 focus:opacity-70 transition ease-out duration-500 "
          type="email"
          name="email"
          value={Email}
          onChange={onChangeEmail}
          placeholder="Email"
          required
        ></input>

        <br></br>
        <input
          className="mx-6 px-3 my-3 h-9 w-[90%] rounded-md opacity-60 focus:opacity-70 transition ease-out duration-500 "
          type="password"
          name="password"
          placeholder="Password"
          value={Password}
          onChange={onChangePassword}
          required
        ></input>
        <br></br>
        <input
          id="signupbutton"
          className="mx-6 my-6 h-9 w-[90%] rounded-md bg-blue-900 brightness-50 focus:bg-blue-950 transition ease-linear duration-500"
          type="submit"
          value="Sign Up"
        ></input>
        <br></br>
        <button
          className="mx-6  h-9 w-[90%] rounded-md bg-blue-900 brightness-50 focus:bg-blue-950 transition ease-linear duration-500" onClick={()=>navigate("/Login")}
        >
          Already have an Account?Login
        </button>
      </form>
    </div>
  );
};
export default SignUp;
