import "../index.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
    return (
      <header className="header flex justify-between text-blue px-10 py-5 sticky top-0">
        <h1 className="uppercase text-2xl font-bold">EasyLabs</h1>
        <input type="checkbox" id="check" className="hidden" />
        <label for="check" class="checkbtn">
          <FontAwesomeIcon icon={faBars} className="hidden nav-btn" />
        </label>
        <nav className="flex gap-16">
          <ul className="flex gap-10">
            <li>
              <Link to="/" className="active">
                Home
              </Link>
            </li>
            <li id="about-link">
              <a href="#about" className="">
                About
              </a>
            </li>
            <li id="contact-link">
              <a href="#contact" className="">
                Contact
              </a>
            </li>
            <div className="btn">
              <button className="border rounded-full p-4 hover:p-5 text-white bg-main-blue hover:bg-blue font-bold text-xl h-10 flex items-center justify-center cta">
                <Link to="/get-started">Get Started Now</Link>
              </button>
            </div>
          </ul>
        </nav>
      </header>
    );
}
export default Header;