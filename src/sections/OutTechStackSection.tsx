"use client";
import React, { useState } from "react";
import Image from "next/image";

// ✅ Imported backend logos
import go from "../assets/go.png";
import java from "../assets/java.png";
import mongodb from "../assets/mongodb.png";
import mysql from "../assets/mysql.png";
import netcore from "../assets/netcore.png";
import nodejs from "../assets/nodejs.png";
import php from "../assets/php.png";
import python from "../assets/python.png";
import rubyonrails from "../assets/rubyonrails.png";

const techStackData: Record<string, { name: string; logo: any }[]> = {
  Backend: [
    { name: "Node.js", logo: nodejs },
    { name: "PHP", logo: php },
    { name: "Java", logo: java },
    { name: "Python", logo: python },
    { name: "Rails", logo: rubyonrails },
    { name: ".NET Core", logo: netcore },
    { name: "Go", logo: go },
    { name: "MySQL", logo: mysql },
    { name: "MongoDB", logo: mongodb },
  ],
  Frontend: [],
  Databases: [],
  CMS: [],
  CloudTesting: [],
  DevOps: [],
};

const OutTechStackSection = () => {
  const [activeTab, setActiveTab] =
    useState<keyof typeof techStackData>("Backend");

  return (
    <section className="mt-20 border-b flex flex-col justify-center items-center border-[#E7DAED] pb-20">
      {/* Heading */}
      <div className="flex flex-col justify-center items-center text-center">
        <hr className="w-16 border-2 h-2 bg-gradient-to-tr from-[#57007B] to-[#F76680] mb-4 sm:mb-6" />
        <h1 className="text-2xl sm:text-3xl md:text-4xl">
          Our <br /> <strong>Tech Stack</strong>
        </h1>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-8 mt-6 flex-wrap">
        {Object.keys(techStackData).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as keyof typeof techStackData)}
            className={`flex flex-col items-center text-lg ${
              activeTab === tab
                ? "bg-gradient-to-r from-[#57007B] to-[#F76680] bg-clip-text text-transparent font-semibold "
                : "text-gray-700"
            }`}
          >
            {tab}
            {activeTab === tab && (
              <hr className="w-8 h-1 bg-gradient-to-tr from-[#57007B] to-[#F76680] mt-2 rounded-full" />
            )}
          </button>
        ))}
      </div>

      {/* Logos */}
      <div className="mt-16 max-w-7xl flex justify-center items-center gap-6 flex-wrap">
        {techStackData[activeTab].map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col items-center justify-center"
          >
            <Image src={tech.logo} alt={tech.name} width={220} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OutTechStackSection;
