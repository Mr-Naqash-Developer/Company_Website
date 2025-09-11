"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

import ceo1 from "../assets/ceo-1.png";
import ceo2 from "../assets/ceo-2.png";
import ceo3 from "../assets/ceo-3.png";

import gt1 from "../assets/gt-1.jpg";
import gt2 from "../assets/gt-2.jpg";
import gt3 from "../assets/gt-3.jpg";

import Sphere1 from "@/components/Sphere1";
import Sphere2 from "@/components/Sphere2";

const WayOfBuildingSection = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });

  // ✅ ensures client-only rendering
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const blocks = [
    { id: 1, img: gt1, ceo: ceo1, reverse: false },
    { id: 2, img: gt2, ceo: ceo2, reverse: true },
    { id: 3, img: gt3, ceo: ceo3, reverse: false },
  ];

  return (
    <section className="px-4 sm:px-6 mb-36 mt-20">
      {/* Heading */}
      <div ref={headerRef} className="text-center flex flex-col items-center">
        <motion.hr
          initial={{ scaleX: 0 }}
          animate={mounted && headerInView ? { scaleX: [0, 1, 0.6, 1] } : {}}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="w-16 border-0 h-2 bg-gradient-to-tr from-[#57007B] to-[#F76680] mb-4 sm:mb-6 rounded-full origin-center"
        />
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={mounted && headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-2xl sm:text-3xl md:text-4xl"
        >
          Way of building <br /> <strong>Great Software</strong>
        </motion.h1>
      </div>

      {/* Content blocks */}
      {blocks.map((block, idx) => (
        <Block key={block.id} {...block} index={idx} mounted={mounted} />
      ))}
    </section>
  );
};

const Block = ({ img, ceo, reverse, index, mounted }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className={`flex flex-col mt-20 ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } gap-14 xl:gap-20 justify-between items-center max-w-7xl mx-auto`}
    >
      {/* Text */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? 100 : -100 }}
        animate={mounted && isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-md xl:max-w-xl flex flex-col gap-6 sm:gap-4 md:gap-6"
      >
        <h1 className="text-xl sm:text-2xl xl:text-3xl font-semibold">
          Build the right team to scale
        </h1>
        <p className="xl:text-lg text-[#2D3748]">
          Finding the right talent is not easy. We help you find the talent that
          suits your needs, follows your processes, and sticks with you long
          term (not the case with freelancers)
        </p>
        <p className="xl:text-lg text-[#2D3748]">
          Our{" "}
          <span className="bg-gradient-to-t from-[#57007B] to-[#F76680] bg-clip-text text-transparent">
            delivery model
          </span>{" "}
          helps you cut costs and deliver within budget.
        </p>
        <div className="flex items-center gap-4">
          <hr className="h-20 border-[1px] w-[5px] bg-gradient-to-t from-[#57007B] to-[#F76680]" />
          <p className="text-sm sm:text-base bg-gradient-to-tr from-[#57007B] to-[#F76680] bg-clip-text text-transparent font-normal italic">
            {`"Simform is quick to identify larger problem with the `}
            <br className="hidden sm:block" />
            {`Software so we decided to expand our scope to build `}
            <br className="hidden sm:block" />
            {`new modules"`}
          </p>
        </div>
        <div className="flex gap-3 items-center">
          <div>
            <Image
              src={ceo}
              alt="ceo image"
              className="w-12 sm:w-[50px] rounded-full"
            />
          </div>
          <div>
            <h1 className="text-[#1A202C] sm:text-lg">Jeewa markram</h1>
            <span className="text-xs text-[#718096] ">CEO</span>
          </div>
        </div>
      </motion.div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? -100 : 100 }}
        animate={mounted && isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative"
      >
        {index === 0 && (
          <>
            <Sphere1 className="p-4 md:p-9 absolute -z-10 -translate-y-[40%] -left-3 lg:-left-6" />
            <Sphere2 className="p-2 md:p-4 absolute -z-10 bottom-0 translate-y-1/2 left-[45%]" />
          </>
        )}
        {index === 1 && (
          <>
            <Sphere2 className="p-2 md:p-4 absolute -z-10 -translate-y-[40%] -right-1 md:-right-3 " />
            <Sphere1 className="p-5 md:p-9 absolute -z-10 bottom-0 translate-y-1/2 left-[15%]" />
          </>
        )}
        {index === 2 && (
          <>
            <Sphere2 className="p-2 md:p-4 absolute -z-10 -translate-y-[50%] right-[43%]" />
            <Sphere1 className="p-4 md:p-5 absolute -z-10 bottom-0 translate-y-[30%] -left-3 md:-left-4" />
          </>
        )}
        <Image
          src={img}
          alt="image"
          className="rounded-lg w-full max-w-[800px] h-auto"
        />
      </motion.div>
    </div>
  );
};

export default WayOfBuildingSection;
