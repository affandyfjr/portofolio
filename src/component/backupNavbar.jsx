import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import Login from "./Login";

const Navbar = () => {
  // const [navOpen, setNavOpen] = useState(false);
  // // const user = userCredential.user;

  // // const handleNav = () => {
  // //   setNavOpen(!navOpen);
  // // };

  if ((onClick = { Login })) {
    return (
      <div className="z-10 text-gray-500 flex justify-between items-center max-w-full mx-auto h-24 px-4 text-1">
        <h1 className="text-3xl font-bold primary-color ml-4 ">
          Affandy<i className="text-gray-500">edewe</i>
        </h1>

        <ul className="hidden md:flex">
          <li className="p-8">
            <Link to="/App">Home</Link>z
          </li>

          <li className="p-8">
            <a href="#About">About</a>
          </li>
          <li className="p-8">
            <a href="#skill">Skill</a>
          </li>
          <li className="p-8">
            <a href="#Work">Project</a>
          </li>

          <li className="p-8">
            <Link to="/Login">Login</Link>
          </li>
        </ul>
      </div>

      //   {/* <div onClick={handleNav} className="block md:hidden">
      //     {navOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      //   </div> */}

      //   {/* <div
      //     className={
      //       navOpen
      //         ? "text-gray-900 fixed h-full left-0 top-0 w-[60%] border-r border-r-gray-900 bg-[#202121] ease-in-out duration-500"
      //         : "fixed left-[-100%]"
      //     }
      //   >
      //     <h1 className="text-3xl font-bold primary-color m-4 ">Affandy</h1>

      //     <ul className="p-8 text-2xl">
      //       <li className="p-10">Home</li>
      //       <li className="p-10">About</li>
      //       <li className="p-10">Skill</li>
      //       <li className="p-10">Project</li>
      //     </ul>
      //   </div>
      // </div>
    );
  }

  return (
    <div className="z-10 text-gray-500 flex justify-between items-center max-w-full mx-auto h-24 px-4 text-1">
      <h1 className="text-3xl font-bold primary-color ml-4 ">
        Affandy<i className="text-gray-500">edewe</i>
      </h1>

      <ul className="hidden md:flex">
        <li className="p-8">
          <Link to="/App">Home</Link>
        </li>

        <li className="p-8">
          <Link to="/Login">Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
