import "./Navbar.css"
import Logo from "../../images/Logo.svg"

const Navbar = () => {
  return (
    <nav>
      <img className="nav-img" src={Logo} />
      <ul className="nav-links">
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Menu</a></li>
        <li><a href="">Reservations</a></li>
        <li><a href="">Order Online</a></li>
        <li><a href="">Login</a></li>
      </ul>
    </nav>
  )
}

export default Navbar