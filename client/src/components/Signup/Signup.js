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
    <div className="h-full w-full " style={{ backgroundColor: "#333333" }}>
      <form
        className="absolute py-4 top-1/4 right-1/4 left-0 h-fit w-full  rounded-xl  md:w-1/2 md:left-1/4"
        style={{ backgroundColor: "#000044" }}
        onSubmit={handleSubmit}
      >
        <input
          className="mx-6 px-3 my-3 h-9 w-[90%] rounded-md  focus:opacity-70 transition ease-out duration-500 "
          style={{ backgroundColor: "#C0C0C0" }}
          type="text"
          name="fname"
          value={Fname}
          placeholder="Fullname"
          onChange={onChangeFname}
          required
        ></input>
        <br></br>
        <input
          className="mx-6 px-3 my-3 h-9 w-[90%] rounded-md  focus:opacity-70 transition ease-out duration-500 "
          style={{ backgroundColor: "#C0C0C0" }}
          type="text"
          name="username"
          placeholder="Username"
          value={user_name}
          onChange={onChangeUsername}
          required
        ></input>

        <br></br>
        <input
          className="mx-6 px-3 my-3 h-9 w-[90%]  rounded-md focus:opacity-70 transition ease-out duration-500 "
          style={{ backgroundColor: "#C0C0C0" }}
          type="email"
          name="email"
          value={Email}
          onChange={onChangeEmail}
          placeholder="Email"
          required
        ></input>

        <br></br>
        <input
          className="mx-6 px-3 my-3 h-9 w-[90%] rounded-md focus:opacity-70 transition ease-out duration-500 "
          style={{ backgroundColor: "#C0C0C0" }}
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
          className="mx-6 my-6 h-9 w-[90%] rounded-md focus:opacity-70 transition ease-linear duration-500"
          style={{ backgroundColor: "#00B2FF" }}
          type="submit"
          value="Sign Up"
        ></input>
        <br></br>
        <button
          className="mx-6  h-9 w-[90%] rounded-md focus:opacity-70 transition ease-linear duration-500"
          style={{ backgroundColor: "#00B2FF" }}
          onClick={() => navigate("/Login")}
        >
          Already have an Account?Login
        </button>
      </form>
    </div>
  );
};
export default SignUp;
