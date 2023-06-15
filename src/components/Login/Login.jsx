import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/svgs/logo.svg';
import './style.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className='login-continer'>
      <div className='flex'>
        <img className='logoImage' alt='Logo' src={logo} />
        <h1>Your Net Worth</h1>
        <p className='paragraph'>
          Welcome to Your Net Worth, the ultimate platform for tracking and
          calculating your expenses and incomes. Gain control over your
          financial health with our intuitive tools and user-friendly interface.
          Make informed decisions and embark on your journey to financial
          success. Start managing your net worth today!
        </p>
      </div>
      <form className='login-form' onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className='form-group'>
          <label htmlFor='username'>Username:</label>
          <input
            type='text'
            id='username'
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type='submit'>Submit</button>
        <div className='centerAndPadding'>
          <Link to='/SignUp'>Sign Up here!</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
