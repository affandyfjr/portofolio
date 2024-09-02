import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

// const EMAIL_ADMIN = "berhasil@gmail.com";
// const PASSWORD_ADMIN = "123";
const Login = () => {
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
        // navigate("/Login");
      }
    } catch (error) {
      console.error("anda belum daftar: ", error.message);
      alert("amail dan password salah");
    }
  };

  return (
    <div className="App py-10">
      <div className="mx-[300px] text-black relative bg-gray-700/20 p-6 rounded-3xl flex flex-col">
        <h1 className="mb-8 text-3xl text-white text-center"><span>Login</span></h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-row justify-center">
          <div className=" justify-end flex flex-col mr-5 ">
            <label htmlFor="email" className="rounded py-[5px] my-5 text-white ">
              Email
            </label>
            <label htmlFor="password" className="rounded py-[5px] my-5 text-white">
              Password
            </label>
          </div>
        <div className="flex flex-col">
          <div className="">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded py-[5px] my-5"
              placeholder="emailAnda@gmail.com"
              required
            />
          </div>
          <div className="rounded py-[5px] my-5">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded pt-[5px]"
              placeholder="password"
              required
            />
          </div>
          </div>
          </div>

          <div className="">
            <div className="my-5">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me" className="text-white ">
                Remember Me
              </label>
            </div>
          </div>
         <div className="relative inline-flex group my-3 mt-5">
          <div className="absolute transition-all duration-1000 opacaty-70 -inset-px bg-gradient-to-r from-[#44BCFf] via-[#ff44ec] to-[#FF675e] rounded-xl blur-lg group-hover:opacity-100 
                    group-hover:-inset-1 group-hover:duration-200 animate-tilt">
          
          </div><button type="submit" className="w-[190px] h-[60px] relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg.primary-color font-pj rounded-xl
                     focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
             >
            Login
          </button>
          </div>
        </form>
     
      </div>
      <div className="my-2 border-collapse rounded-2xl bg-slate-400 w-[190px] h-[60px] items-center relative inline-flex justify-center">
        <button><Link to="/App">keluar</Link></button>
        </div>
    </div>
  );
};

export default Login;
