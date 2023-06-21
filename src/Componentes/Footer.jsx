import { Link} from "react-router-dom";
import {BiCameraMovie} from "react-icons/bi";
import {FaStar} from "react-icons/fa"

import './Footer.css';


const Footer = () => {
  return (
    <footer id='footer'>
      <h3>
      <Link to="/"><BiCameraMovie /> CineTerror</Link>
      
      </h3>
      <FaStar className="star"></FaStar>
      <p>Dev:Racine Fellipe</p>
      
     
      
    </footer>
  )
}

export default Footer
