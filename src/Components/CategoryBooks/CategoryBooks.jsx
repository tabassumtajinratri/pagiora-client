// // import { useParams } from "react-router-dom";
// import { useContext } from "react";
// import useBooks from "../Hooks/useBooks";
// import { AuthContext } from "../Providers/AuthProviders";
// import useAuth from "../Hooks/useAuth";
// import Swal from "sweetalert2";

// const CategoryBooks = ({category}) => {
// //   const { category } = useParams();
//   const [allbooks] = useBooks([]);

//   // Filter books by the clicked category
//   const filteredBooks = allbooks.filter(
//     (book) => book.category === category
//   );
// const {user} = useAuth()
//   const handleAddToCart = book =>{
//     if(user && user.email){
//       //cart
//     }
//     else{

//       Swal.fire({
//   title: "Please log in to add to the cart?",
//   text: "You won't be able to revert this!",
//   icon: "warning",
//   showCancelButton: true,
//   confirmButtonColor: "#3085d6",
//   cancelButtonColor: "#d33",
//   confirmButtonText: "Yes, delete it!"
// }).then((result) => {
//   if (result.isConfirmed) {
//     Swal.fire({
//       title: "Deleted!",
//       text: "Your file has been deleted.",
//       icon: "success"
//     });
//   }
// });

//     }
//   }

  

//   return (
//     <div className="p-10">
//       <h1 className="text-3xl font-bold mb-6 text-center">
//         Books in "{category}" Category
//       </h1>

//       {filteredBooks.length > 0 ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {filteredBooks.map((book) => (
//             <div key={book._id} className="border p-4 rounded-lg shadow hover:shadow-lg transition">
//               <img src={book.img} alt={book.name} className="h-48 w-full object-cover rounded-md mb-3" />
//               <h2 className="font-semibold">{book.name}</h2>
//               <p className="text-gray-600 text-sm">{book.author}</p>
//               <p className="text-blue-500 font-medium">${book.price}</p>
//               <div className="flex gap-4">
//                 <button onClick={()=>handleAddToCart(book)} className="rounded-lg bg-slate-800 px-6 py-2 text-[12px] font-semibold text-white duration-300 hover:bg-slate-950 sm:text-sm md:text-base">Add to Cart</button>
//                 <button className="rounded-md border border-black px-4 py-2 duration-300 hover:bg-gray-200 dark:border-white dark:hover:bg-white dark:hover:text-slate-800">View Details</button>
//             </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p className="text-center text-gray-500">No books found in this category.</p>
//       )}
//     </div>
//   );
// };

// export default CategoryBooks;




import { useContext } from "react";
import useBooks from "../Hooks/useBooks";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";

const CategoryBooks = ({ category }) => {
  const [allbooks] = useBooks([]);
  const { user } = useAuth();

  // Filter books by category
  const filteredBooks = allbooks.filter(book => book.category === category);

  const handleAddToCart = (book) => {
    if (user && user.email) {
      // TODO: Add cart logic here
      Swal.fire({
        icon: "success",
        title: "Added to Cart",
        text: `"${book.name}" has been added to your cart!`,
        timer: 1500,
        showConfirmButton: false,
      });
    } else {
      Swal.fire({
        title: "Please log in",
        text: "You need to log in to add books to the cart.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Go to Login",
        cancelButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          // redirect to login page if needed
          window.location.href = "/signIn";
        }
      });
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Books in "{category}" Category
      </h1>

      {filteredBooks.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredBooks.map((book) => (
            <div
              key={book._id}
              className="border p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              <img
                src={book.img}
                alt={book.name}
                className="h-48 w-full object-cover rounded-md mb-3"
              />
              <h2 className="font-semibold">{book.name}</h2>
              <p className="text-gray-600 text-sm">{book.author}</p>
              <p className="text-blue-500 font-medium">${book.price}</p>
              <div className="flex gap-4 mt-2">
                <button
                  onClick={() => handleAddToCart(book)}
                  className="rounded-lg bg-slate-800 px-6 py-2 text-[12px] font-semibold text-white duration-300 hover:bg-slate-950 sm:text-sm md:text-base"
                >
                  Add to Cart
                </button>
                <button className="rounded-md border border-black px-4 py-2 duration-300 hover:bg-gray-200 dark:border-white dark:hover:bg-white dark:hover:text-slate-800">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">
          No books found in this category.
        </p>
      )}
    </div>
  );
};

export default CategoryBooks;

