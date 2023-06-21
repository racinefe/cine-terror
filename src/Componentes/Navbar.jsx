import { Link } from "react-router-dom";
import { BiCameraMovie } from "react-icons/bi";
import { FaStar } from "react-icons/fa";


import "./Navbar.css";

const Navbar = () => {
  
  return (
    <nav id="navbar">
      <h2>
        <Link to="/">
          <BiCameraMovie /> CineTerror <FaStar className="star"></FaStar> 
        </Link>
        
      </h2>
      
    </nav>
  );
};

export default Navbar;