import React from 'react';
import '../styles/UserDetail.css';

const UserDetail = ({ user, onClose }) => {
  if (!user) return null;

  return (
    <div className="user-detail-overlay">
      <div className="user-detail-modal">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>{user.name}</h2>
        <div className="user-info">
          <div className="info-group">
            <h3>Contato</h3>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Telefone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>
          </div>
          
          <div className="info-group">
            <h3>Endereço</h3>
            <p>{user.address.street}, {user.address.suite}</p>
            <p>{user.address.city}, {user.address.zipcode}</p>
          </div>
          
          <div className="info-group">
            <h3>Empresa</h3>
            <p><strong>Nome:</strong> {user.company.name}</p>
            <p><strong>Slogan:</strong> {user.company.catchPhrase}</p>
            <p><strong>Segmento:</strong> {user.company.bs}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;