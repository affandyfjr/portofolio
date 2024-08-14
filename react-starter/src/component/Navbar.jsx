import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [navOpen, setNavOpen ] = useState(false)

  const handleNav = () => {
    
    setNavOpen(!navOpen);

  }


   
  return (
    <div className="z-10 text-gray-500 flex justify-between items-center max-w-full mx-auto h-24 px-4 text-1">
      <h1 className="text-3xl font-bold primary-color ml-4 ">Affandy<i className="text-gray-500">edewe</i></h1>

      <ul className='hidden md:flex'>
        <li className="p-10">
          <a href="home">Home</a></li>
        <li className="p-10">
          <a href="#About">About</a></li>
        <li className="p-10">
           <a href="#skill">Skill</a></li>
      </ul>

      <div onClick={handleNav} className="block md:hidden"> 
        {navOpen ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
      </div>

    <div className={navOpen ? 'text-gray-900 fixed h-full left-0 top-0 w-[60%] border-r border-r-gray-900 bg-[#202121] ease-in-out duration-500' 
                            : 'fixed left-[-100%]'}>
      <h1 className="text-3xl font-bold primary-color m-4 ">Affandy</h1>

      <ul className='p-8 text-2xl'>
        <li className="p-10">Home</li>
        <li className="p-10">About</li>
        <li className="p-10">Skill</li>
      </ul>
    </div>
    </div>
  )
}

export default Navbar;
