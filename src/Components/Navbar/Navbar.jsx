import "./Navbar.scss"
// import dtce from "../../assets/dtce.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="app__navbar">
        <h3 className="logo-text">CourseMatch</h3>
        <ul className="app__navbar-nav">
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/recommend"}>Recommendations</Link></li>
        </ul>
      </div>
    </>
  )
}

export default Navbar;