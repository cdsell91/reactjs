import React from 'react';
import { useUser } from './UserContext';
import { Navbar, Container, Button } from 'react-bootstrap'
import './DynamicTable';

function Toolbar() {
  const { user, logout } = useUser();

  const handleLogout = () => {
    logout();
  };

  return (
      <Navbar bg="light" expand="lg">
        <Container>
          <h2>Welcome {user.username}!</h2>
          <Button variant="danger" onClick={handleLogout}>Logout</Button>  
        </Container>
      </Navbar>
  );
}

export default Toolbar;