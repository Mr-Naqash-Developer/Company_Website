import Image from "next/image";
import logo from "../assets/logo.png";
import ft_google from "../assets/ft_google.png";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" ">
      <div className="pt-20 px-10 xl:px-20 flex flex-col lg:flex-row justify-between gap-10">
        <div className="flex flex-col items-center lg:items-start gap-10">
          <Image src={logo} alt="logo" className="w-[30px] " />
          <p className="text-[#718096] text-center lg:text-left text-xl max-w-[400px] ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </p>
          <div>
            <Image src={ft_google} alt="img" className="w-[200px] " />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center lg:items-start">
          <h1 className="text-2xl text-[#4A5568] font-bold mb-6 ">Links</h1>
          <ul className="text-[#718096] flex flex-col items-center lg:items-start gap-4 text-lg">
            <li>About Us</li>
            <li>Services</li>
            <li>Case Studies</li>
            <li>How it works</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Areas We Serve</li>
          </ul>
        </div>
        <div className="flex flex-col items-center lg:items-start">
          <h1 className="text-2xl text-[#4A5568] font-bold mb-6">Contact us</h1>
          <p className="text-[#718096] text-xl max-w-[330px] text-center lg:text-left ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className="text-[#718096] text-xl mt-6">+923183561921</p>
        </div>
        <div className="flex items-end gap-4 pb-10">
          <div className="bg-white p-3 shadow-md rounded-full h-fit">
            <FaFacebookF />
          </div>
          <div className="bg-white p-3 shadow-md rounded-full h-fit">
            <FaInstagram />
          </div>
          <div className="bg-white p-3 shadow-md rounded-full h-fit">
            <FaTwitter />
          </div>
          <div className="bg-white p-3 shadow-md rounded-full h-fit">
            <FaLinkedin />
          </div>
        </div>
      </div>

      <hr className="mt-6 bg-[#CBD5E0] " />

      <p className="text-center py-8 text-[#4A5568] ">© 2023 Copyright by IK Developers. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
