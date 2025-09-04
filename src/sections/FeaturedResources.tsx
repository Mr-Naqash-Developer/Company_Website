import Image from "next/image";
import fr1 from "../assets/fr_1.jpg";
import fr2 from "../assets/fr_2.jpg";
import fr3 from "../assets/fr_3.jpg";
import fr4 from "../assets/fr_4.jpg";
import fr5 from "../assets/fr_5.jpg";

import {
  FaArrowRight,
  FaArrowLeft,
  FaArrowUp,
  FaArrowDown,
} from "react-icons/fa";

const FeaturedResources = () => {
  const featuredResources = [
    {
      img: fr1,
      title: "How to Build a Scalable Application up to 1 Million Users on AWS",
    },
    {
      img: fr2,
      title: "How to Build a Scalable Application up to 1 Million Users on AWS",
    },
    {
      img: fr3,
      title: "How to Build a Scalable Application up to 1 Million Users on AWS",
    },
    {
      img: fr4,
      title: "How to Build a Scalable Application up to 1 Million Users on AWS",
    },
    {
      img: fr2,
      title: "How to Build a Scalable Application up to 1 Million Users on AWS",
    },
    {
      img: fr3,
      title: "How to Build a Scalable Application up to 1 Million Users on AWS",
    },
    {
      img: fr4,
      title: "How to Build a Scalable Application up to 1 Million Users on AWS",
    },
    {
      img: fr5,
      title: "How to Build a Scalable Application up to 1 Million Users on AWS",
    },
  ];
  return (
    <section className="my-10">
      <div className="text-center flex flex-col items-center">
        <hr className="w-16 border-2 h-2 bg-gradient-to-tr from-[#57007B] to-[#F76680] mb-4 sm:mb-6" />
        <h1 className="text-2xl sm:text-3xl md:text-4xl flex flex-col gap-4">
          Featured <br /> <strong>Resources</strong>
        </h1>
      </div>

      <div className="mt-10 py-8 flex gap-10 justify-center items-center overflow-x-scroll scrollbar-hide">
        {featuredResources.map((item, index) => (
          <div key={index} className="w-[300px] flex flex-col gap-4">
            <div className="w-[300px] h-[200px] overflow-hidden rounded-lg">
              <Image
                src={item.img}
                alt="image"
                width={300}
                height={200}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h1 className="text-[#2D3748] font-semibold">{item.title}</h1>
            <button className="flex gap-4 justify-end items-center text-[#57007B] font-semibold">
              <h1>Read More</h1>
              <FaArrowRight />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedResources;
