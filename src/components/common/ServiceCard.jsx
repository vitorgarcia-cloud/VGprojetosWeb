import React from 'react';
import './ServiceCard.css';

export default function ServiceCard({ service, onSelect, onViewExample }) {
  const handleViewExampleClick = (e) => {
    e.stopPropagation();
    if (onViewExample) {
      onViewExample(service.id);
    }
  };

  return (
    <div className="service-card" onClick={() => onSelect && onSelect(service)}>
      <div
        className="service-card-bg"
        style={{ backgroundImage: `url(${service.image})` }}
      >
        <div className="service-card-overlay" />
      </div>

      {/* Conteúdo do Card */}
      <div className="service-card-content">
        <span className="service-category">{service.category}</span>
        <h3 className="service-title">{service.title}</h3>

        {/* Descrição e botões de ação */}
        <div className="service-desc-wrapper">
          <p className="service-description">{service.description}</p>

          <div className="service-card-actions">
            <button
              type="button"
              className="btn-card-example"
              onClick={handleViewExampleClick}
              title={`Ver estudo de caso e exemplo prático de ${service.title}`}
            >
              Ver Exemplo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
