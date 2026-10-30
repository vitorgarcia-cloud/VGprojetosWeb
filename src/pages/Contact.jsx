import { companyData } from '../data/companyData';
import ContactForm from '../components/contact/ContactForm';
import './Contact.css';

export default function Contact() {
  const handleScrollDown = () => {
    const nextSection = document.querySelector('.contact-content-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="contact-page fade-in">
      <section className="contact-hero">
        <div className="container contact-hero-container">
          <div className="contact-hero-content">
            <h1 className="contact-title">Solicite seu Orçamento Técnico</h1>
            <p className="contact-subtitle">
              Preencha os dados do seu projeto ou entre em contato direto pelos nossos canais corporativos. Retornamos com análise preliminar em até 24h.
            </p>
          </div>

          {/* Seta para baixo estilizada em SVG na posição dos botões */}
          <div className="contact-hero-arrow-wrapper">
            <button
              type="button"
              className="scroll-down-arrow-btn"
              onClick={handleScrollDown}
              aria-label="Rolar para formulário de contato"
              title="Rolar para formulário de contato"
            >
              <svg width="22" height="18" viewBox="0 0 24 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.5 4.8C2.5 4.8 1.9 6 2.5 6.9L10.8 17.5C11.3 18.2 12.7 18.2 13.2 17.5L21.5 6.9C22.1 6 21.5 4.8 20.5 4.8H3.5Z" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <section className="contact-content-section">
        <div className="container contact-grid-layout">
          {/* Coluna Esquerda: Informações e Etapas */}
          <div className="contact-info-panel">
            <div className="contact-cards-stack">
              <div className="info-card">
                <div className="info-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <h4>E-mail Comercial</h4>
                  <a href={`mailto:${companyData.email}`} className="info-card-link">
                    {companyData.email}
                  </a>
                  <span className="info-card-sub">Envio de arquivos e memoriais</span>
                </div>
              </div>

              <div className="info-card">
                <div className="info-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <h4>Telefone & WhatsApp</h4>
                  <p className="info-card-link">{companyData.phone}</p>
                  <span className="info-card-sub">{companyData.workingHours}</span>
                </div>
              </div>

              <div className="info-card">
                <div className="info-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h4>Localização & Atendimento</h4>
                  <p className="info-card-link">{companyData.location}</p>
                  <span className="info-card-sub">Atendimento 100% online em nível nacional</span>
                </div>
              </div>
            </div>

            {/* Fluxo de Atendimento */}
            <div className="workflow-box">
              <h4>Como Funciona o Orçamento</h4>
              <ol className="workflow-steps">
                <li>
                  <strong>1. Envio da Demanda:</strong> Você nos detalha sua necessidade, formatos desejados e prazos.
                </li>
                <li>
                  <strong>2. Avaliação de Viabilidade:</strong> Analisamos a complexidade geométrica e normas aplicáveis.
                </li>
                <li>
                  <strong>3. Proposta & Início:</strong> Apresentamos cronograma claro e orçamento sem surpresas.
                </li>
              </ol>
            </div>
          </div>

          {/* Coluna Direita: Formulário */}
          <div className="contact-form-panel">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
