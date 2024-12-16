import { useState } from 'react';
import { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from '../firebase'; // Sørg for at have firebase opsat
import { useNavigate } from 'react-router-dom';
import '/src/css/Login.css';

function LoginPage() {
  console.log("LoginPage rendered");
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Vis login formular
  const handleLoginClick = () => {
    console.log("Login clicked");
    setShowLogin(true);
    setShowSignUp(false);
  };

  // Vis opret bruger formular
  const handleSignUpClick = () => {
    setShowSignUp(true);
    setShowLogin(false);
  };

  // Håndter login
  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('Logged in as:', userCredential.user.email);
        navigate('/forside'); // Naviger til dashboardet efter login
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        
        // Håndter specifikke fejlkoder
        if (errorCode === 'auth/wrong-password') {
          setError('Forkert adgangskode. Prøv igen.');
        } else if (errorCode === 'auth/user-not-found') {
          setError('Bruger ikke fundet med denne email.');
        } else {
          setError(errorMessage);
        }

        console.error('Login error:', errorMessage);
      });
  };

  // Håndter opret bruger
  const handleSignUp = (e) => {
    e.preventDefault();
  
    if (password !== confirmPassword) {
      setError('Adgangskoderne stemmer ikke overens.');
      return;
    }
  
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('User created:', userCredential.user.email);
        navigate('/forside'); // Naviger til forsiden efter oprettelse af bruger
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
  
        if (errorCode === 'auth/weak-password') {
          setError('Adgangskoden skal være mindst 6 tegn lang.');
        } else if (errorCode === 'auth/email-already-in-use') {
          setError('Email er allerede i brug.');
        } else {
          setError(errorMessage);
        }
  
        console.error('Sign up error:', errorMessage);
      });
  };

  return (
    <div className="page-container">
      <div className="logo">
        <img src="img/pause-logo.png" alt="Logo" />
      </div>

      {/* Vis knapper for at vælge login eller opret bruger */}
      {!showLogin && !showSignUp && (
        <div className="button-container">
          <button onClick={handleLoginClick} className="login-btn">Log ind</button>
          <button onClick={handleSignUpClick} className="signup-btn">Opret bruger</button>
        </div>
      )}

      {/* Vis login formular */}
      {showLogin && (
        <div className="form-container">
          <h2>Log ind</h2>
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                placeholder="Indtast din email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">Adgangskode:</label>
              <input
                type="password"
                id="password"
                placeholder="Indtast din adgangskode"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="login-btn">Log ind</button>
            {error && <p className="error-message">{error}</p>}
          </form>
        </div>
      )}

      {/* Vis opret bruger formular */}
      {showSignUp && (
        <div className="form-container">
          <h2>Opret bruger</h2>
          <form onSubmit={handleSignUp}>
            <div className="input-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                placeholder="Indtast din email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">Adgangskode:</label>
              <input
                type="password"
                id="password"
                placeholder="Indtast din adgangskode"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="confirm-password">Bekræft adgangskode:</label>
              <input
                type="password"
                id="confirm-password"
                placeholder="Bekræft din adgangskode"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="signup-btn">Opret bruger</button>
            {error && <p className="error-message">{error}</p>}
          </form>
        </div>
      )}
    </div>
  );
}

export default LoginPage;
