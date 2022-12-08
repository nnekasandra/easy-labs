import "../index.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import LoginButton from "./LoginButton";
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
      <label htmlFor="check" className="checkbtn">
        <FontAwesomeIcon icon={faBars} className="hidden nav-btn" />
      </label>
      <nav className="flex gap-16" id="nav" ref={btnRef}>
        <ul className="flex gap-10">
          <li className="active">
            <Link to="/">Home</Link>
          </li>
          <li id="about-link">
            <a href="http://127.0.0.1:3000/#about">About</a>
          </li>
          <li id="contact-link">
            <a href="http://127.0.0.1:3000/#contact">Contact</a>
          </li>
          <div className="btn" onClick={() => cancel()}>
            <div className="border rounded-full p-4 hover:p-5 text-white bg-main-blue hover:bg-blue font-bold text-xl h-10 flex items-center justify-center cta">
              <LoginButton name="Get Started"/>
            </div>
          </div>
        </ul>
      </nav>
    </header>
  );
};
export default Header;