import React, { useState } from "react";
import logo from "../assets/TRAVILGUIDE-LOGO-2424.png";

import { Link } from "react-router-dom";
import { auth } from "./firebase"; // Importez l'authentification Firebase
import { createUserWithEmailAndPassword } from "firebase/auth";
import Footer  from "./Footer";

const styles = {
  logoT: {
    gap: '0.4rem',
    fontSize: '1.2rem',
    textDecoration: 'uppercase',  
    fontWeight: '900',   
   },
   logoTe: {
    gap: '0.4rem',
    fontSize: '1.2rem',
    color:'white',
    textDecoration: 'uppercase',  
    fontWeight: '900',   
   },

  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: '150px',
    maxWidth: "400px",
    marginLeft:"500px",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#f0f0f0",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "5px",
    marginBottom: "10px",
    fontSize: "14px",
    backgroundColor: "#FFFFFF",
    border: "1px solid #336B87",
    borderRadius: "4px",
    color: "#336B87",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#336B87",
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
    color: "#FFFFFF",
    cursor: "pointer",
  },
};

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      console.log("Tentative d'inscription avec:", { email, password }); // Message de débogage
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("Inscription réussie");
      alert('Inscription réussie');
    } catch (error) {
      console.error("Erreur lors de l'inscription :", error);
    }
  };

  return (
    <>
    <div style={styles.logoT}>
      <img src={logo} alt=""  style={styles.logoT}/>
        TRAVELOGUIDE
    </div>

    <div style={styles.container}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />
        <br />
        <label>Confirm Password:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          style={styles.input}
        />
        <br />
        <button type="submit" style={styles.button}>
          Sign Up
        </button>
      </form>
    </div>
    <div style={styles.logoTe}>
      <img src={''} alt=""  style={styles.logoT}/>
        TRAVELOGUIDE

    </div>
    <div style={styles.logoTe}>
      <img src={''} alt=""  style={styles.logoT}/>
        TRAVELOGUIDE

    </div>
    <div style={styles.logoTe}>
      <img src={''} alt=""  style={styles.logoT}/>
        TRAVELOGUIDE

    </div>
    
    
    <Footer/>
    </>

  );
};

export default SignUp;
