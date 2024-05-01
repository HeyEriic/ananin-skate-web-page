import { SiInstagram, SiWhatsapp } from "react-icons/si";

import './style.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="social-section">
        <h3>Redes Sociais</h3>
        <ul className="social-links">
          <li><a href="#"><SiInstagram /> Instagram</a></li>
          <li><a href="#"><SiWhatsapp /> WhatsApp</a></li>
          {/* Adicione outras redes sociais conforme necessário */}
        </ul>
      </div>
      <div className="supporters-section">
        <h3>Apoiadores e Patrocinadores</h3>
        <ul className="supporter-list">
          <li>Nome do Apoiador/Patrocinador</li>
          <li>Nome do Apoiador/Patrocinador</li>
          {/* Adicione mais apoiadores/patrocinadores conforme necessário */}
        </ul>
      </div>
    </footer>
  );
}
