import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function HeaderSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false); // State to track hover

  const slides = [
    {
      image: "/Background Images/Headerbgimg1.jpg",
      title: "Welcome to Fashion",
      description: "MEN FASHION",
    },
    {
      image: "/Background Images/Headerbgimg2.jpg",
      title: "Welcome to Fashion",
      description: "WOMEN FASHION",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="mt-2">
      <div
        className="relative w-full h-full max-w-full mx-auto"
        onMouseEnter={() => setIsHovered(true)} // Set hover state to true
        onMouseLeave={() => setIsHovered(false)} // Set hover state to false
      >
        <div className="overflow-hidden relative w-full h-[580px]">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-transform duration-[1s] ${
                index === currentSlide ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="w-1/2 absolute top-[30%] right-[20%] inset-0 text-black p-10 ml-20">
                <p className="mb-2 text-2xl text-gray-500 tracking-widest font-semibold text-center">
                  {slide.title}
                </p>
                <h1 className="text-7xl font-bold mb-6 tracking-wider text-center">
                  {slide.description}
                </h1>
                <div className="flex justify-center">
                  <NavLink to="/Shop">
                    <button className="bg-orange-400 tracking-wider font-serif hover:bg-orange-600 text-white py-2 px-6 rounded-xl hover:scale-95">
                      Shop Now
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Buttons with Icons */}
        <button
          onClick={prevSlide}
          className={`absolute left-[4%] top-[50%] transform -translate-y-1/2 text-white p-3 transition-opacity duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          } hover:scale-110`}
        >
          <img
            src="/Icons/BackArrow.png"
            alt="Previous Slide"
            className="w-10 h-10"
          />
        </button>

        <button
          onClick={nextSlide}
          className={`absolute right-[4%] top-[50%] transform -translate-y-1/2 text-white p-3 transition-opacity duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          } hover:scale-110`}
        >
          <img
            src="/Icons/ForwardArrow.png"
            alt="Next Slide"
            className="w-10 h-10"
          />
        </button>
      </div>

      <div className="w-full h-full flex gap-4 justify-center mt-5">
        <div className="w-[95%] flex justify-around py-14">
          <div className="relative overflow-hidden">
            <img
              src="/Banners/SaleBanner1.jpg"
              alt=""
              className="w-full object-cover cursor-pointer hover:scale-110 hover:transition-transform hover:transition-[3s] rounded-lg"
            />
            <div className="absolute top-[30%] left-[65%]">
              <p className="text-red-500 font-serif  text-xl font-semibold text-center">
                10% OFF
              </p>
              <h1 className="text-6xl text-center font-bold tracking-widest">
                MEN
              </h1>
            </div>
          </div>
          <div className="relative overflow-hidden">
            <img
              src="/Banners/SaleBanner2.jpg"
              alt=""
              className="w-full object-cover cursor-pointer hover:scale-110 hover:transition-transform hover:transition-[3s] rounded-lg"
            />
            <div className="absolute top-[30%] left-[52%]">
              <p className="text-red-500 font-serif text-xl font-semibold text-center">
                10% OFF
              </p>
              <h1 className="text-6xl text-center font-bold tracking-widest">
                WOMEN
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
