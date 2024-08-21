import React from "react";
import profilefajar from "../assets/profilefajar.png";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleKlik = () => {
    navigate("/login");
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
            <AiFillLinkedin />
            <a href="https://github.com/affandyfjr" className="cursor-pointer">
              <AiFillGithub />
            </a>
            <AiFillInstagram />
          </div>
          <div className="relative inline-flex group my-3">
            <div
              className="absolute transition-all duration-1000 opacaty-70 -inset-px bg-gradient-to-r from-[#44BCFf] via-[#ff44ec] to-[#FF675e] rounded-xl blur-lg group-hover:opacity-100 
                    group-hover:-inset-1 group-hover:duration-200 animate-tilt"
            ></div>
            <a
              href="#login"
              title="Download CV"
              role="button"
              className="w-[190px] h-[60px] relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg.primary-color font-pj rounded-xl
                     focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              suka
            </a>
          </div>
          <div className="bg-white mt-8">
            <button className="cursor-pointer" onClick={() => handleKlik()}>
              klik
            </button>
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
