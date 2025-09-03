import Image from "next/image";

import ceo1 from "../assets/ceo-1.png";
import ceo2 from "../assets/ceo-2.png";
import ceo3 from "../assets/ceo-3.png";

import gt1 from "../assets/gt-1.jpg";
import gt2 from "../assets/gt-2.jpg";
import gt3 from "../assets/gt-3.jpg";

import sphere_1 from "../assets/sphere.png";
import sphere_2 from "../assets/sphere-2.png";

const WayOfBuildingSection = () => {
  return (
    <section className="px-4 sm:px-6 mb-36 mt-20">
      <div className="text-center flex flex-col items-center">
        <hr className="w-16 border-2 h-2 bg-gradient-to-tr from-[#57007B] to-[#F76680] mb-4 sm:mb-6" />
        <h1 className="text-2xl sm:text-3xl md:text-4xl">
          Way of building <br /> <strong>Great Software</strong>
        </h1>
      </div>

      <div className="flex flex-col mt-20 lg:flex-row gap-14 xl:gap-20 justify-between items-center max-w-7xl mx-auto">
        <div className="max-w-md xl:max-w-xl flex flex-col gap-6 sm:gap-4 md:gap-6 ">
          <h1 className="text-xl sm:text-2xl xl:text-3xl font-semibold">
            Build the right team to scale
          </h1>

          <p className="xl:text-lg text-[#2D3748] ">
            Finding the right talent is not easy. We help you find the talent
            that suits your needs, follows your processes, and sticks with you
            long term (not the case with freelancers)
          </p>

          <p className="xl:text-lg text-[#2D3748] ">
            Our{" "}
            <span className="bg-gradient-to-t from-[#57007B] to-[#F76680] bg-clip-text text-transparent ">
              delivery model
            </span>{" "}
            helps you cut costs and deliver within budget.
          </p>

          <div className="flex items-center gap-4">
            <hr className="h-20 border-[1px] w-[5px] bg-gradient-to-t from-[#57007B] to-[#F76680]" />
            <p className="text-sm sm:text-base bg-gradient-to-tr from-[#57007B] to-[#F76680] bg-clip-text text-transparent font-normal">
              "Simform is quick to identify larger problem with the{" "}
              <br className="hidden sm:block" /> Software so we decided to
              expand our scope to build <br className="hidden sm:block" /> new
              modules"
            </p>
          </div>

          <div className="flex gap-3 items-center">
            <div>
              <Image
                src={ceo1}
                alt="ceo image"
                className="w-12 sm:w-[50px] rounded-full"
              />
            </div>
            <div>
              <h1 className="text-[#1A202C] sm:text-lg">Jeewa markram</h1>
              <span className="text-xs text-[#718096] ">CEO</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <Image
            src={sphere_2}
            alt="sphere"
            className="w-[40px] md:w-[50px] absolute -z-10 -translate-y-[40%] -left-3 lg:-left-6"
          />
          <Image
            src={gt1}
            alt="image"
            className="rounded-lg w-full max-w-[800px] h-auto"
          />
          <Image
            width={30}
            src={sphere_1}
            alt="sphere"
            className="absolute -z-10 bottom-0 translate-y-1/2 left-[45%]"
          />
        </div>
      </div>
      <div className="flex flex-col mt-20 lg:flex-row-reverse gap-14 xl:gap-20 justify-between items-center max-w-7xl mx-auto">
        <div className="max-w-md xl:max-w-xl flex flex-col gap-6 sm:gap-4 md:gap-6 ">
          <h1 className="text-xl sm:text-2xl xl:text-3xl font-semibold">
            Build the right team to scale
          </h1>

          <p className="xl:text-lg text-[#2D3748] ">
            Finding the right talent is not easy. We help you find the talent
            that suits your needs, follows your processes, and sticks with you
            long term (not the case with freelancers)
          </p>

          <p className="xl:text-lg text-[#2D3748] ">
            Our{" "}
            <span className="bg-gradient-to-t from-[#57007B] to-[#F76680] bg-clip-text text-transparent ">
              delivery model
            </span>{" "}
            helps you cut costs and deliver within budget.
          </p>

          <div className="flex items-center gap-4">
            <hr className="h-20 border-[1px] w-[5px] bg-gradient-to-t from-[#57007B] to-[#F76680]" />
            <p className="text-sm sm:text-base bg-gradient-to-tr from-[#57007B] to-[#F76680] bg-clip-text text-transparent font-normal">
              "Simform is quick to identify larger problem with the{" "}
              <br className="hidden sm:block" /> Software so we decided to
              expand our scope to build <br className="hidden sm:block" /> new
              modules"
            </p>
          </div>

          <div className="flex gap-3 items-center">
            <div>
              <Image
                src={ceo2}
                alt="ceo image"
                className="w-12 sm:w-[50px] rounded-full"
              />
            </div>
            <div>
              <h1 className="text-[#1A202C] sm:text-lg">Jeewa markram</h1>
              <span className="text-xs text-[#718096] ">CEO</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <Image
            src={sphere_1}
            alt="sphere"
            className="w-[20px] md:w-[40px] absolute -z-10 -translate-y-[40%] -right-2 lg:-right-6"
          />
          <Image
            src={gt2}
            alt="image"
            className="rounded-lg w-full max-w-[800px] h-auto"
          />
          <Image
            src={sphere_2}
            alt="sphere"
            className="w-[40px] md:w-[60px] absolute -z-10 bottom-0 translate-y-1/2 left-[15%]"
          />
        </div>
      </div>

      <div className="flex flex-col mt-20 lg:flex-row gap-14 xl:gap-20 justify-between items-center max-w-7xl mx-auto">
        <div className="max-w-md xl:max-w-xl flex flex-col gap-6 sm:gap-4 md:gap-6 ">
          <h1 className="text-xl sm:text-2xl xl:text-3xl font-semibold">
            Build the right team to scale
          </h1>

          <p className="xl:text-lg text-[#2D3748] ">
            Finding the right talent is not easy. We help you find the talent
            that suits your needs, follows your processes, and sticks with you
            long term (not the case with freelancers)
          </p>

          <p className="xl:text-lg text-[#2D3748] ">
            Our{" "}
            <span className="bg-gradient-to-t from-[#57007B] to-[#F76680] bg-clip-text text-transparent ">
              delivery model
            </span>{" "}
            helps you cut costs and deliver within budget.
          </p>

          <div className="flex items-center gap-4">
            <hr className="h-20 border-[1px] w-[5px] bg-gradient-to-t from-[#57007B] to-[#F76680]" />
            <p className="text-sm sm:text-base bg-gradient-to-tr from-[#57007B] to-[#F76680] bg-clip-text text-transparent font-normal">
              "Simform is quick to identify larger problem with the{" "}
              <br className="hidden sm:block" /> Software so we decided to
              expand our scope to build <br className="hidden sm:block" /> new
              modules"
            </p>
          </div>

          <div className="flex gap-3 items-center">
            <div>
              <Image
                src={ceo3}
                alt="ceo image"
                className="w-12 sm:w-[50px] rounded-full"
              />
            </div>
            <div>
              <h1 className="text-[#1A202C] sm:text-lg">Jeewa markram</h1>
              <span className="text-xs text-[#718096] ">CEO</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <Image
            src={sphere_1}
            alt="sphere"
            className="w-[40px] absolute -z-10 -translate-y-[50%] right-[43%]"
          />
          <Image
            src={gt3}
            alt="image"
            className="rounded-lg w-full max-w-[800px] h-auto"
          />
          <Image
            src={sphere_2}
            alt="sphere"
            className="w-[40px] md:w-[60px] absolute -z-10 bottom-0 translate-y-[30%] -left-3 md:-left-6"
          />
        </div>
      </div>
    </section>
  );
};

export default WayOfBuildingSection;
