import React from 'react';
import './ServiceCard.css';

export default function ServiceCard({ service, onSelect }) {
  return (
    <div className="service-card" onClick={() => onSelect && onSelect(service)}>
      {}
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
        
        {/* Descrição que surge suavemente ao passar o mouse */}
        <div className="service-desc-wrapper">
          <p className="service-description">{service.description}</p>
          <span className="service-action-hint">Solicitar orçamento &rarr;</span>
        </div>
      </div>
    </div>
  );
}
