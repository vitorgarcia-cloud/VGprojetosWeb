import { useState } from 'react';
import { companyData } from '../../data/companyData';
import './ContactForm.css';

export default function ContactForm({ preselectedService }) {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    servico: preselectedService || 'Modelagem 3D Paramétrica',
    detalhes: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
    errorMessage: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: false, errorMessage: '' });

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${companyData.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `[VG Projetos] Novo Orçamento: ${formData.servico} - ${formData.nome}`,
          _template: 'table',
          _captcha: 'false',
          Nome: formData.nome,
          Email: formData.email,
          Telefone: formData.telefone,
          Servico_Desejado: formData.servico,
          Detalhes_do_Projeto: formData.detalhes
        })
      });

      if (response.ok) {
        setStatus({
          submitting: false,
          submitted: true,
          error: false,
          errorMessage: ''
        });
      } else {
        throw new Error('Falha no envio do formulário. Tente novamente ou use o WhatsApp.');
      }
    } catch (err) {
      console.error('Erro ao enviar formulário:', err);
      // Fallback gracioso: permitir envio direto pelo WhatsApp ou Mailto
      setStatus({
        submitting: false,
        submitted: false,
        error: true,
        errorMessage: 'Não foi possível conectar ao servidor no momento. Você pode falar conosco diretamente pelo WhatsApp ou reenviar.'
      });
    }
  };

  const getWhatsAppQuickLink = () => {
    const text = encodeURIComponent(
      `Olá VG Projetos!\n\n` +
      `Gostaria de solicitar um orçamento:\n` +
      `• Serviço: ${formData.servico}\n` +
      `• Nome: ${formData.nome}\n` +
      `• E-mail: ${formData.email}\n` +
      `• Telefone: ${formData.telefone}\n` +
      `• Detalhes: ${formData.detalhes || 'A combinar'}`
    );
    return `https://wa.me/5516988779241?text=${text}`;
  };

  return (
    <div className="contact-form-container">
      {status.submitted ? (
        <div className="form-success-card fade-in">
          <div className="success-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" stroke="#25D366" />
              <path d="M8 12l3 3 5-5" stroke="#25D366" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h3>Solicitação Enviada com Sucesso!</h3>
          <p>
            Seu pedido de orçamento foi encaminhado diretamente para <strong>{companyData.email}</strong>.
            Nossa equipe técnica entrará em contato em breve.
          </p>
          
          <div className="form-success-actions">
            <a
              href={getWhatsAppQuickLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp-success"
            >
              Agilizar pelo WhatsApp (+55 16 98877-9241)
            </a>

            <button 
              type="button" 
              className="btn btn-secondary"
              onClick={() => {
                setFormData({
                  nome: '',
                  email: '',
                  telefone: '',
                  servico: 'Modelagem 3D Paramétrica',
                  detalhes: ''
                });
                setStatus({ submitting: false, submitted: false, error: false, errorMessage: '' });
              }}
            >
              Enviar Outra Mensagem
            </button>
          </div>
        </div>
      ) : (
        <form className="budget-form" onSubmit={handleSubmit}>
          {status.error && (
            <div className="form-error-alert fade-in">
              <p>{status.errorMessage}</p>
              <div className="error-actions">
                <a
                  href={getWhatsAppQuickLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  Enviar via WhatsApp Agora
                </a>
              </div>
            </div>
          )}

          <div className="form-group">
            <label htmlFor="nome">Nome Completo / Empresa *</label>
            <input
              type="text"
              id="nome"
              name="nome"
              required
              placeholder="Ex: João Silva ou Metalúrgica ABC"
              value={formData.nome}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">E-mail Corporativo *</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="seu.email@empresa.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="telefone">Telefone / WhatsApp *</label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                required
                placeholder="(16) 98877-9241"
                value={formData.telefone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="servico">Tipo de Serviço de Interesse</label>
            <select
              id="servico"
              name="servico"
              value={formData.servico}
              onChange={handleChange}
            >
              <option value="Modelagem 3D Paramétrica">Modelagem 3D Paramétrica</option>
              <option value="Detalhamento Técnico 2D (Fabricação)">Detalhamento Técnico 2D (Fabricação)</option>
              <option value="Projetos Estruturais & Caldeiraria">Projetos Estruturais & Caldeiraria</option>
              <option value="Renderização Fotorrealista">Renderização Fotorrealista</option>
              <option value="Engenharia Reversa">Engenharia Reversa</option>
              <option value="Detalhamento para Usinagem CNC / Laser">Detalhamento para Usinagem CNC / Laser</option>
              <option value="Conversão & Compatibilização CAD">Conversão & Compatibilização CAD</option>
              <option value="Outro / Projeto Especial">Outro / Projeto Especial</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="detalhes">Descrição do Projeto & Prazos *</label>
            <textarea
              id="detalhes"
              name="detalhes"
              rows="4"
              required
              placeholder="Descreva brevemente sua necessidade, quantidade de peças, formatos necessários (STEP, DWG, SLDPRT) ou prazos..."
              value={formData.detalhes}
              onChange={handleChange}
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="btn btn-primary btn-submit-form"
            disabled={status.submitting}
          >
            {status.submitting ? 'Enviando Proposta...' : 'Enviar Solicitação de Orçamento'}
          </button>
        </form>
      )}
    </div>
  );
}
