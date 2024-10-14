import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../store/CartDetails/CartDetailSlice";

export default function CartDetail() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = cartItems.reduce((total, item) => total + item.quantity * item.unitPrice, 0);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="mt-5">
      <h1 className="text-5xl font-bold tracking-wider text-orange-400 text-center">CART TABLE</h1>
      
      {cartItems.length > 0 ? (
        <div className="overflow-x-auto w-full flex justify-center mt-5">
          <table className="min-w-[90%] table-auto mt-5">
            <thead>
              <tr className="bg-orange-400 text-white text-center rounded-lg">
                <th className="p-4 tracking-wider">Product Image</th>
                <th className="p-4 tracking-wider">Product Title</th>
                <th className="p-4 tracking-wider">Quantity</th>
                <th className="p-4 tracking-wider">Unit Price</th>
                <th className="p-4 tracking-wider">Remove Item</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index} className="bg-white border-b hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <div className="flex justify-center">
                      <img src={item.image} alt={item.title} className="w-16 h-20 object-fit" />
                    </div>
                  </td>
                  <td className="px-4 py-3 text-center tracking-wider">{item.title}</td>
                  <td className="px-4 py-3 text-center">{item.quantity}</td>
                  <td className="px-4 py-3 text-center font-semibold">${item.unitPrice}</td>
                  <td className="text-center">
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="bg-red-500 px-3 py-1 rounded-xl text-sm text-white font-bold tracking-wider hover:bg-red-600 hover:scale-95"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex justify-center mt-10">
          <p className="text-5xl font-bold">No Products In the Cart</p>
        </div>
      )}

      {cartItems.length > 0 && (
        <div className="w-full h-full flex justify-center mt-10">
          <div className="w-[60%] flex justify-between items-center bg-orange-400 px-10 py-6 rounded-md">
            <span className="text-xl font-bold flex gap-5">
              Total Price: <span className="text-xl text-white">${totalPrice.toFixed(2)}</span>
            </span>
            <button className="bg-white text-orange-400 px-6 py-2 rounded-lg font-bold hover:bg-black hover:text-white hover:scale-95">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
