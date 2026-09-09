import React, { useState } from 'react';
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

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Criação de link mailto com dados codificados para envio direto
    const subject = encodeURIComponent(`[Orçamento] ${formData.servico} - ${formData.nome}`);
    const body = encodeURIComponent(
      `Olá VG Projetos,\n\nGostaria de solicitar um orçamento para:\n` +
      `Serviço: ${formData.servico}\n` +
      `Nome: ${formData.nome}\n` +
      `E-mail: ${formData.email}\n` +
      `Telefone/WhatsApp: ${formData.telefone}\n\n` +
      `Detalhes do Projeto:\n${formData.detalhes}\n`
    );

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // Abre o cliente de e-mail padrão com a mensagem pronta
      window.location.href = `mailto:${companyData.email}?subject=${subject}&body=${body}`;
    }, 600);
  };

  return (
    <div className="contact-form-container">
      {submitted ? (
        <div className="form-success-card fade-in">
          <div className="success-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" stroke="#52c41a" />
              <path d="M8 12l3 3 5-5" stroke="#52c41a" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h3>Solicitação Preparada!</h3>
          <p>
            Abrimos o seu aplicativo de e-mail para enviar a mensagem diretamente para <strong>{companyData.email}</strong>.
          </p>
          <button 
            type="button" 
            className="btn btn-secondary"
            onClick={() => setSubmitted(false)}
          >
            Enviar Nova Mensagem
          </button>
        </div>
      ) : (
        <form className="budget-form" onSubmit={handleSubmit}>
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
                placeholder="(00) 00000-0000"
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
            disabled={loading}
          >
            {loading ? 'Preparando...' : 'Enviar Solicitação de Orçamento'}
          </button>
        </form>
      )}
    </div>
  );
}
