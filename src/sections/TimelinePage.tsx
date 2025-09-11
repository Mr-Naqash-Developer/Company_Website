"use client";

import React from "react";
import trophy from "../assets/trophy.png";
import Image from "next/image";
import { motion } from "framer-motion";

const steps = [
  { id: 1, title: "Assemble the right team", desc: "We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do." },
  { id: 2, title: "Sprint planning", desc: "Sprint roadmap is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding." },
  { id: 3, title: "Tech architecture", desc: "We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently." },
  { id: 4, title: "Standups & weekly demos", desc: "Standups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns." },
  { id: 5, title: "Code reviews", desc: "Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and general bad smells." },
  { id: 6, title: "Iterative delivery", desc: "We divide the implementation process into several checkpoints rather than a single deadline." },
];

const TimelinePage = () => {
  const positions = steps.map((step, index) => {
    const isTop = index % 2 === 0;
    const left = `${10 + index * 15}%`;
    return { ...step, isTop, left };
  });

  return (
    <section className="flex flex-col overflow-x-hidden items-center justify-center px-4 lg:px-12 xl:px-28 py-12 sm:py-20 lg:py-28">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center flex flex-col justify-center items-center pb-8 sm:pb-14"
      >
        <hr className="w-16 border-0 h-1.5 bg-gradient-to-tr from-[#57007B] to-[#F76680] mb-4 sm:mb-6 rounded-full" />
        <h1 className="text-xl sm:text-3xl lg:text-4xl text-gray-900 leading-snug">
          How development <br />
          <span className="font-bold">through Alcaline works</span>
        </h1>
      </motion.div>

      {/* 📱 Mobile / Tablet Timeline (Vertical) */}
      <div className="relative w-full flex lg:hidden px-4">
        {/* Vertical main line */}
        <div className="absolute right-4 top-0 bottom-6 w-0.5 bg-gradient-to-b from-[#57007B] to-[#F76680] rounded-full" />

        {/* Steps stacked */}
        <div className="flex flex-col gap-12 w-full pr-10">
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative"
            >
              {/* Connector */}
              <div className="absolute right-[-2.4rem] top-14 w-3 h-0.5 rounded-full bg-gradient-to-tr from-[#57007B] to-[#F76680]" />

              {/* Card */}
              <div className="p-4 bg-white shadow-md rounded-lg text-left">
                <h3 className="text-[#57007B] font-bold mb-2">
                  #{step.id} {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trophy BELOW the line */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="absolute right-[-18px] bottom-[-47px] translate-y-full"
        >
          <Image src={trophy} width={60} height={60} alt="Trophy" />
        </motion.div>
      </div>

      {/* 💻 Desktop Timeline (Horizontal) */}
      <div className="relative w-full h-[400px] hidden lg:block mx-32">
        {/* Horizontal main line */}
        <motion.hr
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="origin-left absolute top-1/2 left-0 w-[97%] border-0 h-[2px] bg-gradient-to-tr from-[#57007B] to-[#F76680] rounded-full"
        />

        {/* Trophy (independent position) */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          // 🎯 Use inline styles or Tailwind to position trophy manually
          style={{
            top: "calc(50% - 28px)", // you can change this to move trophy up/down
            right: "-30px",           // you can change this to move trophy left/right
            position: "absolute",
          }}
        >
          <Image src={trophy} width={60} height={60} alt="Trophy" />
        </motion.div>

        {/* Steps */}
        {positions.map((step, i) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: step.isTop ? -80 : 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: i * 0.25 }}
            className="absolute top-1/2"
            style={{ left: step.left }}
          >
            {/* Connector line */}
            <hr
              className={`absolute w-0.5 h-10 bg-gradient-to-tr from-[#57007B] to-[#F76680] rounded-full ${step.isTop ? "bottom-full" : "top-full"
                }`}
            />

            {/* Card */}
            <div
              className={`absolute w-64 p-4 bg-white shadow-md rounded-lg text-center -translate-x-1/2 ${step.isTop
                  ? "bottom-[calc(100%+20px)]"
                  : "top-[calc(100%+20px)]"
                }`}
            >
              <h3 className="text-[#57007B] font-bold mb-2">
                #{step.id} {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default TimelinePage;
