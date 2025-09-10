"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CardCarousel from "@/components/CardCarousel";
import React, { useRef, useState, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  // ✅ Ensure client-only rendering (avoids hydration mismatch)
  useEffect(() => {
    setMounted(true);
  }, []);

  useGSAP(() => {
    if (!mounted) return; // don’t run animations until mounted

    const ctx = gsap.context(() => {
      // Animate heading
      gsap.from(".services-heading", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Animate carousel container
      gsap.from(".services-carousel", {
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [mounted]);

  if (!mounted) return null; // ✅ Prevents SSR mismatch

  return (
    <section
      ref={sectionRef}
      className="min-h-[70vh] border-y border-[#E7DAED] flex flex-col justify-center items-center bg-[#F9F9FF] px-4 py-10 md:py-16"
    >
      <h1 className="services-heading text-[#1A202C] text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8">
        Services we offer
      </h1>
      <div className="services-carousel w-full">
        <CardCarousel />
      </div>
    </section>
  );
};

export default ServicesSection;
