import Image from "next/image";
import React from "react";

import caseStudy1 from "../assets/caseStudy1.png";
import caseStudy2 from "../assets/caseStudy2.png";
import caseStudy3 from "../assets/caseStudy3.png";
import leftPointer from "../assets/leftPointer.png";
import rightPointer from "../assets/rightPointer.png";
import sphere from "../assets/sphere.png";
import Sphere2 from "@/components/Sphere2";

const RecentWorkSection = () => {
  const caseStudies = [
    { id: "case-1", bg: "bg-[#F1F2FF]", img: caseStudy1 },
    { id: "case-2", bg: "bg-[#F0FFF7]", img: caseStudy2 },
    { id: "case-3", bg: "bg-[#FFF4F4]", img: caseStudy3 },
  ];

  return (
    <section className="relative bg-[#F7F7FA] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-12 py-12 sm:py-20 lg:py-28">
      {/* Left Pointer */}
      <Image
        src={leftPointer}
        alt="Left Pointer"
        className="hidden md:block absolute md:-top-16 lg:-top-28  left-6 
                   w-20 h-20 md:w-40 md:h-40 lg:w-56 lg:h-56 xl:w-60 xl:h-60"
      />

      {/* Right Pointer */}
      <Image
        src={rightPointer}
        alt="Right Pointer"
        className="hidden md:block absolute md:-top-16 lg:-top-28 right-6 
                   w-20 h-20 md:w-40 md:h-40 lg:w-56 lg:h-56 xl:w-60 xl:h-60"
      />

      {/* Sphere */}
      <Sphere2 className="hidden md:block absolute top-20 left-[30%] p-2" />

      {/* Header */}
      <div className="text-center flex flex-col justify-center items-center pb-8 sm:pb-14">
        <hr className="w-16 border-0 h-1.5 bg-gradient-to-tr from-[#57007B] to-[#F76680] mb-4 sm:mb-6 rounded-full" />
        <h1 className="text-xl sm:text-3xl lg:text-4xl text-gray-900 leading-snug">
          Our recent <br />
          <span className="font-bold">Case Studies</span>
        </h1>
      </div>

      {/* Cards */}
      {caseStudies.map((item, idx) => (
        <div
          key={item.id}
          className={`${item.bg} rounded-2xl flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-10 shadow-sm mt-8 sm:mt-12 w-full max-w-6xl overflow-hidden`}
        >
          {/* Image wrapper */}
          <div className="flex-shrink-0 w-full lg:w-1/2">
            <div className="relative w-full aspect-[600/416]">
              <Image
                src={item.img}
                alt={`Case Study ${idx + 1}`}
                fill
                className="rounded-xl object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center text-center lg:text-left px-6 lg:px-5 xl:px-16 py-6 lg:py-6 xl:py-12 w-full lg:w-1/2">
            <h2 className="text-base xl:text-2xl sm:text-2xl font-bold text-gray-900 mb-4">
              Website Design for SCFC Canada
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0 text-sm xl:text-base">
              Born out of a vision, a single-minded objective that puts service
              before anything else, Swift Clearance and Forwarding Corp. surging
              forth to deliver the best services in the shipping and logistics
              scenario. Its meteoric rise stems out of a solid foundation. The
              management boasts of over 20 years of rich and varied experience
              in the shipping and freight forwarding industry.
            </p>

            <div className="flex justify-center lg:justify-end">
              <button className="font-medium flex items-center gap-1 hover:underline">
                <span className="bg-gradient-to-tr from-[#57007B] to-[#6675F7] bg-clip-text text-transparent">
                  Read more
                </span>
                <span className="text-lg bg-gradient-to-tr from-[#57007B] to-[#6675F7] bg-clip-text text-transparent">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default RecentWorkSection;
