import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';

export default function App() {
  const [activePage, setActivePage] = useState('inicio');

  const handleNavigate = (page) => {
    setActivePage(page);
  };

  const renderActivePage = () => {
    switch (activePage) {
      case 'servicos':
        return <Services onNavigate={handleNavigate} />;
      case 'contato':
        return <Contact />;
      case 'inicio':
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="app-wrapper">
      {/* Barra de Navegação Padrão */}
      <Navbar activePage={activePage} onNavigate={handleNavigate} />

      {/* Conteúdo Dinâmico da Página */}
      <main className="main-content">
        {renderActivePage()}
      </main>

      {/* Rodapé Padrão */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
