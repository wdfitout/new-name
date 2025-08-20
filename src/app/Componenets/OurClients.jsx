"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y } from "swiper/modules"; // dropped Navigation module
import "swiper/css";

const logos = [
  "/images/icon(1).png",
  "/images/icon(2).png",
  "/images/icon(3).png",
  "/images/icon(4).png",
  "/images/icon(5).png",
  "/images/icon(6).png",
  "/images/icon(7).png",
  "/images/icon(8).png",
];

export default function OurClients() {
  // keep a swiper instance and control via click handlers (no refs)
  const [swiper, setSwiper] = useState(null);
  const uid = useMemo(() => Math.random().toString(36).slice(2), []);

  return (
    <section className="bg-white py-10 px-4 sm:px-8 lg:px-16 text-center text-black">
      {/* Heading */}
      <div className="mb-8">
        <h2 className="mt-10 text-sm sm:text-xl tracking-widest font-conthrax">
          SOME OF OUR CLIENTS
        </h2>
      </div>

      {/* Carousel */}
      <div className="relative max-w-6xl mx-auto">
        <Swiper
          modules={[Autoplay, A11y]}
          loop
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          spaceBetween={16}
          slidesPerView={3}
          breakpoints={{
            640: { slidesPerView: 3, spaceBetween: 24 }, // ~ 33%
            768: { slidesPerView: 4, spaceBetween: 24 }, // ~ 25%
            1024: { slidesPerView: 5, spaceBetween: 32 }, // ~ 20%
          }}
          onSwiper={(instance) => setSwiper(instance)}
          className="!px-2"
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={`${uid}-${index}`} className="flex items-center justify-center">
              <div className="w-full flex items-center justify-center">
                <Image
                  src={logo}
                  alt={`Client logo ${index + 1}`}
                  width={400}
                  height={240}
                  className="object-contain w-full h-auto max-h-48"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows (controlled via swiper instance) */}
        <button
          onClick={() => swiper && swiper.slidePrev()}
          className="absolute -left-4 sm:-left-8 lg:-left-12 top-1/2 -translate-y-1/2 text-black text-4xl p-1 hover:text-[#a16848] z-10"
          aria-label="Scroll Previous"
        >
          <HiOutlineChevronLeft />
        </button>
        <button
          onClick={() => swiper && swiper.slideNext()}
          className="absolute -right-4 sm:-right-8 lg:-right-12 top-1/2 -translate-y-1/2 text-black text-4xl p-1 hover:text-[#a16848] z-10"
          aria-label="Scroll Next"
        >
          <HiOutlineChevronRight />
        </button>
      </div>
    </section>
  );
}