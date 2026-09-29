import { useEffect, useState } from 'react';
import { clientsProjectsData } from '../data/clientProjectsData';
import { ClientLogo } from '../components/common/ClientsCarousel';
import './ClientProjects.css';

// Componente de Imagem Técnica (Antes / Depois)
function ProjectImagePlaceholder({ type, imageInfo }) {
  const isBefore = type === 'before';
  const imageUrl = imageInfo?.url || imageInfo?.image;

  return (
    <div className={`project-image-card ${isBefore ? 'image-before' : 'image-after'}`}>
      <div className="image-card-header">
        <span className={`image-tag ${isBefore ? 'tag-before' : 'tag-after'}`}>
          {isBefore ? 'ANTES' : 'DEPOIS'}
        </span>
        <span className="cad-blueprint-indicator">CAD IMG REF# </span>
      </div>

      <div className="image-placeholder-canvas">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={imageInfo.title || (isBefore ? 'Antes' : 'Depois')}
            className="project-real-image"
          />
        ) : (
          <>
            <div className="blueprint-grid" />

            {/* Gráfico / Ícone técnico simulando arquivo CAD quando não há imagem */}
            <div className="placeholder-visual">
              {isBefore ? (
                <svg viewBox="0 0 120 120" className="cad-icon-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="25" y="25" width="70" height="70" stroke="#f87171" strokeWidth="1.5" strokeDasharray="4 4" />
                  <path d="M25 25L95 95M95 25L25 95" stroke="#f87171" strokeWidth="1.2" strokeOpacity="0.5" />
                  <circle cx="60" cy="60" r="18" stroke="#f87171" strokeWidth="1.5" />
                  <text x="60" y="112" textAnchor="middle" fill="#f87171" fontSize="9" fontFamily="monospace">INTERFERÊNCIA / ERRO</text>
                </svg>
              ) : (
                <svg viewBox="0 0 120 120" className="cad-icon-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="60,20 95,40 95,80 60,100 25,80 25,40" stroke="#4ade80" strokeWidth="1.8" fill="rgba(74, 222, 128, 0.08)" />
                  <line x1="60" y1="20" x2="60" y2="100" stroke="#4ade80" strokeWidth="1.2" strokeDasharray="3 2" />
                  <line x1="25" y1="40" x2="95" y2="80" stroke="#4ade80" strokeWidth="1" strokeOpacity="0.4" />
                  <circle cx="60" cy="60" r="12" fill="none" stroke="#ffffff" strokeWidth="1.4" />
                  <text x="60" y="115" textAnchor="middle" fill="#4ade80" fontSize="9" fontFamily="monospace">MODELO APROVADO ISO</text>
                </svg>
              )}
            </div>

            <div className="image-placeholder-info">
              <span className="image-placeholder-label">Espaço para Imagem / Print 3D</span>
              <span className="image-placeholder-dims">(Substituir com arquivo de imagem)</span>
            </div>
          </>
        )}
      </div>

      <div className="image-card-caption">
        <h5 className="image-caption-title">{imageInfo?.title}</h5>
        <p className="image-caption-desc">{imageInfo?.description}</p>
      </div>
    </div>
  );
}

