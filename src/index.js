import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { UserProvider } from './UserContext'; // Importa el proveedor de contexto UserProvider

ReactDOM.render(
  <UserProvider> {/* Envuelve tu aplicación con UserProvider */}
    <App />
  </UserProvider>,
  document.getElementById('root')
);
