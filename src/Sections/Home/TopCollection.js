import React from "react";
import CollectionCarousal from "./CollectionCarousal";


export default function TopCollection() {

  return (
    <div className="mt-2">
      <div>
        <p className="text-orange-500 text-xl font-semibold tracking-wider text-center mb-1">
          Special Offer
        </p>
        <h1 className="text-5xl font-bold text-center tracking-wide">
          TOP COLLECTION
        </h1>
        <p className="text-gray-500 text-center mt-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been
        </p>
        <p className="text-gray-500 text-center">
          the industry's standard dummy text ever since the <b>1500s</b>,
        </p>
      </div>
      <div>
        <CollectionCarousal/>
      </div>
    </div>
  );
}
