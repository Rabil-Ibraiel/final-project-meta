import "./Navbar.css";
import Logo from "../../images/Logo.svg";
import Menu from "../../images/icons_assets/hamburger_icon.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [display, setDisplay] = useState(true);

  function handleClick() {
    document.getElementById("menu").style.display = display ? "flex" : "none";
    setDisplay((prev) => {
      return prev ? false : true;
    });
  }

  return (
    <nav>
      <Link to={"/"}><img className="nav-img" src={Logo} alt="Logo" /></Link>
      <ul id="menu" className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Menu</a>
        </li>
        <li>
          <a href="#">Reservations</a>
        </li>
        <li>
          <a href="#">Order Online</a>
        </li>
        <li>
          <a href="#">Login</a>
        </li>
      </ul>
      <img onClick={handleClick} src={Menu} className="nav-disable" />
    </nav>
  );
};

export default Navbar;
