import logo from "../assets/TRAVILGUIDE-LOGO-2424.png";
import { auth } from "./firebase"; // Importez l'authentification Firebase
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddGuideInfo from "./AddGuideInfo";
import Footer from "./Footer";











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

  clickableText: {
    marginTop: "10px",
    fontSize: "14px",
    color: "#336B87",
    textDecoration: "none",
    cursor: "pointer",
    justifyContent: "center",

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

  logo: {
    width: "100px",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "10px",
    marginBottom: "10px",
    fontSize: "14px",
    backgroundColor: "#FFFFFF",
    border: "1px solid #336B87",
    borderRadius: "4px",
    color: "#336B87",
  },
  button: {
    padding: "10px 20px",
    textDecoration: "none",
    backgroundColor: "#336B87",
    border: "none",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "4px",
    fontSize: "16px",
    color: "#FFFFFF",
    cursor: "pointer",
  },
  Link : {
    padding: "10px 20px",
    backgroundColor: "#336B87",
    alignItems:'center',
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
    color: "#FFFFFF",
    cursor: "pointer", 
   },
};

const SignIn = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Tentative de connexion avec:", { email, password }); // Message de débogage
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Connexion réussie");
      alert('Connexion réussie');
      <Route path="/AddGuideInfo" element={<AddGuideInfo />} />
      
    } catch (error) {
      console.error("Erreur lors de la connexion :", error);
    }
  };


  return (
   
    <>
   
   <div style={styles.logoT}>
      <img src={logo} alt=""  style={styles.logoT}/>
        TRAVELOGUIDE
    </div>
    
    

    <div style={styles.container}>

   { /*  <img
        style={styles.logo}
        src={picSI} // Remplacez l'URL par l'URL de votre logo
        alt="Logo"
  /> */}

      <h2>SIGN IN</h2>
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
        <Link to="/AddGuideInfo" onClick={handleSubmit} style={styles.button}>
          Sign In
        </Link>

        <Link to="/SignUp" style={styles.clickableText}>
          Already have an account?
        </Link>

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
    <div style={styles.logoTe}>
      <img src={''} alt=""  style={styles.logoT}/>
        TRAVELOGUIDE

    </div>
    
    <Footer/>

    </>
  );
};

export default SignIn;
