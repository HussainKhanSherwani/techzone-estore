import NavLink from './Navlink';
import Bar from '../Icons/Bars';
import SignUp from './../Signup/Signup';
import { useEffect, useState } from 'react';
import Navlink from './Navlink';
import Login from './../Signup/Login';
import { useNavigate } from 'react-router-dom';
function Navbar(props) {  
  const navigate = useNavigate();
  const [logIn,setLogIn]=useState(props.login);
  function logout(e){
    setLogIn(false);
    props.onLogout(false);
    navigate("/")
  }
  const login=()=>{
    if (props.login===true) {
      return (
        <li
          className="mx-4 my-6 laptop:my-0 laptop:z-auto laptop:static absolute b
      laptop:opacity-100 opacity-0 top-96 transition all ease-in duration-500"
        onClick={logout} >
          <p className="text-xl  text-white hover:text-black cursor-pointer">
            Logout
          </p>
        </li>
      );
      // return <NavLink key="7" category="Logout" onClick={logout}></NavLink>;
        
    }
    else{
     return(
       <>
          <NavLink key="7" category="SignUp" link="/SignUp"></NavLink>
          <NavLink key="8" category="Login" link="/Login"></NavLink>
        </>
     )
    }
  }
    const navs = [
      {
        id: "0",
        category: "Home",
        link: "/",
      },
      {
        id: "1",
        category: "Laptops",
        link: "/Laptops",
      },
      {
        id: "2",
        category: "Monitors",
        link: "/Monitors",
      },
      {
        id: "3",
        category: "HDD/SSD",
        link: "/HDD/SSD",
      },
      {
        id: "4",
        category: "Keyboards",
        link: "/Keyboards",
      },
      {
        id: "5",
        category: "Mouse",
        link: "/Mouse",
      },
      {
        id: "6",
        category: "About",
        link: "/About",
      },
    ];
    
    return (
      <div className="fixed w-full z-10
      ">
        <nav className="p-5 flex flex-col laptop:flex-row laptop:items-center laptop:justify-between bg-gradient-to-r from-gray-900 to-blue-900 brightness-150">
          <div className="basis-1/3 ">
            <span className="text-3xl font-[Poppins] text-blue-700">
              <img className="h-12" src="/images/TechZone.png"></img>
              TechZone
            </span >
            <span className='float-right laptop:hidden' onClick={()=>{}}>
              <Bar></Bar>
            </span>
          </div>

          <ul className="laptop:flex md:items-center">
            {
              navs.map(nav=><NavLink key={nav.id} category={nav.category} link={nav.link} ></NavLink>)
            }
            {login()}
          </ul>
        </nav>
      </div>
    );
}
export default Navbar;