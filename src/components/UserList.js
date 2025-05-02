import React from 'react';
import '../styles/UserList.css';

const UserList = ({ users, onUserClick }) => {
  return (
    <div className="user-list">
      {users.length === 0 ? (
        <p className="no-users">Nenhum usuário encontrado</p>
      ) : (
        <div className="user-cards">
          {users.map((user) => (
            <div key={user.id} className="user-card" onClick={() => onUserClick(user.id)}>
              <h3 className="user-name">{user.name}</h3>
              <p className="user-email">
                <i className="fas fa-envelope"></i> {user.email}
              </p>
              <p className="user-phone">
                <i className="fas fa-phone"></i> {user.phone}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserList;