import React from "react";
import { useNavigate } from "react-router-dom";

export default function Product({
  idx,
  id,
  image,
  title,
  price,
  hoverImage,
  hoveredProductIndex,
  setHoveredProductIndex,
}) 
{

  const navigate = useNavigate();
  const productNavigation = (id)=>
  {
      navigate(`/Products/${id}`);
  }
  return (
    
    <div
      key={idx}
      className="flex flex-col items-start relative overflow-hidden px-2"
      onMouseEnter={() => setHoveredProductIndex(idx)}
      onMouseLeave={() => setHoveredProductIndex(null)}
    >
      {/* Image with smooth hover transition */}
      <div className="relative w-full h-full" onClick={()=>productNavigation(id)}>
        <img
          src={image}
          alt={title}
          className={`w-full h-[460px] object-fit transition-opacity duration-500 ease-in-out rounded-xl ${
            hoveredProductIndex === idx ? "opacity-0" : "opacity-100"
          }`}
        />
        <img
          src={hoverImage}
          alt={title}
          className={`w-full h-[460px] object-fit absolute top-0 left-0 transition-opacity duration-500 ease-in-out hover:cursor-pointer rounded-xl ${
            hoveredProductIndex === idx ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      {/* Star Rating */}
      <div className="flex mt-3">
        <img src="/Icons/FilledStar.png" alt="" className="w-5 h-5" />
        <img src="/Icons/FilledStar.png" alt="" className="w-5 h-5" />
        <img src="/Icons/FilledStar.png" alt="" className="w-5 h-5" />
        <img src="/Icons/FilledStar.png" alt="" className="w-5 h-5" />
        <img src="/Icons/EmptyStar.png" alt="" className="w-5 h-5" />
      </div>

      {/* Product Description */}
      <p className="mt-1 text-left text-xl text-orange-400 font-serif tracking-wider hover:cursor-pointer" onClick={()=>productNavigation(id)}>
        {title}
      </p>

      {/* Price Section */}
      <div className="mt-1">
        <p className="text-red-400 text-xl tracking-wide">
        ${price}
        </p>
      </div>

    </div>
  );
}
