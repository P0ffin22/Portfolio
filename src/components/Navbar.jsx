// Import logos for top right websites(Linkedin, Github, Instagram)

import logo from "../assets/shivamKumar.png";
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center h-9 w-9">
        <img className="mx-2 " src={logo} alt="logo" />
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
         <a className="hidden md:block" href="https://www.linkedin.com/in/shivam-kumar-563ab3382/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/P0ffin22" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a className="hidden md:block" href="https://www.instagram.com/poffin22/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
    </div>
    </nav>
    );
};



export default Navbar;

