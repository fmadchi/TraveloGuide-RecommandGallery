import React, { useState } from "react";
import { db } from "./firebase";
import logo from "../assets/TRAVILGUIDE-LOGO-2424.png";

const styles = {
  logoT: {
    gap: '0.4rem',
    fontSize: '1.2rem',
    textDecoration: 'uppercase',  
    fontWeight: '900',   
   },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    minHeight: "100vh",
    backgroundColor: '#FFFFFF',
  },
  form: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "500px",
    margin: "0 auto",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#76CCCF",
    color: "#FFFFFF",
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
    backgroundColor: "#336B87",
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
    color: "#FFFFFF",
    cursor: "pointer",
  },
  label: {
    fontWeight: "bold",
  },
};

const AddGuideInfo = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [language, setLanguage] = useState("");
  const [nationality, setNationality] = useState("");
  const [religion, setReligion] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await db.collection("guides").add({
        name,
        email,
        address,
        language,
        nationality,
        religion,
        description,
      });
      alert("Les informations du guide ont été ajoutées avec succès !");
      setName("");
      setEmail("");
      setAddress("");
      setLanguage("");
      setNationality("");
      setReligion("");
      setDescription("");
    } catch (error) {
      console.error("Erreur lors de l'ajout des informations du guide:", error);
    }
  };

  return (
    <>
    <div style={styles.logoT}>
      <img src={logo} alt=""  style={styles.logoT}/>
        TRAVELOGUIDE
    </div>

    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>Nom :</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={styles.input}
        />
        <label style={styles.label}>Email :</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />
        <label style={styles.label}>Adresse :</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
          style={styles.input}
        />
        <label style={styles.label}>Langue :</label>
        <input
          type="text"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          required
          style={styles.input}
        />
        <label style={styles.label}>Nationalité :</label>
        <input
          type="text"
          value={nationality}
          onChange={(e) => setNationality(e.target.value)}
          required
          style={styles.input}
        />
        <label style={styles.label}>Religion :</label>
        <input
          type="text"
          value={religion}
          onChange={(e) => setReligion(e.target.value)}
          required
          style={styles.input}
        />
        <label style={styles.label}>Description :</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Save
        </button>
</form>
</div>
</>
);
};

export default AddGuideInfo;
