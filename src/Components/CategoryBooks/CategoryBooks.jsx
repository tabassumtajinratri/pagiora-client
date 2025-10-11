// import { useParams } from "react-router-dom";
import useBooks from "../Hooks/useBooks";

const CategoryBooks = ({category}) => {
//   const { category } = useParams();
  const [allbooks] = useBooks([]);

  // Filter books by the clicked category
  const filteredBooks = allbooks.filter(
    (book) => book.category === category
  );

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Books in "{category}" Category
      </h1>

      {filteredBooks.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredBooks.map((book) => (
            <div key={book._id} className="border p-4 rounded-lg shadow hover:shadow-lg transition">
              <img src={book.img} alt={book.name} className="h-48 w-full object-cover rounded-md mb-3" />
              <h2 className="font-semibold">{book.name}</h2>
              <p className="text-gray-600 text-sm">{book.author}</p>
              <p className="text-blue-500 font-medium">${book.price}</p>
              <div className="flex gap-4">
                <button className="rounded-lg bg-slate-800 px-6 py-2 text-[12px] font-semibold text-white duration-300 hover:bg-slate-950 sm:text-sm md:text-base">Add to Cart</button>
                <button className="rounded-md border border-black px-4 py-2 duration-300 hover:bg-gray-200 dark:border-white dark:hover:bg-white dark:hover:text-slate-800">View Details</button>
            </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No books found in this category.</p>
      )}
    </div>
  );
};

export default CategoryBooks;
