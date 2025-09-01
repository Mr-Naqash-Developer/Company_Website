"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import sphere from "../assets/sphere.png";

const TrustSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayback = async () => {
    const v = videoRef.current;
    if (!v) return;

    try {
      if (v.paused || v.ended) {
        const p = v.play();
        if (p && typeof p.then === "function") await p;
      } else {
        v.pause();
      }
    } catch (err) {
      console.error("Video playback failed:", err);
    }
  };

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onEnded = () => setIsPlaying(false);

    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);
    v.addEventListener("ended", onEnded);

    return () => {
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPause);
      v.removeEventListener("ended", onEnded);
    };
  }, []);

  return (
    <section className="xl:px-24 mx-auto px-4 sm:px-6 py-20 sm:py-32 md:py-44 min-h-[60vh] md:min-h-[70vh] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center relative overflow-hidden">
      {/* Left */}
      <div>
        <hr className="w-16 border-2 h-2 bg-gradient-to-tr from-[#57007B] to-[#F76680] mb-4 sm:mb-6" />
        <h1 className="text-2xl sm:text-3xl md:text-4xl leading-snug mb-6 sm:mb-10">
          Leading companies trust us <br />
          <span className="text-black font-bold">to develop software</span>
        </h1>
        <p className="text-gray-600 mb-6 sm:mb-10 max-w-md text-sm sm:text-base">
          We <span className="text-pink-600">add development capacity</span> to tech teams.
          Our value isn’t limited to building teams but is equally distributed across
          the project lifecycle. We are a custom software development company that
          guarantees the successful delivery of your project.
        </p>
        <a
          href="#"
          className="text-[#57007B] font-semibold hover:underline inline-flex items-center text-sm sm:text-base"
        >
          See more Informations <span className="ml-3 sm:ml-5 font-extrabold">→</span>
        </a>
      </div>

      {/* Right */}
      <div className="relative">
        <video
          ref={videoRef}
          src="/videos/heroVideo.mp4"
          className="rounded-xl md:rounded-2xl shadow-lg w-full"
          playsInline
          muted
          preload="metadata"
          onClick={togglePlayback}
        />
        {!isPlaying && (
          <button
            type="button"
            aria-label="Play video"
            className="absolute inset-0 m-auto h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-purple-600/90 flex items-center justify-center shadow-lg transition-transform hover:scale-110"
            onClick={togglePlayback}
          >
            {/* Play icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="white"
              className="h-5 w-5 sm:h-6 sm:w-6"
            >
              <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
            </svg>
          </button>
        )}
      </div>

      {/* Sphere image (only visible on md and up) */}
      <Image
        className="absolute hidden md:flex top-[-83px] left-1/2 md:left-[10%] -translate-x-1/2 translate-y-1/2 w-16 md:w-20"
        src={sphere}
        alt="sphere"
      />
    </section>
  );
};

export default TrustSection;
