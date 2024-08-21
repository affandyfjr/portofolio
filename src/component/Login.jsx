import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      const isAdmin = user.email === "berhasil@gmail.com";

      if (isAdmin) {
        navigate("/Admin");
      } else {
        navigate("/Login");
      }
    } catch (error) {
      console.error("anda belum daftar: ", error.message);
      alert("amail dan password salah");
    }
  };

  return (
    <div className="">
      <div className="">
        <h1 className="">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=""
              placeholder=""
              required
            />
            <label htmlFor="email" className="">
              Email
            </label>
          </div>
          <div className="">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className=""
              placeholder=""
              required
            />
            <label htmlFor="password" className="">
              Password
            </label>
          </div>
          <div>
            <div>
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me" className="">
                Remember Me
              </label>
            </div>
          </div>

          <button type="submit" className="">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default login;
