import React from 'react';
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsBriefcase } from 'react-icons/bs';
import { FaCode } from 'react-icons/fa';
import { GiSkills } from 'react-icons/gi';

const NavBar = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-10 w-full z-50">
      <div className="card-wrapper h-[60px] max-w-[460px] mx-auto relative">
        {/* inner nav */}
        <div className="card-content w-full backdrop-blur-2xl rounded-full px-5 bg-black/20 flex justify-between items-center text-2xl text-teal-50">
          
          {/* Home Link */}
          <a href="/" className="hover:text-teal-400">
            <BiHomeAlt />
          </a>

          {/* About Link */}
          <a href="/" className="hover:text-teal-400">
            <BiUser />
          </a>

          {/* Skills Link */}
          <a href="/" className="hover:text-teal-400">
            <GiSkills />
          </a>

          {/* Work Link */}
          <a href="/" className="hover:text-teal-400">
            <FaCode />
          </a>

          {/* Contact Link */}
          <a href="/" className="hover:text-teal-400">
            <BsBriefcase />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
