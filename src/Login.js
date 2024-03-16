import React, { useState } from 'react';
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

        //setUsername('');
        //setPassword('');
    };

    return (
        <div>
        <h2>Iniciar sesión</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Nombre de usuario:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="password">Contraseña:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                </div>
            <button type="submit">Iniciar sesión</button>
        </form>
        </div>
    );
}

export default Login;