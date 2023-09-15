import NavLink from './Navlink';
import Bar from '../Icons/Bars';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Navbar(props) {  
  const[category,setCategory]=useState("");
  const navigate = useNavigate();
  const [navi, setNavi] = useState("opacity-0 top-[-500px] transition all ease-in duration-100");
  const [logIn,setLogIn]=useState(props.login);
  const navig=(navi)=>{
    setNavi(navi);
  }
  function logout(e){
    setLogIn(false);
    props.onLogout(false);
  
    navigate("/")
  }
  function handleFocus(category) {
    setCategory(category);
    // console.log("in navbar"+category);
    props.onCategoryChange(category);
  }
  const login=()=>{
    if (props.login===true) {
      return (
        <li
          className="mx-4 my-6 laptop:my-6"
        onClick={logout} >
          <p className="text-xl  text-white hover:text-black cursor-pointer">
            Logout
          </p>
        </li>
      )
        
    }
    else{
     return (
       <>
         <NavLink
           key="7"
           category="SignUp"
           link="/SignUp"
           navi={navig}
         ></NavLink>
         <NavLink key="8" category="Login" link="/Login" navi={navig}></NavLink>
       </>
     );
    }
  }
    const navs = [
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
        category: "HDD",
        link: "/HDD",
      },
      {
        id: "4",
        category: "Keyboards",
        link: "/Keyboards",
      },
      {
        id: "5",
        category: "Mouses",
        link: "/Mouses",
      },
    ];
    
    return (
      <div
        className="fixed w-full z-10
      "
      >
        <nav
          className="p-5 laptop:flex laptop:items-center laptop:justify-between"
          style={{ backgroundColor: "#00B2FF" }}
        >
          <div className="basis-1/3 ">
            <span className="text-3xl font-[Poppins] text-white">
              <img className="h-12 rounded-xl" src="/images/TechZone.png"></img>
              TechZone
            </span>
            <span
              className="float-right laptop:hidden"
              onClick={() => {
                if (
                  navi ===
                  "opacity-0 top-[-500px] transition all ease-in duration-100"
                ) {
                  setNavi("");
                } else if (navi === "") {
                  setNavi(
                    "opacity-0 top-[-500px] transition all ease-in duration-100"
                  );
                }
              }}
            >
              <Bar></Bar>
            </span>
          </div>

          <ul
            className={
              "laptop:flex latop:items-center laptop:static absolute w-full left-0 laptop:w-auto laptop:py-0 py-4 laptop:md:pl-0 pl-7 laptop:opacity-100  " +
              navi
            }
            style={{ backgroundColor: "#00B2FF" }}
          >
            <NavLink key="0" category="Home" link="/" navi={navig}></NavLink>
            {navs.map((nav) => (
              <NavLink
                key={nav.id}
                category={nav.category}
                link={nav.link}
                click={handleFocus}
                navi={navig}
              ></NavLink>
            ))}
            <NavLink
              key="6"
              category="About"
              link="/About"
              navi={navig}
            ></NavLink>
            <NavLink
              key="6"
              category="Orders"
              link="/AllOrders"
              navi={navig}
            ></NavLink>
            {login()}
          </ul>
        </nav>
      </div>
    );
}
export default Navbar;
 