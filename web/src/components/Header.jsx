import { Link } from "react-router-dom";
import Search from "./atom/Search";
import { GitCompareArrows } from 'lucide-react';
import { Heart } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';

const Header = () => {
  return (
    <header>
      <div className="flex items-center justify-between py-2 border-b border-gray-200 px-30 bg-violet-600 text-white">
        <p className="text-[14px] font-[500]">
          Get up to 50% off new season styles, limited time only.
        </p>
        <div className="flex items-center justify-end">
          <ul className="flex items-center gap-10">
            <li className="hover:text-orange-600">
              <Link to="/help-center">Help Center</Link>
            </li>
            <li className="hover:text-orange-600">
              <Link to="/help-center">Order Tracking</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-between py-6 px-30 border-b border-gray-200 sticky top-0">
        <div className="w-[20%]">
          <Link to="/" className="flex items-center">
            <img src="./shop-logo.jpg" alt="logo" className="h-10" />
            <p className=" text-2xl font-bold">My Shop</p>{" "}
          </Link>
        </div>
        <div className="w-[45%] flex justify-center rounded-r-full">
          <Search
            placeholder="Search for Products..."
            className="px-4 text-lg h-[50px] bg-gray-200 border-gray-500"
          />
          <button className=" py-2 border border-black px-4 rounded-r-full font-semibold text-lg bg-violet-600 text-white">
            Search
          </button>
        </div>
        <div className="w-[35%] flex justify-end z-20">
          <ul className="w-full flex text-xl justify-evenly items-center text-gray-600">
            <li>
              <Link to="/login" className="hover:text-violet-600 font-semibold py-1 px-3 rounded-full hover:bg-gray-200">Login</Link>
            </li>
            <li>
              <Link to="/register" className="hover:text-violet-600 font-semibold py-1 px-3 rounded-full hover:bg-gray-200">Signup</Link>
            </li>
            <li><span className=" border border-gray-300 text-4xl"></span></li>
            <li>
              <Link to="/compare" className="hover:text-violet-600 "><GitCompareArrows size={30} /></Link>
            </li>
            <li>
              <Link to="/wishlist" className="hover:text-violet-600 "><Heart size={30} /></Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-violet-600 "><ShoppingCart size={30} /></Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
