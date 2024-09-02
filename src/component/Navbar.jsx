import React, { useContext, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import Login from "./Login";
import { AuthContext } from "./AuthProvider";

const Navbar = () => {
 
  const { user } = useContext(AuthContext);


  return (
    <div className="bg-[#161618] z-10 text-gray-500 flex justify-between items-center max-w-full mx-auto h-24 px-4 text-1 ">
      <h1 className="text-3xl font-bold primary-color ml-4 ">
        Affandy<i className="text-gray-500">edewe</i>
      </h1>

     
        <ul className="hidden md:flex">
          <li className="p-8">
            <Link to="/App">Home</Link>
          </li>

          <li className="p-8">
            <a href="#About">About</a>
          </li>
          
          {(user == null) ? (<>
            <li className="p-8">
            <a href="#skilllogin">Skill</a>
            </li>
          </>) : ( <>
            <li className="p-8">
            <a href="#skill">Skill</a>
            </li>
          </>)}
  
          <li className="p-8">
            <a href="#Work">Project</a>
          </li>

      
        </ul>
      
    </div>
  );
};

export default Navbar;
