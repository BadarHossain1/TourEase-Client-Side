
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';






const Banner = () => {
    return (
        <div className="rounded-2xl -z-20">
            <Swiper pagination={{
                dynamicBullets: true,
            }}
                modules={[Pagination]} className="mySwiper  w-full h-[500px] lg:h-[550px]  ">
                <SwiperSlide><div className="hero w-full h-[550px]" style={{ backgroundImage: 'url(https://i.ibb.co/8K1np8h/Banner1.jpg)' }}>


                    <div className="hero-overlay bg-opacity-50"></div>
                    <div className="z-0 flex w-[90%] text-left gap-4 p-2 " >

                        <div className="">
                            <p className="text-4xl  md:text-7xl  font-extrabold font-playfair-display text-[#fff]" > Explore Your <br />World </p>
                            <p className="text-white font-sans mt-4 font-normal ">Embark on Unforgettable Journeys: With TravelEase, <br /> Booking Accommodations, Resort Villas, <br /> and Hotels is a Breeze!</p>
                            <button className="transition duration-1000 ease-in-out"><a href="#spots" className="scroll-to-top-btn transition duration-3000 ease-out scroll-smooth btn btn-ghost bg-[#0057d9] text-white mt-4 ">
                                Tourist Spots
                            </a></button>
                        </div>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className="hero w-full h-[550px]" style={{ backgroundImage: 'url(https://i.ibb.co/NV6vc69/Rangamati-and-Banner4.jpg)' }}>
                    <div className="hero-overlay bg-opacity-50"></div>
                    <div className="z-0 flex w-[90%] text-left gap-4 p-2 " >

                        <div className="">
                            <p className="text-4xl  md:text-7xl  font-extrabold font-playfair-display text-[#fff]" > Explore Your <br />World </p>
                            <p className="text-white font-sans mt-4 font-normal ">Embark on Unforgettable Journeys: With TravelEase, <br /> Booking Accommodations, Resort Villas, <br /> and Hotels is a Breeze!</p>
                            <button className="transition duration-1000 ease-in-out"><a href="#spots" className="scroll-to-top-btn transition duration-3000 ease-out scroll-smooth btn btn-ghost bg-[#0057d9] text-white mt-4 ">
                                Tourist Spots
                            </a></button>
                        </div>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className="hero w-full h-[550px]" style={{ backgroundImage: 'url(https://i.ibb.co/PrMWDkM/Banner3.jpg)' }}>
                    <div className="hero-overlay bg-opacity-50"></div>
                    <div className="z-0 flex w-[90%] text-left gap-4 p-2 " >

                        <div className="">
                            <p className="text-4xl  md:text-7xl  font-extrabold font-playfair-display text-[#fff]" > Explore Your <br />World </p>
                            <p className="text-white font-sans mt-4 font-normal ">Embark on Unforgettable Journeys: With TravelEase, <br /> Booking Accommodations, Resort Villas, <br /> and Hotels is a Breeze!</p>
                            <button className="transition duration-1000 ease-in-out"><a href="#spots" className="scroll-to-top-btn transition duration-3000 ease-out scroll-smooth btn btn-ghost bg-[#0057d9] text-white mt-4 ">
                                Tourist Spots
                            </a></button>
                        </div>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className="hero w-full h-[550px]" style={{ backgroundImage: 'url(https://i.ibb.co/NV6vc69/Rangamati-and-Banner4.jpg)' }}>
                    <div className="hero-overlay bg-opacity-50"></div>
                    <div className="z-0 flex w-[90%] text-left gap-4 p-2 " >

                        <div className="">
                            <p className="text-4xl  md:text-7xl  font-extrabold font-playfair-display text-[#fff]" > Explore Your <br />World </p>
                            <p className="text-white font-sans mt-4 font-normal ">Embark on Unforgettable Journeys: With TravelEase, <br /> Booking Accommodations, Resort Villas, <br /> and Hotels is a Breeze!</p>
                            <button className="transition duration-1000 ease-in-out"><a href="#spots" className="scroll-to-top-btn transition duration-3000 ease-out scroll-smooth btn btn-ghost bg-[#0057d9] text-white mt-4 ">
                                Tourist Spots
                            </a></button>
                        </div>
                    </div>
                </div></SwiperSlide>


            </Swiper>
        </div>
    );
};

export default Banner;