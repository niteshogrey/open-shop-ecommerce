import { Link } from "react-router-dom";
import fashion from "../assets/fashion.png";
import electronics from "../assets/electronics.png";
import bags from "../assets/bags.png";
import footwear from "../assets/footwear.png";
import groceries from "../assets/groceries.png";
import beauty from "../assets/makeup.png";

const category = [
  {
    id: 1,
    icon: fashion,
    name: "Fashion",
  },
  {
    id: 2,
    icon: electronics,
    name: "Electronics",
  },
  {
    id: 3,
    icon: bags,
    name: "Bags",
  },
  {
    id: 4,
    icon: footwear,
    name: "Footwear",
  },
  {
    id: 5,
    icon: groceries,
    name: "Groceries",
  },
  {
    id: 6,
    icon: beauty,
    name: "Beauty",
  },
];

const Category = () => {
  return (
    <div className="w-full bg-violet-100 py-5 px-20">
      <Link className="flex justify-between">
        {category.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-2 bg-white py-3 px-15 rounded shadow hover:text-violet-600 border border-gray-200"
          >
            <img src={item.icon} alt={item.name} className="h-30 p-5 transform transition-transform duration-500 ease-in-out hover:scale-105" />
            <h3 className="text-xl font-semibold">{item.name}</h3>
          </div>
        ))}
      </Link>
    </div>
  );
};

export default Category;
