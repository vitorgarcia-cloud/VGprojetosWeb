import React from 'react';
import { companyData } from '../../data/companyData';
import './Footer.css';

export default function Footer({ onNavigate }) {
  const handleNavClick = (pageId, e) => {
    e.preventDefault();
    onNavigate(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer>
      {/* Linha de Copyright */}
      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p>© {new Date().getFullYear()} {companyData.name}. Todos os direitos reservados.</p>
          <p className="footer-bottom-tag">Engenharia, Modelagem 3D & Detalhamento</p>
        </div>
      </div>
    </footer>
  );
}
