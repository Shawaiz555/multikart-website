import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="w-full mt-10 py-7 border border-t-[1px] border-gray-200 bg-orange-400">
      <div className="w-full grid grid-cols-4 justify-around gap-5 px-14 py-5">
        <div>
          <h1 className="text-4xl text-center tracking-widest font-bold">
            <b className="text-white">M</b>ulti
            <b className="text-white">K</b>art
          </h1>
          <p className="mt-8 text-md text-white text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,
          </p>
          <div className="flex justify-center gap-5 mt-8">
            <button>
              <img
                src="/Icons/FacebookLogo.png"
                alt=""
                className="w-6 h-6 hover:scale-90"
              />
            </button>
            <button>
              <img
                src="/Icons/EmailLogo.png"
                alt=""
                className="w-8 h-8 hover:scale-90"
              />
            </button>
            <button>
              <img
                src="/Icons/TwitterLogo.png"
                alt=""
                className="w-6 h-6 hover:scale-90"
              />
            </button>
            <button>
              <img
                src="/Icons/InstaLogo.png"
                alt=""
                className="w-10 h-10 hover:scale-90"
              />
            </button>
          </div>
        </div>
        <div className="mt-2">
          <h1 className="text-2xl text-white text-center font-bold tracking-wide">
            MY ACCOUNT
          </h1>
          <ul className="grid gap-3 text-white text-center mt-7 tracking-wider">
            <li className="hover:text-black">
              <Link to="/">Women</Link>
            </li>
            <li className="hover:text-black">
              <Link to="/">Clothing</Link>
            </li>
            <li className="hover:text-black">
              <Link to="/">Accessories</Link>
            </li>
            <li className="hover:text-black">
              <Link to="/">Featured</Link>
            </li>
          </ul>
        </div>
        <div className="mt-2">
          <h1 className="text-2xl text-white text-center font-bold tracking-wide">
            WHY WE CHOOSE
          </h1>
          <ul className="grid gap-3 text-white text-center mt-7 tracking-wider">
            <li className="hover:text-black">
              <Link to="/">Shipping & Return</Link>
            </li>
            <li className="hover:text-black">
              <Link to="/">Secure Shopping</Link>
            </li>
            <li className="hover:text-black">
              <Link to="/">Gallary</Link>
            </li>
            <li className="hover:text-black">
              <Link to="/">Affiliates</Link>
            </li>
            <li className="hover:text-black">
              <Link to="/">Contacts</Link>
            </li>
          </ul>
        </div>
        <div className="mt-2">
          <h1 className="text-2xl text-white font-bold tracking-wide">
            STORE INFORMATION
          </h1>
          <div className="w-full mt-3 flex justify-center">
            <div className="w-full">
              <div className="mt-4 flex gap-4">
                <img src="/Icons/LocationLogo.png" alt="" className="w-8 h-8 mt-2" />
                <p className="text-white">
                  Multikart Demo Store, Demo store India 345-659
                </p>
              </div>
              <div className="mt-4 flex gap-4">
                <img src="/Icons/CallLogo.png" alt="" className="w-8 h-7" />
                <p className="text-white">Call Us: 123-456-7898</p>
              </div>
              <div className="mt-4 flex gap-4">
                <img src="/Icons/EmailLogo.png" alt="" className="w-8 h-8" />
                <p className="text-white">Email Us: Support@Fiot.com</p>
              </div>
              <div className="mt-4 flex gap-4">
                <img src="/Icons/FaxLogo.png" alt="" className="w-8 h-7" />
                <p className="text-white">Fax: 123456</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
