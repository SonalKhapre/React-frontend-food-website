import React, { useState } from 'react';
import '../components/Login.css';
// import { input } from '@testing-library/user-event/dist/types/event';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormVisible, setFormVisible] = useState(true);

  const handleToggleForm = () => {
    setIsLogin(!isLogin);
    
  };
  const handleVisibility = () => {
    setFormVisible(false);
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    // We can add our login or sign-up logic here (e.g., API calls, authentication)
    console.log(`Email: ${email}, Password: ${password}`);}
  
   return (
    <div className="container">
    {isFormVisible && (
      <div className="glass-form">
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2><br/>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          /><br/>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /><br/>
          <button onClick={handleVisibility} type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
        </form>
        <p>
          {isLogin ? "Don't have an account?" : 'Already have an account?'}
          <button type="button" onClick={handleToggleForm}>
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </p>
      </div>
      )}
    </div>
  );
};

export default Login;