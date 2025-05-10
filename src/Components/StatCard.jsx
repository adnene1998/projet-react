import React from 'react';

const StatCard = ({ color, icon, title, value }) => (
  <div className="col-md-4 mb-4">
    <div className={`card bg-${color} text-white`}>
      <div className="card-body">
        <h5 className="card-title" style={{ fontSize: '1.5rem' }}>
          <i className={`fas fa-${icon}`}></i> {title}
        </h5>
        <p className="card-text" style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
          {value}
        </p>
      </div>
    </div>
  </div>
);

export default StatCard;
