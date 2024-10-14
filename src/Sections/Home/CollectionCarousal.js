import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Product from "../../Components/Product";
import { useDispatch,useSelector } from "react-redux";
import { fetchAllProducts } from "../../store/products/productSlice";

export default function CollectionCarousal() {
  const [filteredproducts, setFilterProducts] = useState([]);
  const [hoveredProductIndex, setHoveredProductIndex] = useState(null);
  const dispatch = useDispatch();
  const Products = useSelector((state) => state.products.items);

  useEffect(()=>
  {
      dispatch(fetchAllProducts());

  },[dispatch])

  useEffect(() => {
    // Filter the New Arrival products and set them in state
    const newArrivalProducts = Products?.filter(
      (product) => product.category.name === "Miscellaneous"
    );
    setFilterProducts(newArrivalProducts);
  }, [Products]);


  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="relative w-full max-w-full mx-auto overflow-hidden mt-8 mb-8 px-5">
      <div className="slider-container">
        <Slider {...settings}>
          {filteredproducts?.map((item, idx) => (
            <Product
              key={idx}
              idx={idx}
              id={item.id}
              image={item.images[0]}
              title={item.title}
              price = {item.price}
              hoverImage={item.images[1]}
              hoveredProductIndex={hoveredProductIndex}
              setHoveredProductIndex={setHoveredProductIndex}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}
