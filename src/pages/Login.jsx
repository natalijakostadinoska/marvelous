import './Login.scss';
import { useNavigate } from 'react-router-dom';
import spiderman from '../assets/spiderman.png';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulate login
    navigate('/home');
  };

  return (
    <div className="login-page">
      <div className="left">
        <img src={spiderman} alt="Spiderman" />
      </div>
      <div className="right">
        <h2>Sign in to <span>M</span>arvelous</h2>

        <div className="input-group">
          <label htmlFor="email">Login, email or phone number</label>
          <input id="email" type="text"/>
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input id="password" type="password"/>
        </div>
        <button onClick={handleLogin}>Log In</button>
      </div>
    </div>
  );
}