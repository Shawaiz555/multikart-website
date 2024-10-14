import React, { useState, useEffect } from "react";
import Product from "../../Components/Product";
import { useDispatch,useSelector } from "react-redux";
import { fetchAllProducts } from "../../store/products/productSlice";

export default function ExclusiveProducts() {
  const [activeCategory, setActiveCategory] = useState("Miscellaneous");
  const [filteredproducts, setFilterProducts] = useState([]);
  const [hoveredProductIndex, setHoveredProductIndex] = useState(null);
  const dispatch = useDispatch();
  const Products = useSelector((state) => state.products.items);

  useEffect(()=>
  {
      dispatch(fetchAllProducts());

  },[dispatch])

  useEffect(()=>
  {
    setActiveCategory("Miscellaneous");
    const newArrivalProducts = Products?.filter(
      (product) => product.category.name === "Miscellaneous"
    );
    setFilterProducts(newArrivalProducts);
  },[Products])


  const handleNewArrivalProducts = () => {
    setActiveCategory("Electronics");
    const newArrivalProducts = Products?.filter(
      (product) => product.category.name === "Electronics"
    );
    setFilterProducts(newArrivalProducts);
  };

  const handleFeaturedProducts = () => {
    setActiveCategory("Shoes");
    const featuredProducts = Products?.filter(
      (product) => product.category.name === "Shoes"
    );
    setFilterProducts(featuredProducts);
  };

  const handleSpecialProducts = () => {
    setActiveCategory("Miscellaneous");
    const specialProducts = Products?.filter(
      (product) => product.category.name === "Miscellaneous"
    );
    setFilterProducts(specialProducts);
  };

  return (
    <div>
      <div>
        <p className="text-orange-400 text-2xl tracking-wide font-semibold text-center ml-4">
          Exclusive Products
        </p>
        <h1 className="text-5xl font-bold text-center tracking-wide ml-4 mt-1">
          SPECIAL PRODUCTS
        </h1>
        <div className="flex justify-center mt-3 mb-4 px-3">
          <ul className="flex gap-10 text-lg tracking-wide">
          <li>
              <button
                className={`${
                  activeCategory === "Miscellaneous"
                    ? "text-orange-400 font-bold"
                    : ""
                }`}
                onClick={handleSpecialProducts}
              >
                MISCELLANEOUS
              </button>
            </li>
            <li>
              <button
                className={`${
                  activeCategory === "Shoes"
                    ? "text-orange-400 font-bold"
                    : ""
                }`}
                onClick={handleFeaturedProducts}
              >
                SHOES
              </button>
            </li>
            <li>
              <button
                className={`${
                  activeCategory === "Electronics"
                    ? "text-orange-400 font-bold"
                    : ""
                }`}
                onClick={handleNewArrivalProducts}
              >
                ELECTRONICS
              </button>
            </li>
            
          </ul>
        </div>

        <div className="mb-5">
          {filteredproducts.length === 0 ? (
            <p className="text-center text-4xl font-bold">
              No products available!!!
            </p>
          ) : (
            <div className="grid grid-cols-4 gap-8 w-full px-7">
              {filteredproducts?.map((product, index) => (
                <Product
                key={index}
                idx={index}
                id={product.id}
                image={product.images[0]}
                title={product.title}
                price = {product.price}
                hoverImage={product.images[1]}
                hoveredProductIndex={hoveredProductIndex}
                setHoveredProductIndex={setHoveredProductIndex}
              />
              ))}
            </div>
          )}
        </div>

        <div className="w-full h-full flex justify-center mt-14 mb-10">
          <div className="w-[90%] border-t-2 border-b-2">
            <div className="flex justify-around">
              <div className="flex gap-2 mt-7 mb-7">
                <div>
                  <img src={"/Icons/ShippingIcon.png"} alt="" className="w-14 h-14" />
                </div>
                <div>
                  <h1 className="text-xl font-bold tracking-wider">
                    FREE SHIPPING
                  </h1>
                  <p className="text-md text-gray-500">
                    Free Shipping World Wide
                  </p>
                </div>
              </div>
              <div className="flex gap-2 mt-7 mb-7">
                <div>
                  <img src={"/Icons/24TimerIcon.png"} alt="" className="w-14 h-14" />
                </div>
                <div>
                  <h1 className="text-xl font-bold tracking-wider">
                    24 X 7 SERVICE
                  </h1>
                  <p className="text-md text-gray-500">
                    Online service for 24 x 7
                  </p>
                </div>
              </div>
              <div className="flex gap-2 mt-7 mb-7">
                <div>
                  <img
                    src={"/Icons/FestivalOfferIcon.png"}
                    alt=""
                    className="w-14 h-14"
                  />
                </div>
                <div>
                  <h1 className="text-xl font-bold tracking-wider">
                    FESTIVAL OFFER
                  </h1>
                  <p className="text-md text-gray-500">
                    New online special festival offer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
