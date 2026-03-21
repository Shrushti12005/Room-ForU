import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");


  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password) {
      alert("Login Successful!");
      navigate("/");
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div style={styles.container}>
      
      {/* Overlay for blur */}
      <div style={styles.overlay}></div>

      <form onSubmit={handleLogin} style={styles.form}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Welcome Back 
        </h2>

        <input
          type="name"
          placeholder="Name"
          style={styles.input}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
         <input
          type="phone"
          placeholder="Phone"
          style={styles.input}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          style={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          style={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
       
        
        <button type="submit" style={styles.button}>
          Login
        </button>

        <p style={{ marginTop: "10px", textAlign: "center" }}>
          Don't have an account?{" "}
          <Link to="/sighnup" style={{ color: "#0d5c4d" }}>
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    backgroundImage:
      "url('https://img.pikbest.com/backgrounds/20210729/book-room-hotel-stay-at-cartoon-girl-front-desk-tour-world-orange-green-blue-plant_6071587.jpg!w700wp')", // 🔥 hotel/room image
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backdropFilter: "blur(8px)", // 🔥 blur effect
    backgroundColor: "rgba(0,0,0,0.3)"
  },

  form: {
    position: "relative",
    background: "rgba(255,255,255,0.15)", // 🔥 glass effect
    padding: "30px",
    borderRadius: "15px",
    width: "320px",
    backdropFilter: "blur(10px)",
    boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
    color: "white"
  },

  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "none",
    outline: "none"
  },

  button: {
    width: "100%",
    padding: "10px",
    background: "#0d5c4d",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px"
  }
};

export default Login;
