import { Link } from "react-router-dom";
import smart_deals from "../../assets/smart-deals.webp";
import smart_deals_2 from "../../assets/smart-deals-2.jpg";
import fashion_deals from "../../assets/fashion-deals.webp";
import iphone_deals from "../../assets/iphone-deals.webp";
import cold_drinks_deals from "../../assets/cold-drinks-deals.webp";
import { useEffect, useRef } from "react";
import {ChevronRight, ChevronLeft } from "lucide-react";

const banners = [
  { image: smart_deals, name: "smart-deals" },
  { image: fashion_deals, name: "fashion-deals" },
  { image: iphone_deals, name: "iphone-deals" },
  { image: cold_drinks_deals, name: "cold-drinks-deals" },
  { image: smart_deals_2, name: "smart-deals-2" },
];

const BannerBox = () => {
  const scrollRef = useRef(null);

    const scroll = (offset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: offset,
        behavior: "smooth",
      });
    }
  };

useEffect(() => {
    const container = scrollRef.current;

    if (!container) return;

    // Clone banners for seamless looping
    const totalScrollWidth = container.scrollWidth;
    const halfScrollWidth = totalScrollWidth / 2;

    const interval = setInterval(() => {
      if (container.scrollLeft >= halfScrollWidth) {
        // Instantly reset to start for seamless loop
        container.scrollTo({ left: 0, behavior: "auto" });
      } else {
        container.scrollBy({ left: 549, behavior: "smooth" }); // Small step for smooth flow
      }
    }, 2000); // Adjust speed (lower = smoother/slower)

    return () => clearInterval(interval);
  }, []);

  return (
     <div className="relative w-screen overflow-hidden">
      <div
        ref={scrollRef}
        className="flex gap-5 w-full overflow-x-scroll scrollbar-hide"
      >
        {[...banners, ...banners].map((banner, index) => (
          <Link
            key={index}
            to="/"
            className="flex-shrink-0 w-[530px] overflow-hidden"
          >
            <img
              src={banner.image}
              alt={banner.name}
              className="w-full h-65 object-cover rounded-lg"
            />
          </Link>
        ))}
      </div>

      {/* Left Button */}
      <button
        onClick={() => scroll(-549)}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-violet-500 hover:text-white z-10"
      >
        <ChevronLeft size={30} />
      </button>

      {/* Right Button */}
      <button
        onClick={() => scroll(549)}
        className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-violet-500 hover:text-white z-10"
      >
        <ChevronRight size={30} />
      </button>
    </div>
  );
};

export default BannerBox;
