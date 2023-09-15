import {Link} from 'react-router-dom'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Navlink = (props) => {
  const navigate=useNavigate()
    const [category, setCategory] = useState(props.category);
    const [navi, setNavi] = useState("opacity-0 top-[-500px] transition all ease-in duration-100");
    const foc=()=>{
        props.navi(navi);
        if (
          props.category === "Monitors" ||
          props.category === "Laptops" ||
          props.category === "Keyboards" ||
          props.category === "Mouses" ||
          props.category === "HDD"
        ) {
          setCategory(props.category);
          // console.log(category + "in navlink");
          props.click(props.category);
          navigate(props.link)
        }
        else{
          navigate(props.link)
        }
      }

    
    
  return (
    <li
      className="mx-4 my-6 laptop::my-0"
    >
      <p className="text-xl  text-white hover:text-black cursor-pointer" onClick={foc}>
        {props.category}
      </p>
    </li>
  );
};
export default Navlink;
