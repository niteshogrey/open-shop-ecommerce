import React from "react";
import { category } from "./constant/categories";
import ProductBox from "./atom/ProductBox";

const PopularProductSection = () => {
  return (
    <section className="p-8">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-bold">Popular Products</h2>
          <p>Do not miss the current offers until the end of March.</p>
        </div>
        <div className="w-[60vw] flex justify-between text-xl font-semibold text-gray-600">
          {category.map((item, index) => (
            <button key={index} className="uppercase">{item.name}</button>
          ))}
        </div>
      </div>
      <div className="flex">
        <ProductBox />
      </div>
    </section>
  );
};

export default PopularProductSection;
