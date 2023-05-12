import {Link} from 'react-router-dom'
const Navlink = (props) => {
  return (
    <li
      className="mx-4 my-6 laptop:my-0 laptop:z-auto laptop:static absolute b
      laptop:opacity-100 opacity-0 top-96 transition all ease-in duration-500"
    >
      <Link className="text-xl  text-white hover:text-black" to={props.link}>
        {props.category}
      </Link>
    </li>
  );
};
export default Navlink;
