"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

import da_1 from "../assets/da_1.png";
import da_2 from "../assets/da_2.png";
import da_3 from "../assets/da_3.png";
import da_4 from "../assets/da_4.png";
import da_5 from "../assets/da_5.png";
import da_6 from "../assets/da_6.png";

const DevelopmentApproachSection = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });

  // ✅ ensures client-only rendering
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const cards = [
    {
      id: 1,
      icon: da_1,
      title: "UX Driven Engineering",
      desc: `Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.`,
      color: "from-[#27272E] to-[#29272E] text-[#27272E]",
    },
    {
      id: 2,
      icon: da_2,
      title: "Developing Shared Understanding",
      desc: `Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.`,
      color: "from-[#509CF5] to-[#68DBF2] text-[#68DBF2]",
    },
    {
      id: 3,
      icon: da_3,
      title: "Proven Experience and Expertise",
      desc: `Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.`,
      color: "from-[#FF3D9A] to-[#FF92AE] text-[#FF3D9A]",
    },
    {
      id: 4,
      icon: da_4,
      title: "Security & Intellectual Property (IP)",
      desc: `Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.`,
      color: "from-[#24E795] to-[#67E9F1] text-[#67E9F1]",
    },
    {
      id: 5,
      icon: da_5,
      title: "Code Reviews",
      desc: `Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.`,
      color: "from-[#F7936F] to-[#FFEF5E] text-[#FFEF5E]",
    },
    {
      id: 6,
      icon: da_6,
      title: "Quality Assurance & Testing",
      desc: `Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.`,
      color: "from-[#57007B] to-[#F76680] text-[#F76680]",
    },
  ];

  return (
    <section className="bg-[#F7F7FA] py-20 border-y border-[#E7DAED] overflow-x-hidden">
      {/* Heading */}
      <div
        ref={headerRef}
        className="flex flex-col justify-center items-center text-center"
      >
        <motion.hr
          initial={{ scaleX: 0 }}
          animate={mounted && headerInView ? { scaleX: [0, 1, 0.6, 1] } : {}}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="w-16 border-0 h-2 bg-gradient-to-tr from-[#57007B] to-[#F76680] mb-4 sm:mb-6 rounded-full origin-center"
        />
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={mounted && headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-2xl sm:text-3xl md:text-4xl"
        >
          Our design and <br /> <strong>development approach</strong>
        </motion.h1>
      </div>

      {/* Cards */}
      <div className="mt-20 px-4 sm:px-10 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-7xl xl:mx-auto justify-items-center">
        {cards.map((card, idx) => (
          <AnimatedCard key={card.id} card={card} index={idx} mounted={mounted} />
        ))}
      </div>
    </section>
  );
};

const AnimatedCard = ({ card, index, mounted }: any) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={mounted && inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="flex flex-col xl:flex-row justify-center gap-6 px-8 py-20 bg-[#FAFAFA] border-[1.8px] border-[#E7DAED] w-full max-w-2xl h-auto"
    >
      <div>
        <div
          className={`bg-gradient-to-tr ${card.color} p-3 rounded-xl w-fit`}
        >
          <Image src={card.icon} alt={card.title} className="w-[40px]" />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="text-[#1A202C] text-xl font-bold">{card.title}</h1>
        <p className="text-[#4A5568] max-w-[500px]">{card.desc}</p>
      </div>
    </motion.div>
  );
};

export default DevelopmentApproachSection;
