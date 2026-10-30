import { companyData } from '../data/companyData';
import { servicesData } from '../data/servicesData';
import ServiceCard from '../components/common/ServiceCard';
import ClientsCarousel from '../components/common/ClientsCarousel';
import './Services.css';

export default function Services({ onNavigate }) {
  return (
    <div className="services-page fade-in">
      {/* Topo / Apresentação Institucional da Empresa */}
      <section className="services-hero">
        <div className="container services-hero-container">
          <div className="services-hero-top">
            <h1 className="services-page-title">
              Nossos Serviços Especializados
            </h1>
            <p className="services-company-description">
              {companyData.aboutDescription}
            </p>
          </div>

          <div className="services-pillars-row">
            <div className="pillar-item pillar-item-blue">
              <span className="pillar-num">01</span>
              <div className="pillar-text">
                <h4>Modelagem Paramétrica</h4>
                <p>Modelos 3D precisos e estruturados para edição rápida.</p>
              </div>
            </div>
            <div className="pillar-item pillar-item-red">
              <span className="pillar-num">02</span>
              <div className="pillar-text">
                <h4>Rigor Normativo</h4>
                <p>Desenhos 2D e tolerâncias conforme normas ABNT / ISO.</p>
              </div>
            </div>
            <div className="pillar-item pillar-item-green">
              <span className="pillar-num">03</span>
              <div className="pillar-text">
                <h4>Zero Retrabalho</h4>
                <p>Compatibilização prévia para montagem sem falhas.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid de 4 cards por linha */}
      <section className="services-grid-section">
        <div className="container">
          <div className="grid-section-header">
            <div>
              <span className="badge">Catálogo Completo</span>
              <h2>Soluções Técnicas Sob Demanda</h2>
            </div>
            <p className="grid-hint">
              Passe o mouse sobre os cards para visualizar detalhes do serviço ou clique em "Ver Exemplo" para ir ao caso prático.
            </p>
          </div>

          <div className="services-grid-4-container">
            {servicesData.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onSelect={() => onNavigate('contato')}
                onViewExample={(serviceId) => onNavigate('projetos-clientes', { targetServiceId: serviceId })}
              />
            ))}
          </div>

          {/* Carrossel de Clientes e Exemplos Práticos */}
          <div className="clients-examples">
            <ClientsCarousel onNavigate={onNavigate} />
          </div>

    
        </div>
      </section>
    </div>
  );
}
