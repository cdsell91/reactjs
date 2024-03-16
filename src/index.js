import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { UserProvider } from './UserContext'; // Import conxtext provider UserProvider

ReactDOM.render(
  <UserProvider> {/* Wrap app with UserProvider */}
    <App />
  </UserProvider>,
  document.getElementById('root')
);
