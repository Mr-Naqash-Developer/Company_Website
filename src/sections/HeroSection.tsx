import Image from "next/image";
import hero_main from "../assets/hero_main.png"

const HeroSection = () => {
  return (
    <section className="h-screen flex justify-between items-center max-w-7xl mx-auto">
      <div className="flex flex-col gap-12">
        <h1 className="text-4xl">Great <span className="bg-gradient-to-b from-[#DE4396] to-[#0D1C9F]/40 bg-clip-text text-transparent font-bold ">Product</span> is <br /> <strong>built by great</strong> <span className="bg-gradient-to-tr from-[#406AFF] to-[#F7666F] bg-clip-text text-transparent font-extrabold">teams</span></h1>
        <p>
          We help build and manage a team of world-class developers to bring
          your vision to life
        </p>
        <button className="px-8 py-4 text-white bg-[#3D63EA] rounded-lg w-fit">Let's get started!</button>
      </div>
      <Image src={hero_main} alt="main" className="w-[550px]"/>
    </section>
  );
};

export default HeroSection;
