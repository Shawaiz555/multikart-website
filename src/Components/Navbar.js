import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex justify-around pt-1 pb-1">
      <div>
        <h1 className="text-5xl tracking-wider font-bold pt-3">
          <b className="text-orange-400">M</b>ulti
          <b className="text-orange-400">K</b>art
        </h1>
      </div>
      <div>
        <ul className="flex gap-16 py-5 px-2">
          <li className="text-lg font-semibold mt-1 tracking-wider hover:scale-95">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-orange-400" : "hover:text-orange-400"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="text-lg font-semibold mt-1 tracking-wider hover:scale-95">
            <NavLink
              to="/Shop"
              className={({ isActive }) =>
                isActive ? "text-orange-400" : "hover:text-orange-400"
              }
            >
              Shop
            </NavLink>
          </li>
          <li className="text-lg font-semibold mt-1 tracking-wider hover:scale-95">
            <NavLink
              to="/Products"
              className={({ isActive }) =>
                isActive ? "text-orange-400" : "hover:text-orange-400"
              }
            >
              ProductDetail
            </NavLink>
          </li>
          <li>
            <NavLink to="/Cart">
            <button className="bg-orange-400 px-7 py-1 rounded-lg hover:bg-orange-600 hover:scale-95">
              <img src="/Icons/CartIcon.png" alt="" className="w-6 h-6 mt-1" />
            </button>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
