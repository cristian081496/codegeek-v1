"use client";

import React from "react";
import Section from "./ui/Section";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import { ReviewsIOIcon, RibbonCheckIcon, StarIcon } from "./Icons";
import { REVIEWS } from "../data";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Reviews = () => {
  return <Section title="Trusted by Millions Worldwide" className="pt-8 pb-10 md:pt-11 md:pb-13">
    <>
      <div className="!mx-3 sm:!mx-10 relative group mb-[20px] sm:mb-[25px]">
        <div className="custom-nav-prev absolute left-[-15px] sm:left-[-40px] top-1/2 transform -translate-y-1/2 z-10 w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center cursor-pointer text-primary transition-all duration-300 hover:text-primary hover:opacity-70 bg-white/80 sm:bg-transparent rounded-full sm:rounded-none shadow-sm sm:shadow-none">
          <IoIosArrowBack className="text-xl" />
        </div>
        <div className="custom-nav-next absolute right-[-15px] sm:right-[-40px] top-1/2 transform -translate-y-1/2 z-10 w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center cursor-pointer text-primary transition-all duration-300 hover:text-primary hover:opacity-70 bg-white/80 sm:bg-transparent rounded-full sm:rounded-none shadow-sm sm:shadow-none">
          <IoIosArrowForward className="text-xl" />
        </div>
        <Swiper
          navigation={{
            prevEl: '.custom-nav-prev',
            nextEl: '.custom-nav-next',
          }}
          slidesPerView={1}
          spaceBetween={15}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
          }}
          loop={true}
          modules={[Navigation]}
          className="swiper-review">

          {REVIEWS.map((review, i) => (
            <SwiperSlide key={i} className="flex items-center p-1 sm:p-2">
              <div className="w-full">
                <div className="rounded-xl shadow-md border-1 border-[#f3f3f3] p-4 sm:p-6 pb-5 sm:pb-7 h-[180px] sm:h-[190px]">
                  <div className="flex flex-col justify-between h-full">

                    <div>
                      <div className="flex items-center gap-2">
                        <div className="text-[11px] sm:text-xs font-bold">{review.name}</div>
                        <div className="flex gap-[2px]">
                          {Array.from({ length: review.rating }).map((_, index) => (
                            <StarIcon key={`star-${index}`} className="text-[#f7b635]" />
                          ))}

                          {Array.from({ length: 5 - review.rating }).map((_, index) => (
                            <StarIcon key={`none-${index}`} className="text-[#d1d5db]" />
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center gap-1 mb-[5px] mt-[2px] ml-[2px]">
                        <div className="text-xs"><RibbonCheckIcon className="text-primary text-xs mt-1" size={13} /></div>
                        <div className="text-[11px] mt-1">Verified Customer</div>
                      </div>

                      <div className="text-xs sm:text-sm text-[#2C3345] line-clamp-4">{review.review}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[11px] mt-1">{review.location}, {review.date}</div>
                    </div>

                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="pr-3 flex justify-center sm:block pt-2 sm:pt-0">
        <ReviewsIOIcon />
      </div>
    </>
  </Section>;
};

export default Reviews;
