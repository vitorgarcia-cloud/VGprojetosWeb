import { useState } from 'react';
import './Navbar.css';

export default function Navbar({ activePage, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (pageId, e) => {
    e.preventDefault();
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { id: 'inicio', label: 'INÍCIO' },
    { id: 'servicos', label: 'SERVIÇOS' },
    { id: 'contato', label: 'CONTATOS' },
  ];

  return (
    <header className="navbar-header">
      <div className="container navbar-container">
        {/* Logo / Placeholder */}
        <a
          href="#inicio"
          className="navbar-logo"
          onClick={(e) => handleNavClick('inicio', e)}
          title="VG Projetos - Página Inicial"
        >
          <div className="logo-placeholder">
            <img src="/vgLogo.png" alt="VG Projetos Logo" width={35} height={35} />

            <div className="logo-text">
              <span className="brand-name">VG</span>
              <span className="brand-sub">PROJETOS</span>
            </div>
          </div>
        </a>

        {/* Menu Desktop */}
        <nav className="navbar-nav">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.id} className="nav-item">
                <button
                  type="button"
                  className={`nav-link ${activePage === item.id ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(item.id, e)}
                >
                  {item.label}
                  {activePage === item.id && <span className="active-indicator" />}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Botão CTA Rápido Navbar */}
        <div className="navbar-action">
          <button
            type="button"
            className="btn btn-secondary btn-nav-cta"
            onClick={(e) => handleNavClick('contato', e)}
          >
            Orçamento
          </button>
        </div>

        {/* Botão Mobile Toggle */}
        <button
          type="button"
          className={`mobile-toggle ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Abrir Menu"
        >
          <span className="toggle-bar"></span>
          <span className="toggle-bar"></span>
          <span className="toggle-bar"></span>
        </button>
      </div>

      {/* Menu Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <ul className="mobile-nav-list">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  className={`mobile-nav-link ${activePage === item.id ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(item.id, e)}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li className="mobile-cta-item">
              <button
                type="button"
                className="btn btn-primary"
                onClick={(e) => handleNavClick('contato', e)}
              >
                Faça seu Orçamento
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
