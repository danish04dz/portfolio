import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="mx-auto w-full h-[40px] bg-gradient-to-t bg-slate-800 to-slate-950 backdrop-blur-3xl">
      <div className="container w-full px-6 sm:px-4 mx-auto flex justify-between items-center">
        {/* Left section (Hire Me) */}
        <div className="m-2">
          <a href="/" className="text-white hover:text-teal-400 font-mono">
            <span className="mr-2">Hire Me</span>
            <div className="bg-gradient-to-r from-slate-800 to-teal-400 w-[60px] h-[2px] rounded-full"></div>
          </a>
        </div>

        {/* Spacer (for centering other items in the middle) */}
        <div className="flex space-x-6 justify-center items-center">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal-400">
            <FaGithub size={18} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal-400">
            <FaLinkedin size={18} />
          </a>
        { /* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal-400">
            <FaInstagram size={24} />
          </a>*/}
        </div> 

        {/* Right section (Resume) */}
        <div className="m-2">
          <a href="/" className="text-white hover:text-teal-400 font-mono">
            <span className="mr-2">Resume</span>
            <div className="bg-gradient-to-l from-slate-800 to-teal-400 w-[60px] h-[2px] rounded-full"></div>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
