import Image from "next/image";
import logo from "../assets/logo.png";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  const navMenuItems = [
    { name: "About us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Case Studies", href: "/casestudies" },
    { name: "Blog", href: "/Blog" },
    { name: "How it Works", href: "/howitworks" },
    { name: "Hire", href: "/hire" },
  ];

  return (
    <div className="flex justify-between items-center py-6 px-8 bg-white shadow-lg">
      <Image src={logo} alt="Hexagonic" className="w-[35px] h-[26px]" />
      <div className="flex gap-6 text-md text-[#4A5568] font-semibold">
        {navMenuItems.map((item, id) => (
          <Link key={id} href={item.href}>
            {item.name}
          </Link>
        ))}
      </div>
      <button
        className="py-2 px-6 bg-gradient-to-tr from-[#57007B] to-[#6675F7] text-white rounded-md"
      >
        Contact us
      </button>
    </div>
  );
};

export default Navbar;
