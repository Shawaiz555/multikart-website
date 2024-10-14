import { useEffect } from "react";
import React, { useState } from "react";
import Product from "../../Components/Product";
import { useDispatch,useSelector } from "react-redux";
import { fetchAllProducts } from "../../store/products/productSlice";

export default function StylishWomenFashion() {
  const [productsPerPage, setProductsPerPage] = useState(8); // Default value
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false); // Sorting dropdown
  
  const [hoveredProductIndex, setHoveredProductIndex] = useState(null);
  const [selectedSort, setSelectedSort] = useState("Default"); // Default sorting

  const dispatch = useDispatch();
  const Products = useSelector((state) => state.products.items);
  const [visibleProducts, setVisibleProducts] = useState(
    Products.slice(0, productsPerPage)
  ); // Displayed products

  useEffect(()=>
  {
      dispatch(fetchAllProducts());

  },[dispatch])

  // Options for products per page
  const productOptions = [8, 16, 24, 48];

  // Sorting options
  const sortingOptions = ["Default", "Low to High", "High to Low"];

  // Toggle dropdown functions
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleSortDropdown = () => setIsSortDropdownOpen(!isSortDropdownOpen);

  // Sort products by price or new arrival
  

  // Handle sorting and products per page dropdown selections
  useEffect(() => {
    const sortProducts = (sortOption) => {
      const sortedProducts = [...Products];
      if (sortOption === "Low to High") {
        sortedProducts.sort((a, b) => a.price - b.price);
      } else if (sortOption === "High to Low") {
        sortedProducts.sort((a, b) => b.price - a.price);
      }
      setVisibleProducts(sortedProducts.slice(0, productsPerPage));
    };
    sortProducts(selectedSort);
  }, [selectedSort, productsPerPage,Products]);

  // Handle loading more products
  const loadMoreProducts = () => {
    const nextProducts = visibleProducts.length + 8;
    setVisibleProducts(Products.slice(0, nextProducts));
  };

  return (
    <div className="mt-5">
      <div className="flex justify-center">
        <img
          src="/Background Images/StylishWomenFashionimg.jpg"
          alt="Fashion"
          className="w-[90%] h-full rounded-xl"
        />
      </div>

      <div className="mt-10 mb-10 flex justify-center">
        <div className="w-[90%]">
          <h1 className="text-2xl text-orange-400 font-semibold tracking-wider">
            Fashion
          </h1>
          <p className="text-lg font-semibold mt-1">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className="text-md text-gray-500 mt-1">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the <b>1500s </b>, when an unknown printer took a galley
            of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the <b>1960s </b> with the release of Letraset sheets containing
            Lorem Ipsum passages, and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>

      {/* Filters and Dropdowns */}
      <div className="w-full flex justify-center mb-10">
        <div className="w-[90%] flex justify-between relative z-10">
          <div className="rounded-lg px-3 py-2">
            <h1 className="text-md font-semibold">
              Showing Products{" "}
              <b className="text-orange-400 font-semibold">{visibleProducts.length}</b> of{" "}
              <b className="text-orange-400 font-semibold">{Products.length} </b>
              Results
            </h1>
          </div>

          <div className="flex gap-4">
            {/* Products per page dropdown */}
            <div className="relative inline-block text-center z-20">
              <button
                onClick={toggleDropdown}
                className="inline-flex justify-center w-full rounded-md border border-orange-400 shadow-sm px-4 py-2 bg-orange-400 text-white text-sm font-medium hover:bg-orange-500"
              >
                Products Per Page
                <svg
                  className="-mr-1 ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M5.292 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white z-20">
                  {productOptions.map((option) => (
                    <button
                      key={option}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-white hover:text-orange-500"
                      onClick={() => {
                        setProductsPerPage(option);
                        setIsDropdownOpen(false);
                      }}
                    >
                      Show {option} Products
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Sorting dropdown */}
            <div className="relative inline-block text-center z-20">
              <button
                onClick={toggleSortDropdown}
                className="inline-flex justify-center w-full rounded-md border border-orange-400 shadow-sm px-4 py-2 text-white bg-orange-400 text-sm font-medium hover:bg-orange-500"
              >
                Sort by: {selectedSort}
                <svg
                  className="-mr-1 ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M5.292 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </button>
              {isSortDropdownOpen && (
                <div className="absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white z-20">
                  {sortingOptions.map((option) => (
                    <button
                      key={option}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-white hover:text-orange-500"
                      onClick={() => {
                        setSelectedSort(option);
                        setIsSortDropdownOpen(false);
                      }}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="mb-5">
        {visibleProducts.length === 0 ? (
          <p className="text-center text-4xl font-bold">
            No products available!!!
          </p>
        ) : (
          <div className="grid grid-cols-4 gap-8 w-full px-12">
            {visibleProducts.map((product, index) => (
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

      {/* Load More Button */}
      {visibleProducts.length < Products.length && (
        <div className="flex justify-center my-8">
          <button
            onClick={loadMoreProducts}
            className="bg-orange-400 tracking-wider text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-all duration-300 hover:scale-95"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
