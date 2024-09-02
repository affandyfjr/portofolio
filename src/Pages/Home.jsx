import React, { useContext } from "react";
import profilefajar from "../assets/profilefajar.png";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../component/AuthProvider";
import { auth } from "../firebase";


const Home = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleKlik = () => {
    navigate("/Login");
  };
  
  const handleLogOut = () => {
    auth.signOut();
    navigate("/App");
  };
  return (
    <div id="home">
      <div className="my-7 sm:my-0 max-w-[1200px] h-[80vh] mx-auto flex flex-col-reverse sm:flex-row justify-center align-center">
        <div className=" flex-col my-auto mx-auto">
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
            <TypeAnimation
              sequence={["Semangat", 1000, "Tanpa", 500, "Batas", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <div className="flex justify-center items-center">
            <p className="md:text-5xl sm:text-4xl text-xl font-bold text-gray-500">
              bersama dengan 6 bulan di sini{" "}
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 my-7 text-purple-600">
            
            <a title="Instagram" href="https://www.instagram.com/kawulaa36/"  className="cursor-pointer">
            <AiFillInstagram />
            </a>
            <a title="Github" href="https://github.com/affandyfjr" className="cursor-pointer">
              <AiFillGithub />
            </a>
            <a title="Facebook" href="https://web.facebook.com/profile.php?id=100080671479598"  className="cursor-pointer">
            <FaFacebookSquare />
            </a>
          </div>
          <div className="relative inline-flex group my-3">
            <div
              className=" absolute transition-all duration-1000 opacaty-70 -inset-px bg-gradient-to-r from-[#44BCFf] via-[#ff44ec] to-[#FF675e] rounded-xl blur-lg group-hover:opacity-100 
                    group-hover:-inset-1 group-hover:duration-200 animate-tilt"
            ></div>
            {(user == null) ? (<> <a
              title="Login"
              role="button"
              onClick={() => handleKlik()}
              className="w-[190px] h-[60px] relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg.primary-color font-pj rounded-xl
                     focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              Login
            </a>
            </>):(<> <a title="Login"
              role="button"
              onClick={() => handleLogOut()}
              className="w-[190px] h-[60px] relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg.primary-color font-pj rounded-xl
                     focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              Log Out
            </a>
            </>)}
           
          </div>
        </div>

        <div className="my-auto">
          <img
            className="w-[300px] sm:w-[500px] mx-auto h-auto  "
            src={profilefajar}
            alt="profil e fajar"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
