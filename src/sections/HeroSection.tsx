import Image from "next/image";
import hero_main from "../assets/hero_main.png";
import sphere from "../assets/sphere.png";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="h-[88vh] flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex flex-col gap-12">
          <h1 className="text-5xl">
            Great{" "}
            <span className="bg-gradient-to-b from-[#DE4396] to-[#0D1C9F]/40 bg-clip-text text-transparent font-bold ">
              Product
            </span>{" "}
            is <br /> <strong>built by great</strong>{" "}
            <span className="bg-gradient-to-tr from-[#406AFF]/90 to-[#F7666F] bg-clip-text text-transparent font-extrabold">
              teams
            </span>
          </h1>
          <p className="text-[#4A5568] text-xl">
            We help build and manage a team of world-class developers <br /> to
            bring your vision to life
          </p>
          <button className="px-8 py-4 text-white bg-[#3D63EA] rounded-lg w-fit">
            Let's get started!
          </button>
        </div>
        <Image src={hero_main} alt="main" className="w-[550px]" />
      </div>
      <Image
        className="absolute bottom-0 left-[35%] -translate-x-1/2 translate-y-1/2"
        src={sphere} 
        alt="sphere"/>
    </section>
  );
};

export default HeroSection;
