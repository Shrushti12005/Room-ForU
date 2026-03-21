import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/login", {
        email,
        password
      });
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.data));

        toast.success("Login Successful");

        navigate("/"); 
      } else {
        toast.error(res.data.message || "Login failed");
      }

    } catch (err) {
      console.log(err);
      toast.error("Server error");
    }
  };

  return (
    <div style={styles.container}>
      
      <div style={styles.overlay}></div>

      <form onSubmit={handleLogin} style={styles.form}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Welcome Back
        </h2>

        <input
          type="email"
          placeholder="Email"
          style={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          style={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" style={styles.button}>
          Login
        </button>

        <p style={{ marginTop: "10px", textAlign: "center" }}>
          Don't have an account?{" "}
          <Link to="/signup" style={{ color: "#0d5c4d" }}>
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
      "url('https://img.pikbest.com/backgrounds/20210729/book-room-hotel-stay-at-cartoon-girl-front-desk-tour-world-orange-green-blue-plant_6071587.jpg!w700wp')",
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
    backdropFilter: "blur(8px)",
    backgroundColor: "rgba(0,0,0,0.3)"
  },

  form: {
    position: "relative",
    background: "rgba(255,255,255,0.15)",
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