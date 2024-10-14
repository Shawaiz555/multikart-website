import React, { useState, useEffect } from "react";
import ProductTimer from "../../Components/ProductTimer";
import Product from "../../Components/Product";
import { fetchAllProducts } from "../../store/products/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../store/CartDetails/CartDetailSlice";

export default function ProductDetails() {

  const [relatedProducts, setRelatedProducts] = useState([]);
  const [hoveredProductIndex, setHoveredProductIndex] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const dispatch = useDispatch();
  const Products = useSelector((state) => state.products.items);

  const { id } = useParams();
  const prodIndex = Products.findIndex((product) => product.id == id);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  useEffect(() => {
    if (prodIndex !== -1) {
      const currentProductCategory = Products[prodIndex]?.category?.name;
      const filteredRelatedProducts = Products?.filter(
        (product) =>
          product.category.name === currentProductCategory &&
          product.id !== Products[prodIndex].id
      );
      setRelatedProducts(filteredRelatedProducts);
      setSelectedImage(Products[prodIndex]?.images[0]);
    }
  }, [Products, prodIndex]);

  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () =>
    setQuantity((prevQuantity) => prevQuantity + 1);

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    if (prodIndex !== -1) {
      const product = Products[prodIndex];
      dispatch(
        addToCart({
          id: product.id,
          title: product.title,
          image: product.images[0],
          quantity,
          unitPrice: product.price,
        })
      );
    }
    alert("Product added to Cart Successfully!!");
  };

  const handleImageClick = (img) => {
    setSelectedImage(img);
  };

  return (
    <div className="pt-4 relative">
      {prodIndex === -1 ? (
        <div className="text-center text-4xl font-bold mt-10">
          <h1>No product selected!!!</h1>
        </div>
      ) : (
        <div className="flex gap-3 justify-center px-10 mt-16">
          <div className="w-[10%]">
            {Products[prodIndex]?.images.map((img, index) => (
              <div className="flex justify-end" key={index}>
                <button onClick={() => handleImageClick(img)}>
                  <img
                    src={img}
                    alt=""
                    className="w-[90px] h-[140px] object-fit mb-5 border border-gray-300 rounded-lg"
                  />
                </button>
              </div>
            ))}
          </div>
          <div className="w-[35%] mb-5 flex justify-center">
            <img
              src={selectedImage}
              alt=""
              className="w-full h-[650px] object-fit rounded-xl"
            />
          </div>
          <div className="w-[55%] px-9">
            <div className="border-b-[1px] border-gray-300 pb-7">
              <h1 className="text-3xl font-semibold tracking-wider text-orange-400">
                {Products[prodIndex]?.title}
              </h1>
              <div className="flex gap-4 mt-4">
                <p className="text-gray-400 line-through text-lg">$145</p>
                <h1 className="text-red-500 text-lg font-semibold">40% OFF</h1>
              </div>
              <h1 className="text-4xl mt-2 font-semibold">
                ${Products[prodIndex]?.price}
              </h1>
            </div>

            <div className="border-b-[1px] border-gray-300 pb-4">
              <div className="flex justify-between mt-6">
                <h1 className="text-xl font-semibold tracking-wide text-orange-400">
                  Select Size
                </h1>
                <h1 className="text-xl font-semibold tracking-wide text-orange-400">
                  Size Chart
                </h1>
              </div>
              <div className="flex gap-2 mt-4">
                <button className="border border-gray-400 px-3 py-1 rounded-[100%] hover:scale-90">
                  S
                </button>
                <button className="border border-gray-400 px-3 py-1 rounded-[100%] hover:scale-90">
                  M
                </button>
                <button className="border border-gray-400 px-3 py-1 rounded-[100%] hover:scale-90">
                  L
                </button>
              </div>
              <h1 className="text-red-500 font-semibold mt-3">In Stock</h1>
              <div className="mt-2">
                <h1 className="text-2xl font-semibold">Quantity</h1>
                <div className="flex gap-4 mt-4">
                  <button
                    className="text-sm border border-gray-400 px-3 py-1 rounded-[100%] hover:bg-gray-200 hover:scale-90"
                    onClick={decrementQuantity}
                  >
                    -
                  </button>
                  <p className="text-xl">{quantity}</p>
                  <button
                    className="text-sm border border-gray-400 px-3 py-1 rounded-[100%] hover:bg-gray-200 hover:scale-90"
                    onClick={incrementQuantity}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex gap-6 mt-4">
                <button
                  onClick={handleAddToCart}
                  className="bg-orange-400 font-semibold text-sm text-white px-7 py-2 rounded-xl hover:bg-orange-500 hover:scale-95"
                >
                  ADD TO CART
                </button>
                <button className="bg-orange-400 font-semibold text-sm text-white px-7 py-2 rounded-xl hover:bg-orange-500 hover:scale-95">
                  BUY NOW
                </button>
              </div>
            </div>
            <div className="mt-3 border-b-[1px] border-gray-300 pb-5">
              <h1 className="text-xl font-semibold text-orange-400 tracking-wider">
                Product Details
              </h1>
              <p className="text-gray-500 mt-1">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters,It is a long established fact
                that a reader will be distracted by the readable content of a
                page when looking at its layout. The point of using Lorem Ipsum
                is that it has a more-or-less normal distribution of letters.
              </p>
            </div>
            <div className="top-[3%] right-1 fixed">
              <ProductTimer />
            </div>
          </div>
        </div>
      )}

      <div className="w-full h-full flex justify-center my-10">
        <div className="w-[90%]">
          {/* Related Products Section */}
          <div className="border-b-[1px] border-gray-300 pb-3 mb-4">
            <h1 className="text-3xl font-bold tracking-wider text-gray-800">
              RELATED PRODUCTS
            </h1>
          </div>
          <div className="mb-5">
            {relatedProducts.length === 0 ? (
              <p className="text-center text-4xl font-bold">
                No related products available!!!
              </p>
            ) : (
              <div className="grid grid-cols-4 gap-1 w-full">
                {relatedProducts?.map((product, index) => (
                  <Product
                    key={index}
                    idx={index}
                    id={product.id}
                    image={product.images[0]}
                    title={product.title}
                    price={product.price}
                    hoverImage={product.images[1]}
                    hoveredProductIndex={hoveredProductIndex}
                    setHoveredProductIndex={setHoveredProductIndex}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
