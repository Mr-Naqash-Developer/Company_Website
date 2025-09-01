"use client";

import Image from "next/image";
import sphere from "../assets/sphere.png";
import { meetCarousel } from "@/data/card";
import Marquee from "react-fast-marquee";

const MeetingSection = () => {
  return (
    <>
      {/* Top Heading Section */}
      <section className="xl:px-24 mx-auto px-4 sm:px-6 pb-20 sm:pb-12 md:pb-20 relative overflow-hidden">
        <hr className="w-16 border-2 h-2 bg-gradient-to-tr from-[#57007B] to-[#F76680] mb-4 sm:mb-6" />
        <h1 className="text-2xl sm:text-3xl md:text-4xl">
          Meet the People <br /> <strong>We are Working with</strong>
        </h1>
        <Image
          src={sphere}
          alt="vector-image"
          className="absolute hidden md:flex bottom-0 left-1/2 md:left-[60%] -translate-x-1/2 translate-y-1/2 w-16 md:w-20"
        />
      </section>

      {/* Carousel Section */}
      <section className="bg-[#F7F7FA] h-[20vh] flex items-center border-y border-[#E7DAED] overflow-hidden">
        <div className="w-full">
          <Marquee
            direction="right"
            speed={20}
            gradient={false}
            pauseOnHover={false}
            loop={0}
          >
            <div className="flex items-center gap-12">
              {meetCarousel.map((item) => (
                <Image
                  key={item.id}
                  src={item.img}
                  alt="partner"
                  width={150}
                  height={60}
                  className="object-contain"
                />
              ))}
            </div>
          </Marquee>
        </div>
      </section>
    </>
  );
};

export default MeetingSection;
