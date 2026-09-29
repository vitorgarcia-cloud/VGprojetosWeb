import { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/common/WhatsAppButton';
import Home from './pages/Home';
import Services from './pages/Services';
import ClientProjects from './pages/ClientProjects';
import Contact from './pages/Contact';

export default function App() {
  const [activePage, setActivePage] = useState('inicio');
  const [navigationParams, setNavigationParams] = useState({});

  const handleNavigate = (page, params = {}) => {
    setActivePage(page);
    setNavigationParams(params || {});
  };

  const renderActivePage = () => {
    switch (activePage) {
      case 'servicos':
        return <Services onNavigate={handleNavigate} />;
      case 'projetos-clientes':
        return (
          <ClientProjects
            onNavigate={handleNavigate}
            targetServiceId={navigationParams.targetServiceId}
            targetClientId={navigationParams.targetClientId}
          />
        );
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

      {/* Botão Flutuante do WhatsApp (visível em todas as páginas, exceto na página dos clientes) */}
      {activePage !== 'projetos-clientes' && <WhatsAppButton />}

      {/* Rodapé Padrão */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
