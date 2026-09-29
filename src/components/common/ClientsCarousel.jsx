import { clientsProjectsData } from '../../data/clientProjectsData';
import './ClientsCarousel.css';

// Componente de Logotipo do Cliente (suporta imagem ou ícone SVG)
export function ClientLogo({ iconType, logoUrl, className = '' }) {
  const isImageFile = (src) => typeof src === 'string' && (src.includes('/') || src.endsWith('.jpg') || src.endsWith('.png') || src.endsWith('.jpeg') || src.endsWith('.svg') || src.endsWith('.webp'));
  const imageSource = logoUrl || (isImageFile(iconType) ? (iconType.startsWith('/') ? iconType : `/${iconType}`) : null);

  if (imageSource) {
    return (
      <div className={`client-logo-badge-30 ${className}`} style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: 0 }}>
        <img
          src={imageSource}
          alt="Logo Cliente"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>
    );
  }

  const renderIcon = () => {
    switch (iconType) {
      case 'nei-ultrassom':
      case 'nei':
        return (
          <svg viewBox="0 0 30 30" width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="15" cy="15" r="13" stroke="#e0e6ed" strokeWidth="1.5" strokeDasharray="3 2" />
            <circle cx="15" cy="15" r="6" fill="#ffffff" fillOpacity="0.15" stroke="#ffffff" strokeWidth="1.5" />
            <path d="M15 4V8M15 22V26M4 15H8M22 15H26" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
            <circle cx="15" cy="15" r="2.5" fill="#ffffff" />
          </svg>
        );
      case 'beam-structure':
        return (
          <svg viewBox="0 0 30 30" width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="5" width="20" height="4" rx="1" fill="#ffffff" />
            <rect x="5" y="21" width="20" height="4" rx="1" fill="#ffffff" />
            <rect x="13" y="9" width="4" height="12" fill="#8e9297" />
            <path d="M7 9L23 21M7 21L23 9" stroke="#d1d5db" strokeWidth="1.2" strokeOpacity="0.7" />
          </svg>
        );
      case 'precision-dial':
        return (
          <svg viewBox="0 0 30 30" width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="15" cy="15" r="12" stroke="#ffffff" strokeWidth="1.6" />
            <circle cx="15" cy="15" r="8" stroke="#8e9297" strokeWidth="1" strokeDasharray="2 2" />
            <path d="M15 3V6M15 24V27M3 15H6M24 15H27" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M15 15L20 10" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
            <circle cx="15" cy="15" r="2" fill="#ffffff" />
          </svg>
        );
      case 'robot-arm':
        return (
          <svg viewBox="0 0 30 30" width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 24H24M9 24L11 16L19 11L21 6" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="11" cy="16" r="2.5" fill="#13161c" stroke="#ffffff" strokeWidth="1.4" />
            <circle cx="19" cy="11" r="2.2" fill="#13161c" stroke="#ffffff" strokeWidth="1.4" />
            <path d="M20 4L24 7M23 4L19 7" stroke="#d1d5db" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        );
      case 'fluid-valve':
      default:
        return (
          <svg viewBox="0 0 30 30" width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 9L15 15L5 21V9Z" fill="#ffffff" fillOpacity="0.85" stroke="#ffffff" strokeWidth="1.2" />
            <path d="M25 9L15 15L25 21V9Z" fill="#8e9297" fillOpacity="0.85" stroke="#ffffff" strokeWidth="1.2" />
            <circle cx="15" cy="15" r="3" fill="#0b0c10" stroke="#ffffff" strokeWidth="1.4" />
            <path d="M15 5V12M11 5H19" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        );
    }
  };

  return (
    <div className={`client-logo-badge-30 ${className}`} style={{ width: '30px', height: '30px', minWidth: '30px', minHeight: '30px' }}>
      {renderIcon()}
    </div>
  );
}

export default function ClientsCarousel({ onNavigate }) {
  // Duplicamos a lista de clientes para criar o efeito contínuo infinito do carrossel
  const duplicatedClients = [...clientsProjectsData, ...clientsProjectsData, ...clientsProjectsData];

  const handleClientClick = (clientId) => {
    if (onNavigate) {
      onNavigate('projetos-clientes', { targetClientId: clientId });
    }
  };

  return (
    <div className="clients-carousel-section">
      <div className="clients-carousel-header">
        <div className="clients-header-left">
          
          <h3 className="clients-carousel-title">Empresas & Clientes Atendidos</h3>
          <p className="clients-carousel-subtitle">
            Veja os projetos, metodologia técnica aplicada e resultados entregues para cada cliente.
          </p>
        </div>
      </div>

      {/* Faixa / Track do Carrossel de Logos 30x30 */}
      <div className="clients-marquee-container">
        <div className="clients-marquee-track">
          {duplicatedClients.map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              className="client-carousel-item-only-logo"
              onClick={() => handleClientClick(client.id)}
              title={`Ver projetos executados para ${client.name}`}
              role="button"
              tabIndex={0}
            >
              <div className="client-logo-box-30">
                <ClientLogo iconType={client.logoIcon} logoUrl={client.logoUrl} />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="clients-carousel-footer-note">
        <span>Clique no logo de qualquer cliente para ver os detalhes técnicos, fotos Antes/Depois e resultados obtidos.</span>
      </div>
    </div>
  );
}
