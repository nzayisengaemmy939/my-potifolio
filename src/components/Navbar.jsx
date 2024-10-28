import Logo from "../assets/kevinRushLogo.png";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram} from "react-icons/fa";
function Navbar() {
  return (
    <nav className="mb-15 flex items-center justify-between py-6">
      <div className=" flex flex-shrink-0 items-center ">
        {/* <img className='m-8 w-10' src={Logo} alt="logo" /> */}
        <h1 className=" text-4xl text-neutral-700 hover:cursor-pointer">Keen</h1>
      </div>
      <div className=" m-6 flex items-center justify-center gap-4 text-2xl">
        <a
          className=" hover:cursor-pointer hover:text-orange-500"
          href="https://www.linkedin.com/in/nzayisenga-emmanuel-517a10327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        >
          <FaLinkedin />
        </a>
        <a className=" hover:cursor-pointer hover:text-orange-500" href="https://github.com/nzayisengaemmy939">
          <FaGithub />
        </a>
        <a
          className=" hover:cursor-pointer hover:text-orange-500"
          href="https://www.instagram.com/emma1_?igsh=dWJvbGpiMDVpZWJ5"
        >
          <FaInstagram />
        </a>
        {/* <a className=" hover:cursor-pointer hover:text-orange-500" href="">
          <FaSquareXTwitter />
        </a> */}
      </div>
    </nav>
  );
}

export default Navbar;
