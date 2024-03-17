import React from 'react';
import { useUser } from './UserContext';

function Dashboard() {
  const { user, logout } = useUser();

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Bienvenido al panel de control de tu aplicación, {user.username}!</p>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
}

export default Dashboard;