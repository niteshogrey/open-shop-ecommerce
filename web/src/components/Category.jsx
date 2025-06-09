import { Link } from "react-router-dom";
import { category } from "./constant/categories";

const Category = () => {
  return (
    <div className="w-full bg-violet-100 py-5 px-20">
      <Link className="flex justify-between">
        {category.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-2 bg-white py-3 px-15 rounded shadow hover:text-violet-600 border border-gray-200"
          >
            <img src={item.icon} alt={item.name} className="h-30 p-5 transform transition-transform  ease-in-out hover:scale-110" />
            <h3 className="text-xl font-semibold">{item.name}</h3>
          </div>
        ))}
      </Link>
    </div>
  );
};

export default Category;
