import Image from "next/image";
import hero_main from "../assets/hero_main.png";
import sphere from "../assets/sphere.png";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden xl:px-24 ">
      
      <div className="h-[90vh] flex flex-col-reverse md:flex-row justify-center md:justify-between items-center mx-auto px-4 md:px-8 py-10 md:py-0 gap-10">
        
        {/* Left Content */}
        <div className="flex flex-col gap-6 md:gap-12 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl leading-snug">
            Great{" "}
            <span className="bg-gradient-to-b from-[#DE4396] to-[#0D1C9F]/40 bg-clip-text text-transparent font-bold">
              Product
            </span>{" "}
            is <br className="hidden md:block" /> <strong>built by great</strong>{" "}
            <span className="bg-gradient-to-tr from-[#406AFF]/90 to-[#F7666F] bg-clip-text text-transparent font-extrabold">
              teams
            </span>
          </h1>
          <p className="text-[#4A5568] text-base sm:text-lg md:text-xl">
            We help build and manage a team of world-class developers <br className="hidden sm:block" /> 
            to bring your vision to life
          </p>
          <button className="px-6 sm:px-8 py-3 sm:py-4 text-white bg-[#3D63EA] rounded-lg w-fit mx-auto md:mx-0">
            Let's get started!
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <Image 
            src={hero_main} 
            alt="main" 
            className="w-[280px] sm:w-[400px] md:w-[550px] object-contain" 
          />
        </div>
      </div>

      {/* Decorative Sphere */}
      <Image
        className="absolute hidden md:flex bottom-0 left-1/2 md:left-[35%] -translate-x-1/2 translate-y-1/2 w-16 md:w-20 "
        src={sphere}
        alt="sphere"
      />
    </section>
  );
};

export default HeroSection;