export default function ClientProjects({ onNavigate, targetServiceId, targetClientId }) {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [highlightedId, setHighlightedId] = useState(null);

  // Efeito para rolar automaticamente até o serviço ou cliente alvo quando passado via navegação
  useEffect(() => {
    let timer;
    if (targetServiceId) {
      timer = setTimeout(() => {
        const element = document.getElementById(`service-type-${targetServiceId}`);
        if (element) {
          setHighlightedId(`service-type-${targetServiceId}`);
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    } else if (targetClientId) {
      timer = setTimeout(() => {
        const element = document.getElementById(`client-${targetClientId}`);
        if (element) {
          setHighlightedId(`client-${targetClientId}`);
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [targetServiceId, targetClientId]);

  const filteredClients = selectedFilter === 'all'
    ? clientsProjectsData
    : clientsProjectsData.filter((c) => c.id === selectedFilter);

  return (
    <div className="client-projects-page fade-in">
      {/* Hero da Página de Projetos */}
      <section className="client-projects-hero">
        <div className="container">

          <div className="projects-hero-main">
            <h1 className="projects-page-title">
              Projetos Realizados & Metodologia Técnica
            </h1>
            <br />
            <p className="projects-page-lead">
              Conheça os desafios reais enfrentados por nossos clientes e como a metodologia
              estruturada da <strong>VG PROJETOS</strong> (Problema &rarr; Solução Técnica &rarr; Resultado)
              garante precisão geométrica, conformidade normativa e zero retrabalho.
            </p>
            <br />
          </div>

          {/* Barra de Filtro Rápido por Cliente - Apenas Ícones */}
          <div className="clients-filter-bar">
            <span className="filter-label">Filtrar por Cliente:</span>
            <div className="filter-chips">
              <button
                type="button"
                className={`filter-chip-all ${selectedFilter === 'all' ? 'active' : ''}`}
                onClick={() => setSelectedFilter('all')}
              >
                Todos
              </button>
              {clientsProjectsData.map((client) => (
                <button
                  key={client.id}
                  type="button"
                  className={`filter-chip-icon-only ${selectedFilter === client.id ? 'active' : ''}`}
                  onClick={() => setSelectedFilter(client.id)}
                  title={`${client.name} (${client.segment})`}
                >
                  <ClientLogo iconType={client.logoIcon} logoUrl={client.logoUrl} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lista de Clientes e seus Serviços Prestados */}
      <section className="clients-projects-list-section">
        <div className="container">
          {filteredClients.map((client) => (
            <div
              key={client.id}
              id={`client-${client.id}`}
              className={`client-group-card ${highlightedId === `client-${client.id}` ? 'highlight-pulse' : ''}`}
            >
              {/* Cabeçalho do Cliente */}
              <div className="client-group-header">
                <div className="client-group-brand">
                  <div className="client-logo-box-30-card">
                    <ClientLogo iconType={client.logoIcon} logoUrl={client.logoUrl} />
                  </div>
                  <div className="client-group-info">
                    <h2 className="client-group-name">{client.name}</h2>
                    <p className="client-group-desc">{client.description}</p>
                    <div className="client-services-types-pills">
                      {client.projects.map((project) => (
                        <span key={project.id} className="service-type-pill">
                          {project.serviceTypeName}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <span className="badge client-segment-badge">{client.segment}</span>
              </div>

              {/* Serviços Prestados para este Cliente */}
              <div className="client-services-container">
                {client.projects.map((project, pIndex) => (
                  <article
                    key={project.id}
                    id={`service-type-${project.serviceTypeId}`}
                    className={`service-case-study ${highlightedId === `service-type-${project.serviceTypeId}` ? 'highlight-pulse' : ''}`}
                  >
                    {/* Header do Estudo de Caso */}
                    <div className="case-study-header">
                      <div className="case-study-title-area">
                        <span className="case-service-badge">
                          Serviço: {project.serviceTypeName}
                        </span>
                        <h3 className="case-project-title">
                          {pIndex + 1}. {project.title}
                        </h3>
                      </div>
                    </div>

                    {/* Grade de Metodologia: Problema, Solução Técnica, Resultado (Sem Emojis) */}
                    <div className="methodology-grid">
                      {/* Coluna 1: Problema */}
                      <div className="methodology-card card-problem">
                        <div className="methodology-card-header">
                          <span className="methodology-step">01. O Problema</span>
                        </div>
                        <h4 className="methodology-title">Desafio Inicial</h4>
                        <p className="methodology-text">{project.problem}</p>
                      </div>

                      {/* Coluna 2: Minha Solução Técnica */}
                      <div className="methodology-card card-solution">
                        <div className="methodology-card-header">
                          <span className="methodology-step">02. Solução Técnica</span>
                        </div>
                        <h4 className="methodology-title">Engenharia Aplicada</h4>
                        <p className="methodology-text">{project.technicalSolution}</p>
                      </div>

                      {/* Coluna 3: Resultado */}
                      <div className="methodology-card card-result">
                        <div className="methodology-card-header">
                          <span className="methodology-step">03. O Resultado</span>
                        </div>
                        <h4 className="methodology-title">Impacto e Eficiência</h4>
                        <p className="methodology-text">{project.result}</p>
                      </div>
                    </div>

                    {/* Comparativo Visual: 2 Imagens (Antes e Depois) */}
                    <div className="case-study-images-section">
                      <div className="case-images-header">
                        <h4>Evidência Visual - (Antes e Depois)</h4>
                      </div>

                      <div className="before-after-grid">
                        <ProjectImagePlaceholder
                          type="before"
                          imageInfo={project.images.before}
                        />
                        <ProjectImagePlaceholder
                          type="after"
                          imageInfo={project.images.after}
                        />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="client-projects-cta">
        <div className="container">
          <div className="projects-cta-box">
            <div>
              <h2>Quer implementar essa mesma precisão no seu projeto?</h2>
              <p>Envie sua demanda técnica ou peça com necessidade de modelagem/detalhamento.</p>
            </div>
            <div className="projects-cta-actions">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => onNavigate('servicos')}
              >
                Explorar Todos os Serviços
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => onNavigate('contato')}
              >
                Solicitar Orçamento Agora
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
