
import { FaBookOpen } from "react-icons/fa";
import useBooks from "../Hooks/useBooks";
import { Link } from "react-router-dom";
import CategoryBooks from "../CategoryBooks/CategoryBooks";

const TopCategories = () => {
  const [allbooks] = useBooks([]);

  // ✅ Get unique categories dynamically
  const categories = [...new Set(allbooks.map((book) => book.category))];

  // ✅ Count books in each category
  const categoryCounts = categories.map((category) => {
    const count = allbooks.filter((book) => book.category === category).length;
    return { category, count };
  });

  return (
    <div className="text-center py-10">
      <div>
       
        <h1 className="text-3xl font-bold mb-6">Categories</h1>
      </div>

      
      <div className="flex flex-wrap justify-center gap-6 mb-10">
        {categoryCounts.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="bg-blue-500 text-white rounded-full p-5 text-2xl">
              <FaBookOpen />
            </div>
            <p className="mt-2 font-semibold">{item.category}</p>
            <p className="text-sm text-gray-500">{item.count} books</p>
          </div>
        ))}
      </div>

      {/* All category count */}
      <div>
        <h1 className="font-semibold text-lg">
          Total Categories: {categories.length}
        </h1>
        {categories.map((category) => (
          <CategoryBooks key={category} category={category} />
        ))}
      </div>
      <div>
       
      </div>
    </div>
  );
};

export default TopCategories;
