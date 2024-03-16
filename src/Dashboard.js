import React from 'react';
import { useUser } from './UserContext'; // Importar el hook useUser

function Dashboard() {
  const { user, logout } = useUser(); // Obtén el usuario y la función logout del contexto

  // Función para cerrar sesión
  const handleLogout = () => {
    // Simplemente limpiamos el usuario y el token del contexto
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