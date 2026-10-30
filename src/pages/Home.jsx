import { companyData } from '../data/companyData';
import { servicesData } from '../data/servicesData';
import ServiceCard from '../components/common/ServiceCard';
import './Home.css';

export default function Home({ onNavigate }) {
  const featuredServices = servicesData.slice(0, 4);

  return (
    <div className="home-page fade-in">
      {/* Banner Principal / Hero */}
      <section className="hero-banner">
        <div className="container hero-container">

          {/* Topo do Hero: Título e Descrição */}
          <div className="hero-top-content">
            <h1 className="hero-title">
              Modelagem 3D e Detalhamento Técnico para Projetos
            </h1>

            <p className="hero-description">
              {companyData.shortDescription} Transformamos ideias em soluções reais!
            </p>
          </div>

          {/* Base do Hero: Botões de Ação na parte inferior */}
          <div className="hero-cta-group">
            <button
              type="button"
              className="btn btn-primary btn-hero-lg"
              onClick={() => onNavigate('contato')}
            >
              Faça seu Orçamento
            </button>
            <button
              type="button"
              className="btn btn-secondary btn-hero-lg"
              onClick={() => onNavigate('servicos')}
            >
              Saiba Mais
            </button>
          </div>

        </div>
      </section>

      {/* Seção Prévia de Serviços */}
      <section className="home-services-preview">
        <div className="container">
          <div className="section-header-row">
            <div>
              <h2 className="section-title">Especialidades Técnicas</h2>
            </div>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => onNavigate('servicos')}
            >
              Ver Todos os Serviços &rarr;
            </button>
          </div>

          <div className="services-grid-4">
            {featuredServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onSelect={() => onNavigate('contato')}
                onViewExample={(serviceId) => onNavigate('projetos-clientes', { targetServiceId: serviceId })}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Gradiente Interligando a Prévia de Serviços e a CTA */}

      {/* Banner de Chamada para Ação Intermediário */}
      <section className="home-cta-section">
        <div className="container">
          <div className="cta-box">
            <div className="cta-box-text">
              <h2>Precisa de um projeto executivo com rigor dimensional?</h2>
              <p>Envie suas especificações técnicas e receba uma proposta detalhada para seu projeto.</p>
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => onNavigate('contato')}
            >
              Solicitar Proposta Agora
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
