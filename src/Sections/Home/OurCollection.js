import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { blogData } from "../../BlogData/BlogInfo";

export default function OurCollection() {
  const [filterBlogData, setFilterBlogData] = useState([]);

  useEffect(() => {
    setFilterBlogData(blogData);
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div>
        <div className="mt-12">
             <h1 className="text-2xl text-orange-500 font-semibold tracking-wide text-center">Our Collection</h1>
             <h1 className="text-5xl font-bold tracking-wide text-center">Special Products</h1>
        </div>
      <div className="relative w-full max-w-full mx-auto overflow-hidden mt-10 mb-10 px-3">
        <div className="slider-container">
          <Slider {...settings}>
            {filterBlogData.map((blog, idx) => {
              return (
                <div
                  className="w-full h-full grid grid-cols-3 gap-10 px-3"
                  key={blog.id || idx}
                >
                  <div className="overflow-hidden">
                  <img
                    src={blog.image}
                    alt=""
                    className="w-full object-cover transition-opacity duration-500 ease-in-out cursor-pointer hover:scale-110 hover:transition-transform hover:transition-[3s] rounded-lg"
                  />
                  </div>
                  
                  <h1 className="text-2xl text-orange-400 font-semibold text-center mt-3">
                    {blog.blogHead}
                  </h1>
                  <p className="text-lg text-gray-500 text-center font-semibold mt-3">
                    {blog.blogPara}
                  </p>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}
