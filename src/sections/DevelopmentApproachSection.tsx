import da_1 from "../assets/da_1.png";
import da_2 from "../assets/da_2.png";
import da_3 from "../assets/da_3.png";
import da_4 from "../assets/da_4.png";
import da_5 from "../assets/da_5.png";
import da_6 from "../assets/da_6.png";

import Image from "next/image";

const DevelopmentApproachSection = () => {
  return (
    <section className="bg-[#F7F7FA] py-20 border-y broder-[#E7DAED] ">
      <div className="flex flex-col justify-center items-center text-center">
        <hr className="w-16 border-2 h-2 bg-gradient-to-tr from-[#57007B] to-[#F76680] mb-4 sm:mb-6" />
        <h1 className="text-2xl sm:text-3xl md:text-4xl">
          Our design and <br /> <strong>development approach</strong>
        </h1>
      </div>

      <div className="mt-20 px-4 sm:px-10 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-7xl xl:mx-auto justify-items-center">
        <div className="flex flex-col xl:flex-row justify-center gap-6 px-8 py-20 bg-[#FAFAFA] border-[1.8px] border-[#E7DAED] w-full max-w-2xl h-auto">
          <div>
            <div className="bg-gradient-to-tr from-[#27272E] to-[#29272E] p-3 rounded-xl w-fit ">
              <Image src={da_1} alt="img" className="w-[40px] " />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-[#1A202C] text-xl font-bold ">
              UX Driven Engineering
            </h1>
            <p className="text-[#4A5568] max-w-[500px] ">
              Unlike other companies, we are a <span className="text-[#27272E] ">UX first</span> development company.
              Projects are driven by designers and they make sure design and
              experiences translate to code.
            </p>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row justify-center gap-6 px-8 py-20 bg-[#FAFAFA] border-[1.8px] border-[#E7DAED] w-full max-w-2xl h-auto">
          <div>
            <div className="bg-gradient-to-tr from-[#509CF5] to-[#68DBF2] p-3 rounded-xl w-fit ">
              <Image src={da_2} alt="img" className="w-[40px] " />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-[#1A202C] text-xl font-bold ">
              Developing Shared Understanding
            </h1>
            <p className="text-[#4A5568] max-w-[500px] ">
              Unlike other companies, we are a <span className="text-[#68DBF2] ">UX first</span> development company.
              Projects are driven by designers and they make sure design and
              experiences translate to code.
            </p>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row justify-center gap-6 px-8 py-20 bg-[#FAFAFA] border-[1.8px] border-[#E7DAED] w-full max-w-2xl h-auto">
          <div>
            <div className="bg-gradient-to-tr from-[#FF3D9A] to-[#FF92AE] p-3 rounded-xl w-fit">
              <Image src={da_3} alt="img" className="w-[40px] " />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-[#1A202C] text-xl font-bold ">
              Proven Experience and Expertise
            </h1>
            <p className="text-[#4A5568] max-w-[500px] ">
              Unlike other companies, we are a <span className="text-[#FF3D9A] ">UX first</span> development company.
              Projects are driven by designers and they make sure design and
              experiences translate to code.
            </p>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row justify-center gap-6 px-8 py-20 bg-[#FAFAFA] border-[1.8px] border-[#E7DAED] w-full max-w-2xl h-auto">
          <div>
            <div className="bg-gradient-to-tr from-[#24E795] to-[#67E9F1] p-3 rounded-xl w-fit">
              <Image src={da_4} alt="img" className="w-[40px] " />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-[#1A202C] text-xl font-bold ">
              Security & Intellectual Property (IP)
            </h1>
            <p className="text-[#4A5568] max-w-[500px] ">
              Unlike other companies, we are a <span className="text-[#67E9F1] ">UX first</span> development company.
              Projects are driven by designers and they make sure design and
              experiences translate to code.
            </p>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row justify-center gap-6 px-8 py-20 bg-[#FAFAFA] border-[1.8px] border-[#E7DAED] w-full max-w-2xl h-auto">
          <div>
            <div className="bg-gradient-to-tr from-[#F7936F] to-[#FFEF5E] p-3 rounded-xl w-fit">
              <Image src={da_5} alt="img" className="w-[40px] " />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-[#1A202C] text-xl font-bold ">
              Code Reviews
            </h1>
            <p className="text-[#4A5568] max-w-[500px] ">
              Unlike other companies, we are a <span className="text-[#FFEF5E] ">UX first</span> development company.
              Projects are driven by designers and they make sure design and
              experiences translate to code.
            </p>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row justify-center gap-6 px-8 py-20 bg-[#FAFAFA] border-[1.8px] border-[#E7DAED] w-full max-w-2xl h-auto">
          <div>
            <div className="bg-gradient-to-tr from-[#57007B] to-[#F76680] p-3 rounded-xl w-fit">
              <Image src={da_6} alt="img" className="w-[40px] " />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-[#1A202C] text-xl font-bold ">
              Quality Assurance & Testing
            </h1>
            <p className="text-[#4A5568] max-w-[500px] ">
              Unlike other companies, we are a <span className="text-[#F76680] ">UX first</span> development company.
              Projects are driven by designers and they make sure design and
              experiences translate to code.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentApproachSection;
