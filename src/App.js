import './index.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from '@fortawesome/free-solid-svg-icons'
function App() {
  return (
    <div className="App">
      <header className="header flex justify-between text-blue px-10 py-10">
        <h1 className="uppercase text-2xl font-bold">EasyLabs</h1>
        <input type="checkbox" id="check" className="hidden" />
        <label for="check" class="checkbtn">
          <FontAwesomeIcon icon={faBars} className="hidden nav-btn" />
        </label>
        <nav className="flex gap-16">
          <ul className="flex gap-10">
            <li>
              <a href="#home" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="">
                Contact
              </a>
            </li>
            <div className="btn">
              <button className="border rounded-full p-4 hover:p-5 text-white bg-main-blue hover:bg-blue font-bold text-xl h-10 flex items-center justify-center cta">
                Get Started
              </button>
            </div>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
