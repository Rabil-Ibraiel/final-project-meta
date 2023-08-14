import "./Footer.css";
import Logo from "../../images/Logo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <img className="footer-img" src={Logo} />
      <div className="footer-content">
        <div className="footer-sec-container">
          <h4 className="footer-sec-title">Doormat Navigation</h4>
          <ul className="footer-links">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Menu</a>
            </li>
            <li>
              <a href="">Reservations</a>
            </li>
            <li>
              <a href="">Order Online</a>
            </li>
            <li>
              <a href="">Login</a>
            </li>
          </ul>
        </div>
        <div className="footer-sec-container">
          <h4 className="footer-sec-title">Contact</h4>
          <ul className="footer-links">
            <li>
              <a href="">Adress</a>
            </li>
            <li>
              <a href="">phone number</a>
            </li>
            <li>
              <a href="">email</a>
            </li>
          </ul>
        </div>
        <div className="footer-sec-container">
          <h4 className="footer-sec-title">Social Media Links</h4>
          <ul className="footer-links">
            <li>
              <a href="">Adress</a>
            </li>
            <li>
              <a href="">phone number</a>
            </li>
            <li>
              <a href="">email</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
