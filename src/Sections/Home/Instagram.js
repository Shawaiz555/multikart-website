import React, { useState } from "react";

export default function Instagram() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [logoHoveredIndex, setlogoHoveredIndex] = useState(null);
  const instaImages = [
    "/Insta Images/Instaimg1.jpg",
    "/Insta Images/Instaimg2.jpg",
    "/Insta Images/Instaimg3.jpg",
    "/Insta Images/Instaimg4.jpg",
    "/Insta Images/Instaimg5.jpg",
    "/Insta Images/Instaimg6.jpg",
    "/Insta Images/Instaimg7.jpg",
  ];

  const sponseredImages = [
    "/Sponser Logos/Sponserlogo1.png",
    "/Sponser Logos/Sponserlogo2.png",
    "/Sponser Logos/Sponserlogo3.png",
    "/Sponser Logos/Sponserlogo4.png",
    "/Sponser Logos/Sponserlogo5.png",
    "/Sponser Logos/Sponserlogo6.png",
  ];

  return (
    <div className="mt-16">
      <h1 className="text-4xl font-bold text-center"># INSTAGRAM</h1>
      <div className="grid grid-cols-7 overflow-hidden mt-10 mb-10 gap-4">
        {instaImages.map((image, index) => (
          <div
            key={index}
            className="relative w-[215px] h-[215px] overflow-hidden"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={image}
              alt=""
              className={`w-full h-full object-cover transition-all duration-300 ${
                hoveredIndex === index ? "opacity-50" : ""
              }`}
            />
            <div
              className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                hoveredIndex === index
                  ? "bg-orange-400 opacity-60 cursor-pointer"
                  : "opacity-0"
              }`}
            >
              <p className="text-white tracking-wide font-semibold text-lg">
                Follow me
              </p>
              <button>
                <img src="/Icons/Instalogo.png" alt="" className="w-8 h-8" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-around px-16 mb-16">
        {sponseredImages.map((image, idx) => (
          <div
            key={image.id || idx}
            onMouseEnter={() => setlogoHoveredIndex(idx)}
            onMouseLeave={() => setlogoHoveredIndex(null)}
          >
            <img
              src={image}
              alt=""
              className={`w-[120px] ${
                logoHoveredIndex === idx
                  ? "opacity-100 cursor-pointer"
                  : "opacity-50"
              }`}
            />
          </div>
        ))}
      </div>

      
    </div>
  );
}
