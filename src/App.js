import React from 'react';
import Login from './Login';
import Dashboard from './Dashboard';
import { useUser } from './UserContext'; 

import './App.css';

function App() {
  const { user } = useUser();

  if (user) {
    return <Dashboard />;
  }

  return (
    <div className="App">
      <h1>Mi Aplicación React</h1>
      <Login />
    </div>
  );
}

export default App;
