import "./style.css";

export default function Navbar() {
  return (
    <div id="nav-container">
      <hr id="line-nav"/>
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
        <button className="dropbtn">Menu</button>
        <div className="dropdown-content">
          <a href="#">Home</a>
          <a href="#">Sobre</a>
          <a href="#">Eventos</a>
          <a href="#">Contato</a>
        </div>
      </div>
      <hr id="line-nav"/>
    </div>
  );
}
