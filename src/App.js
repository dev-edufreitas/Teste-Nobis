import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import UserList from './components/UserList';
import UserListView from './components/UserListView';
import UserDetail from './components/UserDetail';
import ViewToggle from './components/ViewToggle';
import { fetchUsers, fetchUserById } from './services/api';
import './styles/App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [viewMode, setViewMode] = useState('cards'); // 'cards' ou 'list'

  useEffect(() => {
    const getUsers = async () => {
      try {
        setLoading(true);
        const data = await fetchUsers();
        setUsers(data);
        setFilteredUsers(data);
      } catch (err) {
        setError('Falha ao carregar usuários. Por favor, tente novamente mais tarde.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  useEffect(() => {
    const results = users.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(results);
  }, [searchTerm, users]);

  const handleUserClick = async (userId) => {
    try {
      const userData = await fetchUserById(userId);
      setSelectedUser(userData);
    } catch (err) {
      console.error('Erro ao buscar detalhes do usuário:', err);
    }
  };

  const handleCloseDetail = () => {
    setSelectedUser(null);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Diretório de Usuários</h1>
      </header>
      
      <main className="app-content">
        <div className="card">
          <div className="top-controls">
            <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            <ViewToggle viewMode={viewMode} onViewModeChange={setViewMode} />
          </div>
          
          {loading ? (
            <div className="loading">Carregando usuários...</div>
          ) : error ? (
            <div className="error">{error}</div>
          ) : (
            viewMode === 'cards' ? (
              <UserList users={filteredUsers} onUserClick={handleUserClick} />
            ) : (
              <UserListView users={filteredUsers} onUserClick={handleUserClick} />
            )
          )}
        </div>
        
        {selectedUser && (
          <UserDetail user={selectedUser} onClose={handleCloseDetail} />
        )}
      </main>
      
      <footer className="app-footer">
        <p>Diretório de Usuários - Aplicação React - Teste Nobis - &copy; 2025</p>
      </footer>
    </div>
  );
}

export default App;