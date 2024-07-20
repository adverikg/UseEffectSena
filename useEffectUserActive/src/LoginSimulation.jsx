import React, { useState, useEffect } from 'react';
import './LoginSimulation.css';

const Users = [
  { id: 1, username: 'user1', password: 'pass1' },
  { id: 2, username: 'user2', password: 'pass2' },
  { id: 3, username: 'user3', password: 'pass3' },
  { id: 4, username: 'user4', password: 'pass4' },
  { id: 5, username: 'user5', password: 'pass5' },
  { id: 6, username: 'user6', password: 'pass6' },
  { id: 7, username: 'user7', password: 'pass7' },
  { id: 8, username: 'user8', password: 'pass8' },
  { id: 9, username: 'user9', password: 'pass9' },
  { id: 10, username: 'user10', password: 'pass10' }
];

const LoginSimulation = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    if (loggedInUser) {
      setMessage(`Bienvenido ${loggedInUser.username}`);
    }
  }, [loggedInUser]);

  const handleLogin = (e) => {
    e.preventDefault();

    const user = Users.find(user => user.username === username && user.password === password);
    if (user) {
      setLoggedInUser(user);
    } else {
      setMessage('Nombre de usuario o contraseña inválidos.');
    }
  };

  const handleLogout = () => {
    setLoggedInUser(null);
    setMessage('');
    setUsername('');
    setPassword('');
  };

  return (
    <div className="login-container">
      <h2>{loggedInUser ? `Bienvenido ${loggedInUser.username}` : 'Bienvenido Usuario anónimo'}</h2>
      {loggedInUser ? (
        <div>
          <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
      ) : (
        <form onSubmit={handleLogin}>
          <div>
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Iniciar sesión</button>
          <p>{message}</p>
        </form>
      )}
    </div>
  );
};

export default LoginSimulation;
