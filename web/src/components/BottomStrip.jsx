import { Link } from "react-router-dom";
import { Facebook, Instagram, Github, Linkedin, Twitter } from "lucide-react";
import visa from "../assets/cards/Visa_inc.-Logo.wine.svg";
import masterCard from "../assets/cards/Mastercard-Logo.wine.svg";
import payPal from "../assets/cards/PayPal-Logo.wine.svg";
import american_express from "../assets/cards/American_Express-Logo.wine.svg";

const BottomStrip = () => {
  const social = [
    {
      icon: <Facebook size={15} />,
      link: "facebook.com",
    },
    {
      icon: <Instagram size={15} />,
      link: "facebook.com",
    },
    {
      icon: <Github size={15} />,
      link: "facebook.com",
    },
    {
      icon: <Linkedin size={15} />,
      link: "facebook.com",
    },
    {
      icon: <Twitter size={15} />,
      link: "facebook.com",
    },
  ];

  const cards = [visa, masterCard, payPal, american_express];

  return (
    <div className="w-full px-20 py-3 flex justify-between items-center border-t border-gray-300">
      <div>
        <ul className="flex gap-2">
          {social.map((social, index) => (
            <li
              key={index}
              className="bg-white p-2 text-center rounded-full hover:bg-violet-500 hover:text-white cursor-pointer border border-gray-300"
            >
              <Link to={social.link}>{social.icon}</Link>
            </li>
          ))}
        </ul>
      </div>
      <p className="text-gray-600 text-lg">©2025 - Ecommerce Template</p>
      <div className="flex gap-2">
        {cards.map((card, index) => (
          <img key={index} src={card} alt="Visa Logo" className="h-6 w-auto bg-white" />
        ))}
      </div>
    </div>
  );
};

export default BottomStrip;
