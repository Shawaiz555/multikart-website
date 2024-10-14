import React from 'react'

export default function Subscribe() {
  return (
    <div className="w-[90%] flex mx-auto bg-orange-400 p-12 rounded-xl mb-10 mt-16">
        <div className="w-[55%]">
          <h1 className="text-2xl text-white font-bold tracking-wide">KNOW IT ALL FIRST!</h1>
          <p className="tracking-wide text-white">
            Never Miss Anything From Multikart By Signing Up To Our Newsletter.
          </p>
        </div>

        <div className="w-[45%] flex gap-2">
          <input
            type="email"
            placeholder="Enter your Email"
            className="w-full border border-gray-300 px-5 rounded-lg outline-none"
          />
          <button className="bg-red-500 px-7 text-white font-bold rounded-lg hover:bg-red-600 font-serif tracking-wider hover:scale-95">
            Subscribe
          </button>
        </div>
      </div>
  )
}
