import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-[#FAD2DA] text-gray-800 py-10 border-t border-[#9F3D3D] mt-36">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-72 text-center ">

        
        {/* Left Side - Branding */}
        <div>
          <h3 className="text-2xl font-bold text-[#9F3D3D] poppins-bold-italic mb-2">Dhruv Sharma</h3>
          <p className="patrick-hand-regular text-[#6E6E6E]">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Middle - Navigation Links */}
        <div>
          <h4 className="text-xl font-semibold text-[#9F3D3D] mb-3 ">Quick Links</h4>
          <ul className="flex place-content-between gap-2 items-center md:items-start">
            <Link to="about" smooth duration={500} className="cursor-pointer hover:text-[#9F3D3D]" id='about'>About</Link>
            <Link to="skills" smooth duration={500} className="cursor-pointer hover:text-[#9F3D3D]" id='skills'>Skills</Link>
            <Link to="contact" smooth duration={500} className="cursor-pointer hover:text-[#9F3D3D]" id='contact'>Contact</Link>
          </ul>
        </div>

        
        <div>
          <h4 className="text-xl font-semibold text-[#9F3D3D] mb-3">Connect with me</h4>
          <div className="flex justify-center md:justify-start gap-6 text-2xl text-[#9F3D3D]">
            <a href="https://github.com/Dhruv-sharma2003" target="_blank" rel="noopener noreferrer" className="hover:text-[#6E6E6E] transition-all">
              <FaGithub />
            </a>

{/* linkedin add krdoo */}

            <a href="https://www.linkedin.com/in/dhruv-sharma-118293373/" target="_blank" rel="noopener noreferrer" className="hover:text-[#6E6E6E] transition-all">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
