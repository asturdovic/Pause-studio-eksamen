import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase"; // Sørg for at importere auth korrekt
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // Forhindrer formens standard opførsel (som reloader siden)
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/Forside"); // Når login er succesfuldt, naviger til Forside
    } catch (error) {
      setErrorMessage("Fejl ved login: " + error.message);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault(); // Forhindrer formens standard opførsel
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/Onboarding"); // Når oprettelse er succesfuld, naviger til Onboarding
    } catch (error) {
      setErrorMessage("Fejl ved oprettelse: " + error.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button> {/* Denne knap trigger handleLogin */}
      </form>
      <button onClick={handleSignUp}>Opret bruger</button> {/* Denne knap trigger handleSignUp */}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}

export default Login;
