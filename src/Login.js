import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useUser } from './UserContext'; 

function Login() {

    const { login } = useUser();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  

    const handleSubmit = async (event) => {
        event.preventDefault();

        const userData = {
            username: username,
            password: password
        };

        try {

            const response = await fetch('http://localhost:3001/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });
        

            if (response.ok) {
                const responseData = await response.json();
                login(responseData);
            }

        } catch (error) {
            console.error('Fail request:', error);
        }

        setUsername('');
        setPassword('');
    };

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <Container className="d-flex justify-content-center" 
                style={{ background: 'rgb(187 235 167 / 24%)', padding: '100px', borderRadius: '10px', width: '500px', height: '500px'}}>
                <Form className="mt-3" onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter username" value={username} 
                                onChange={(e) => setUsername(e.target.value)}/>
                            
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">                
                        <Form.Group as={Col} controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter password" value={password}
                                    onChange={(e) => setPassword(e.target.value)}/>
                        </Form.Group>
                    </Row>
                    <Button variant="primary" type="submit">Login</Button>    
                </Form>
            </Container>
        </div>
    );
}

export default Login;