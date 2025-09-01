"use client";
import Image from "next/image";
import logo from "../assets/logo.png";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // hamburger + close icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navMenuItems = [
    { name: "About us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Case Studies", href: "/casestudies" },
    { name: "Blog", href: "/blog" },
    { name: "How it Works", href: "/howitworks" },
    { name: "Hire", href: "/hire" },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image width={40} height={32} src={logo} alt="Hexagonic" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-md text-[#4A5568] font-semibold">
          {navMenuItems.map((item, id) => (
            <Link
              key={id}
              href={item.href}
              className="hover:text-purple-600 transition"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Contact button (desktop only) */}
        <div className="hidden md:block">
          <button className="py-2 px-6 bg-gradient-to-tr from-[#57007B] to-[#6675F7] text-white rounded-md hover:opacity-90 transition">
            Contact us
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 flex flex-col gap-4">
          {navMenuItems.map((item, id) => (
            <Link
              key={id}
              href={item.href}
              className="text-gray-700 font-medium hover:text-purple-600 transition"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          <button className="mt-4 py-2 px-6 w-fit bg-gradient-to-tr from-[#57007B] to-[#6675F7] text-white rounded-md">
            Contact us
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
