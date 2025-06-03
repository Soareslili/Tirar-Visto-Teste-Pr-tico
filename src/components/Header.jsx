import { useState } from "react";
import Logo from '../assets/logo.png';
import './header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Fecha o menu ao clicar em um link
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className='header'>
      <img src={Logo} alt='logo' className='logo' />
      <button
        className="menu-btn"
        onClick={() => setMenuOpen(open => !open)}
        aria-label="Abrir menu"
      >
        <span className="menu-icon">&#9776;</span>
      </button>
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <a href='#Home' onClick={handleLinkClick}>Home</a>
        <a href='#QuemSomos' onClick={handleLinkClick}>Quem Somos</a>
        <a href='#Servico' onClick={handleLinkClick}>Serviços</a>
        <a href='#Contato' onClick={handleLinkClick}>Contato</a>
      </nav>
    </header>
  );
}