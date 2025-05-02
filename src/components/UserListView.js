import React from 'react';
import '../styles/UserListView.css';

const UserListView = ({ users, onUserClick }) => {
  return (
    <div className="user-table-container">
      {users.length === 0 ? (
        <p className="no-users">Nenhum usuário encontrado</p>
      ) : (
        <table className="user-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Telefone</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="user-row">
                <td className="user-name-cell">{user.name}</td>
                <td className="user-email-cell">
                  <i className="fas fa-envelope"></i> {user.email}
                </td>
                <td className="user-phone-cell">
                  <i className="fas fa-phone"></i> {user.phone}
                </td>
                <td className="user-actions-cell">
                  <button 
                    className="view-details-btn"
                    onClick={() => onUserClick(user.id)}
                  >
                    <i className="fas fa-eye"></i> Detalhes
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserListView;