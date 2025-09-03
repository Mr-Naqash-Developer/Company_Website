"use client";

import React from "react";
import trophy from "../assets/trophy.png";
import Image from "next/image";

const steps = [
  {
    id: 1,
    title: "Assemble the right team",
    desc: "We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do.",
  },
  {
    id: 2,
    title: "Sprint planning",
    desc: "Sprint roadmap is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding.",
  },
  {
    id: 3,
    title: "Tech architecture",
    desc: "We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently.",
  },
  {
    id: 4,
    title: "Standups & weekly demos",
    desc: "Standups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns.",
  },
  {
    id: 5,
    title: "Code reviews",
    desc: "Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and general bad smells.",
  },
  {
    id: 6,
    title: "Iterative delivery",
    desc: "We divide the implementation process into several checkpoints rather than a single deadline.",
  },
];

const TimelinePage = () => {
  // 🔑 Precompute card positions (only used for lg+ screens)
  const positions = steps.map((step, index) => {
    const isTop = index % 2 === 0; // top if 1,3,5 ; bottom if 2,4,6
    const left = `${10 + index * 15}%`; // spacing for lg+
    return { ...step, isTop, left };
  });

  return ( 
    <section className="flex flex-col overflow-x-hidden items-center justify-center px-4 lg:px-12 xl:px-28 py-12 sm:py-20 lg:py-28">

      {/* Heading */}
      <div className="text-center flex flex-col justify-center items-center pb-8 sm:pb-14">
        <hr className="w-16 border-0 h-1.5 bg-gradient-to-tr from-[#57007B] to-[#F76680] mb-4 sm:mb-6 rounded-full" />
        <h1 className="text-xl sm:text-3xl lg:text-4xl text-gray-900 leading-snug">
          How development <br />
          <span className="font-bold">through Alcaline works</span>
        </h1>
      </div>

      {/* 📱 Mobile / Tablet Timeline (Vertical) */}
<div className="relative w-full flex lg:hidden px-4">
  {/* Vertical main line */}
  <div className="absolute right-4 top-0 bottom-6 w-0.5 bg-gradient-to-b from-[#57007B] to-[#F76680] rounded-full" />
  
  {/* Steps stacked */}
  <div className="flex flex-col gap-12 w-full pr-10">
    {steps.map((step) => (
      <div key={step.id} className="relative">
        {/* Connector dot */}
        <div className="absolute right-[-2.4rem] top-14 w-3 h-0.5 rounded-full bg-gradient-to-tr from-[#57007B] to-[#F76680]" />

        {/* Card */}
        <div className="p-4 bg-white shadow-md rounded-lg text-left">
          <h3 className="text-[#57007B] font-bold mb-2">
            #{step.id} {step.title}
          </h3>
          <p className="text-gray-600 text-sm">{step.desc}</p>
        </div>
      </div>
    ))}
  </div>

  {/* Trophy BELOW the line (independent of line height) */}
  <div className="absolute right-[-18px] bottom-0 translate-y-full">
    <Image src={trophy} width={60} height={60} alt="Trophy" />
  </div>
</div>


      {/* 💻 Desktop Timeline (Horizontal) */}
      <div className="relative w-full h-[400px] hidden lg:block mx-32">
        {/* Horizontal main line */}
        <hr className="absolute top-1/2 w-[97%] border-0 h-[2px] bg-gradient-to-tr from-[#57007B] to-[#F76680] rounded-full" />

        {/* Trophy at END of horizontal line */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
          <Image src={trophy} width={60} height={60} alt="Trophy" />
        </div>

        {/* Steps */}
        {positions.map((step) => (
          <div
            key={step.id}
            className="absolute bottom-[200px]"
            style={{ left: step.left }}
          >
            {/* Connector line */}
            <hr
              className={`absolute w-0.5 h-[32px] bg-gradient-to-tr from-[#57007B] to-[#F76680] rounded-full ${
                step.isTop ? "bottom-1/2" : "top-1/2"
              }`}
            />
            {/* Card */}
            <div
              className={`absolute w-64 p-4 bg-white shadow-md rounded-lg text-center ${
                step.isTop
                  ? "bottom-[calc(50%+40px)]"
                  : "top-[calc(50%+40px)]"
              } -translate-x-1/2`}
            >
              <h3 className="text-[#57007B] font-bold mb-2">
                #{step.id} {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TimelinePage;
