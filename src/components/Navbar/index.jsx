import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import "./style.css";

export default function Navbar() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div id="nav-container">
      <hr id="line-nav" />
      <ul id="nav-list">
        <li className="nav-item">
          <a className="nav-link" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Sobre
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Eventos
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Contato
          </a>
        </li>
      </ul>
      <div className="dropdown" id="dropdown">
        <button className="dropbtn" onClick={toggleDropdown}>
          <RxHamburgerMenu className="hamburguerBtn" /> Menu
        </button>
        <div
          className={
            dropdownVisible ? "dropdown-content show" : "dropdown-content"
          }
        >
          <a href="#">Home</a>
          <a href="#">Sobre</a>
          <a href="#">Eventos</a>
          <a href="#">Contato</a>
        </div>
      </div>
      <hr id="line-nav" />
    </div>
  );
}
