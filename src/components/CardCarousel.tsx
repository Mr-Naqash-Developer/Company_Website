"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { cards } from "@/data/card";
import Image from "next/image";

export default function CardCarousel() {
  return (
    <div className="max-w-6xl mx-auto pt-10">
      <Swiper
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={3}
        centeredSlides={true} // keep centered active card
        pagination={{
          clickable: true,
          el: ".custom-pagination",
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        onInit={(swiper) => {
          const total = swiper.slides.length;
          document.querySelector(".custom-fraction-total")!.textContent = total
            .toString()
            .padStart(2, "0");
          document.querySelector(".custom-fraction-current")!.textContent = (
            swiper.realIndex + 1
          )
            .toString()
            .padStart(2, "0");

          const progress = ((swiper.realIndex + 1) / total) * 100;
          (
            document.querySelector(".swiper-pagination-progress") as HTMLElement
          ).style.width = `${progress}%`;
        }}
        onSlideChange={(swiper) => {
          document.querySelector(".custom-fraction-current")!.textContent = (
            swiper.realIndex + 1
          )
            .toString()
            .padStart(2, "0");

          const total = swiper.slides.length;
          const progress = ((swiper.realIndex + 1) / total) * 100;
          (
            document.querySelector(".swiper-pagination-progress") as HTMLElement
          ).style.width = `${progress}%`;
        }}
        breakpoints={{
          320: { slidesPerView: 1, centeredSlides: true },
          768: { slidesPerView: 2, centeredSlides: true },
          1024: { slidesPerView: 3, centeredSlides: true },
        }}
      >
        {cards.map((item) => (
          <SwiperSlide key={item.id}>
            {({ isActive }) => (
              <div
                className={`flex flex-col gap-5 rounded-lg p-6 transition-all duration-300
                ${
                  isActive
                    ? "bg-white shadow-lg border-2 border-pink-500 translate-y-2"
                    : "bg-white shadow-md border border-gray-200"
                }`}
              >
                {/* Gradient border with ring */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-pink-500 to-blue-500 p-[2px]">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center ring-1 ring-transparent">
                    <Image
                      width={48}
                      height={48}
                      src={item.img}
                      alt={item.title}
                      className="rounded-full object-cover"
                    />
                  </div>
                </div>

                <h1
                  className={`font-bold text-xl ${
                    isActive ? "text-pink-600" : "text-[#2D3748]"
                  }`}
                >
                  {item.title}
                </h1>
                <p className="text-[#718096] text-sm">{item.description}</p>
              </div>
            )}
          </SwiperSlide>
        ))}

        {/* Pagination row: 1fr | dots | fraction | 1fr */}
        <div className="mt-10 grid grid-cols-[1fr_auto_auto_1fr] items-center">
          {/* Dots (centered on the page) */}
          <div
            className="custom-pagination col-start-2 justify-self-center flex gap-2
              [&>.swiper-pagination-bullet]:w-3
              [&>.swiper-pagination-bullet]:h-3
              [&>.swiper-pagination-bullet]:rounded-full
              [&>.swiper-pagination-bullet]:bg-gray-500
              [&>.swiper-pagination-bullet-active]:bg-gradient-to-tr
              [&>.swiper-pagination-bullet-active]:from-[#57007B]
              [&>.swiper-pagination-bullet-active]:to-[#F76680]"
          ></div>

          {/* Fraction + progress (immediately to the right of dots) */}
          <div className="col-start-3 ml-6 flex items-center gap-4 text-[#57007B]">
            <span className="custom-fraction-current text-lg font-semibold">
              01
            </span>
            <div className="w-32 h-[3px] bg-gray-200 relative overflow-hidden">
              <div className="swiper-pagination-progress absolute left-0 top-0 h-full bg-[#57007B] transition-[width] duration-300"></div>
            </div>
            <span className="custom-fraction-total text-lg font-semibold">
              05
            </span>
          </div>
        </div>
      </Swiper>
    </div>
  );
}
