import React from "react";
import { Link } from "react-router-dom";

const ContactAndAbout = () => {
  return (
    <div className="flex justify-between w-full py-[50px] px-[10vw] border-t border-gray-300 ">
      <div className="w-full px-10 flex flex-col gap-4 items-start border-r border-gray-300">
        <h3 className="text-xl font-semibold">Contact us</h3>
        <p className="text-gray-600">My Shop - Mega Super Store Kota Raipur Chhattisgarh</p>
        <span className="text-sm text-gray-600">niteshwork23@gmail.com</span>
        <h2 className="text-2xl font-bold text-violet-600">(+91) 8889706313</h2>
      </div>
      <div className="flex flex-row px-10 justify-between w-full gap-3 items-start border-r border-gray-300">
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold">Products</h3>
          <ul className="flex flex-col gap-2 text-gray-600 ">
            <li className="hover:text-violet-600">
              <Link>Price Drop</Link>
            </li>
            <li className="hover:text-violet-600">
              <Link>New Products</Link>
            </li>
            <li className="hover:text-violet-600">
              <Link>Best sales</Link>
            </li>
            <li className="hover:text-violet-600">
              <Link>Stores</Link>
            </li>
            <li className="hover:text-violet-600">
              <Link>Site map</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold">Our Service</h3>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li  className="hover:text-violet-600">
              <Link>Delivery</Link>
            </li>
            <li>
              <Link>Legal notice</Link>
            </li>
            <li className="hover:text-violet-600">
              <Link>Term and condition</Link>
            </li>
            <li className="hover:text-violet-600">
              <Link>Secure Payment</Link>
            </li>
            <li className="hover:text-violet-600">
              <Link>About us</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full px-10 flex flex-col items-start justify-center gap-3">
        <h3 className="text-xl font-semibold">Subscribe to newsletter</h3>
        <p className="text-gray-600">Subscribe to our latest newsletter to get news about special discounts.</p>
        <input type="text" placeholder="Enter your email" className="px-2 rounded-lg border border-gray-400 h-12 w-full focus:border-none" />
        <button className="px-3 py-2 bg-violet-500 text-white rounded-lg text-lg">SUBSCRIBE</button>
      </div>
    </div>
  );
};

export default ContactAndAbout;
