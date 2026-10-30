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
        {/* Logo */}
        <a
          href="#inicio"
          className="navbar-logo"
          onClick={(e) => handleNavClick('inicio', e)}
          title="VG Projetos - Página Inicial"
        >
          <div className="logo-placeholder">
            <div className="logo-img-box">
              <img src="/vgLogo.png" alt="VG Projetos Logo" width={34} height={34} />
            </div>

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
                  className={`nav-link ${activePage === item.id ? `active active-${item.id}` : ''}`}
                  onClick={(e) => handleNavClick(item.id, e)}
                >
                  {item.label}
                  {activePage === item.id && <span className={`active-indicator indicator-${item.id}`} />}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Ações da Navbar: CTA Orçamento */}
        <div className="navbar-action">
          <button
            type="button"
            className="btn btn-secondary btn-nav-cta"
            onClick={(e) => handleNavClick('contato', e)}
          >
            Orçamento
          </button>
        </div>

        {/* Botão Mobile Hamburger */}
        <div className="mobile-controls">
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
      </div>

      {/* Menu Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <ul className="mobile-nav-list">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  className={`mobile-nav-link ${activePage === item.id ? `active active-${item.id}` : ''}`}
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
