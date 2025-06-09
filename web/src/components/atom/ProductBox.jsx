import { useRef } from "react";
import { Link } from "react-router-dom";
import { products } from "../constant/products";
import { Star, ShoppingCart, Heart, Expand, ChevronRight, ChevronLeft } from "lucide-react";

const ProductBox = () => {
  const scrollRef = useRef(null);

  const scroll = (offset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-screen overflow-hidden">
      {/* Scroll Container */}
      <div
        ref={scrollRef}
        className="flex p-2 w-full gap-5 m-5 px-5 overflow-x-scroll scroll-smooth snap-x snap-mandatory scrollbar-hide"
      >
        {products.map((product, index) => (
          <div
            key={index}
            className="ml-1 h-[59vh] w-[250px] flex-shrink-0 rounded-2xl overflow-hidden border border-gray-300 shadow-md group relative flex flex-col snap-start"
          >
            <div className="h-[50%] overflow-hidden">
              <Link to="/">
                <div className="relative overflow-hidden">
                  <img src={product.image_1} className="w-full object-cover" />
                  <img
                    src={product.image_2}
                    className="w-full object-cover absolute top-0 left-0 opacity-0 transition-all duration-700 group-hover:opacity-100"
                  />
                </div>
              </Link>
              <span className="absolute bg-red-500 text-white rounded-lg p-1 top-2 left-2 text-sm">
                {product.discount}%
              </span>
              <div className="flex flex-col gap-2 absolute -top-20 right-3 transition-all duration-300 group-hover:top-2">
                <button className="bg-white p-1 rounded-full">
                  <Heart />
                </button>
                <button className="bg-white p-1 rounded-full">
                  <Expand />
                </button>
              </div>
            </div>
            <div className="bg-white p-3 flex flex-col gap-2">
              <div>
                <p className="text-lg text-gray-600">{product.brand}</p>
                <p className="text-xl hover:text-red-600 cursor-pointer">
                  {product.name}
                </p>
              </div>
              <div className="flex space-x-1">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    size={20}
                    className={`transition-colors duration-200 ${
                      starIndex < product.rating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                    fill={starIndex < product.rating ? "#facc15" : "none"}
                  />
                ))}
              </div>
              <div className="flex justify-between">
                <span className="text-xl font-semibold text-gray-500 line-through">
                  ₹{product.old_price}
                </span>
                <span className="text-xl font-semibold text-red-500">
                  ₹{product.current_price}
                </span>
              </div>
            </div>
            <div className="px-3 mb-2">
              <button className="font-semibold flex items-center justify-center gap-2 w-full py-1 border border-violet-500 rounded hover:bg-violet-500 hover:text-white uppercase">
                <ShoppingCart size={18} />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll Left Button */}
      <button
        onClick={() => scroll(-300)}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-violet-500 hover:text-white z-10"
      >
        <ChevronLeft size={30} />
      </button>

      {/* Scroll Right Button */}
      <button
        onClick={() => scroll(300)}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-violet-500 hover:text-white z-10"
      >
        <ChevronRight size={30} />
      </button>
    </div>
  );
};

export default ProductBox;
