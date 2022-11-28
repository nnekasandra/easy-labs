import "../index.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
const Header = () => {
  const btnRef = useRef();
  function cancel(){
    btnRef.classList.add('clickbtn');
  }
  return (
    <header className="header flex justify-between text-blue px-10 py-5 sticky top-0">
      <h1 className="uppercase text-2xl font-bold">
        <Link to="/"> EasyLabs </Link>
      </h1>
      <input type="checkbox" id="check" className="hidden" />
      <label for="check" class="checkbtn">
        <FontAwesomeIcon icon={faBars} className="hidden nav-btn" />
      </label>
      <nav className="flex gap-16" id="nav" ref={btnRef}>
        <ul className="flex gap-10">
          <li className="active">
            <Link to="/">Home</Link>
          </li>
          <li id="about-link">
            <a href="#about">About</a>
          </li>
          <li id="contact-link">
            <a href="#contact">Contact</a>
          </li>
          <div className="btn" onClick={() => cancel()}>
            <button
              className="border rounded-full p-4 hover:p-5 text-white bg-main-blue hover:bg-blue font-bold text-xl h-10 flex items-center justify-center cta"
            >
              <Link to="/get-started">Get Started Now</Link>
            </button>
          </div>
        </ul>
      </nav>
    </header>
  );
};
export default Header;