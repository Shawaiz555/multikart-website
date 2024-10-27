import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  updateItemQuantity,
  checkout,
} from "../../store/CartDetails/CartDetailSlice";

export default function CartDetail() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.quantity * item.unitPrice,
    0
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  // States for user and bank info
  const [userInfo, setUserInfo] = useState({ name: "", email: "" });
  const [bankInfo, setBankInfo] = useState({
    bankName: "",
    accountNumber: "",
    ifscCode: "",
  });

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleIncrement = (id, quantity) => {
    dispatch(updateItemQuantity({ id, quantity: quantity + 1 }));
  };

  const handleDecrement = (id, quantity) => {
    if (quantity > 1) {
      dispatch(updateItemQuantity({ id, quantity: quantity - 1 }));
    }
  };

  const handleCheckout = () => {
    const checkoutDetail = {
      userInfo,
      bankInfo,
      items: cartItems,
      totalPrice: totalPrice.toFixed(2),
    };
    localStorage.setItem("checkoutDetail", JSON.stringify(checkoutDetail));
    dispatch(checkout());
    alert("Items bought successfully!!!");
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="mt-5">
      <h1 className="text-5xl font-bold tracking-wider text-orange-400 text-center">
        CART TABLE
      </h1>

      {cartItems.length > 0 ? (
        <div className="overflow-x-auto w-full flex justify-center mt-5">
          <table className="min-w-[90%] table-auto mt-5">
            {/* Table header */}
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
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-16 h-20 object-fit"
                      />
                    </div>
                  </td>
                  <td className="px-4 py-3 text-center tracking-wider">
                    {item.title}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <div className="flex items-center justify-center space-x-2">
                      <button
                        onClick={() => handleDecrement(item.id, item.quantity)}
                        className="bg-gray-100 px-3 py-1 rounded-lg hover:scale-95"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => handleIncrement(item.id, item.quantity)}
                        className="bg-gray-100 px-3 py-1 rounded-lg hover:scale-95"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-center font-semibold">
                    ${item.unitPrice}
                  </td>
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
          <div className="w-[70%] flex justify-between items-center bg-orange-400 px-10 py-6 rounded-md">
            <span className="text-xl font-bold flex gap-5">
              Total Price:{" "}
              <span className="text-xl text-white">
                ${totalPrice.toFixed(2)}
              </span>
            </span>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-orange-400 px-6 py-2 rounded-lg font-bold hover:bg-black hover:text-white hover:scale-95"
            >
              Checkout
            </button>
          </div>
        </div>
      )}

      {/* Checkout Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] md:w-[70%] transition duration-500 ease-in-out transform">
            <h2 className="text-4xl font-bold text-center mb-5 text-orange-400">
              Checkout
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 font-bold">Name</label>
                <input
                  type="text"
                  value={userInfo.name}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, name: e.target.value })
                  }
                  className="w-full p-2 border rounded"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block mb-2 font-bold">Email</label>
                <input
                  type="email"
                  value={userInfo.email}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, email: e.target.value })
                  }
                  className="w-full p-2 border rounded"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block mb-2 font-bold">Bank Name</label>
                <input
                  type="text"
                  value={bankInfo.bankName}
                  onChange={(e) =>
                    setBankInfo({ ...bankInfo, bankName: e.target.value })
                  }
                  className="w-full p-2 border rounded"
                  placeholder="Enter your bank name"
                />
              </div>
              <div>
                <label className="block mb-2 font-bold">Account Number</label>
                <input
                  type="text"
                  value={bankInfo.accountNumber}
                  onChange={(e) =>
                    setBankInfo({
                      ...bankInfo,
                      accountNumber: e.target.value,
                    })
                  }
                  className="w-full p-2 border rounded"
                  placeholder="Enter your account number"
                />
              </div>
              <div>
                <label className="block mb-2 font-bold">IFSC Code</label>
                <input
                  type="text"
                  value={bankInfo.ifscCode}
                  onChange={(e) =>
                    setBankInfo({ ...bankInfo, ifscCode: e.target.value })
                  }
                  className="w-full p-2 border rounded"
                  placeholder="Enter your IFSC code"
                />
              </div>
            </div>

            <div className="mt-5 flex justify-between items-center">
              <span className="font-bold text-xl">
                Total: ${totalPrice.toFixed(2)}
              </span>
              <div className="space-x-3">
                <button
                  onClick={handleCheckout}
                  className="bg-orange-400 text-white px-6 py-2 rounded-lg font-bold hover:bg-black hover:scale-95"
                >
                  Buy Now
                </button>
                <button
                  onClick={handleCancel}
                  className="bg-gray-400 text-white px-6 py-2 rounded-lg font-bold hover:bg-black hover:scale-95"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
