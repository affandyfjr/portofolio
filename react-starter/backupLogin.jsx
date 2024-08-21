import React, { useState } from "react";
import "./logincss.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan validasi username dan password
    if (username === "admin@gmail.com" || password === "password") {
      setError("Username dan password tidak boleh kosong");
    } else {
      // Lakukan proses login
      //Contoh: kirim request ke API untuk melakukan login
      // fetch('/api/login', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ username, password }),
      // })
      // .then((res) => res.json())
      // .then((data) => {
      //   if (data.success) {
      //     // Login berhasil, redirect ke halaman utama
      //     window.location.href = '#skill';
      // } else {
      //   setError('Username atau password salah');
    }
    //   }
    //   .catch((err) => setError('Error: ' + err.message));
    // }
  };

  return (
    <div className="login-container" id="login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Masukkan username"
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Masukkan password"
        />
        <br />
        <button type="submit">Login</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
}

export default Login;
