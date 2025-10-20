// import React, { useContext } from 'react';
// import { AuthContext } from '../Providers/AuthProviders';
// import { Link } from 'react-router-dom';
// import Swal from 'sweetalert2';

// const SignIn = () => {

//   const {signIn} = useContext(AuthContext)



//     const handleLogIn = event =>{
//         event.preventDefault()
//         const form = event.target;
//         const email = form.email.value
//         const password = form.password.value
//         console.log(email, password)
//         signIn(email, password)
//         .then(result =>{
//           const user = result.user
//           console.log(user)




//           Swal.fire({
//   position: "top-end",
//   icon: "success",
//   title: "User LogIn Successfully",
//   showConfirmButton: false,
//   timer: 1500
// });



//         })
//     }
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-zinc-950">
//       <div className="max-w-3xl bg-white p-6 shadow-md sm:px-8 sm:py-10 lg:px-12 lg:py-16 dark:bg-zinc-900 rounded-2xl">
//         <div className="flex flex-col justify-center space-x-0 sm:flex-row sm:space-x-12">
//           {/* Left side form */}
//           <div className="mb-8 w-full sm:mb-0 sm:w-1/2">
//             <h2 className="mb-6 text-3xl font-semibold tracking-tight">Sign In</h2>
//             <form onSubmit={handleLogIn}>
//               <div className="mb-4 flex flex-col space-y-4">
//                 <input
//                   className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-1 dark:border-zinc-700"
//                   placeholder="email"
//                   type="email"
//                   name='email'
//                 />
//                 <input
//                   className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-1 dark:border-zinc-700"
//                   placeholder="Password"
//                   type="password"
//                   name='password'
//                 />
//               </div>
//               <div className="mb-6 flex items-center space-x-2 accent-sky-600">
//                 <input type="checkbox" id="keep_signed_in" />
//                 <label
//                   className="select-none text-sm font-medium"
//                   htmlFor="keep_signed_in"
//                 >
//                   Keep me signed in
//                 </label>
//               </div>
//               <button className="inline-flex h-10 w-full items-center justify-center rounded-md bg-zinc-600 px-4 py-2 text-sm font-medium uppercase text-white hover:bg-zinc-700">
//                 Submit
//               </button>
//             </form>
//           </div>

//           {/* Right side content */}
//           <div className="w-full sm:w-1/2">
//             <p className="mb-6 text-sm">
//               If you don&apos;t already have an account click the button below to
//               create your account.
//             </p>
//             <Link to='/signup' className="mb-2 inline-flex h-10 w-full items-center justify-center rounded-md bg-zinc-800 px-4 py-2 text-sm font-medium uppercase text-white hover:bg-zinc-700">
//               Create Account
//             </Link>
//             <p className="my-4 text-center">OR</p>
//             <button className="mb-2 flex h-10 w-full items-center justify-center gap-1 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth={2}
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="size-6 text-white"
//               >
//                 <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
//               </svg>
//               SIGN IN WITH FACEBOOK
//             </button>
//             <button className="flex h-10 w-full items-center justify-center gap-1 rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 32 32"
//                 className="size-6 fill-current"
//               >
//                 <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
//               </svg>
//               SIGN IN WITH GOOGLE
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignIn;



import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Link, replace, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SignIn = () => {
  const { signIn, googleSignIn, facebookSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation()

  const from = location.state?.from?.pathname || '/'

  // ✅ Handle login with email/password
  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log("User Logged In:", user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User Logged In Successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
        navigate(from, { replace: true });
      })
      
      .catch((error) => {
        console.error("Login Error:", error);
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: error.message,
        });
      });
  };

  // ✅ Handle Google login (if provided)
  const handleGoogleSignIn = () => {
    if (!googleSignIn) return;
    googleSignIn()
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: "Signed In with Google!",
          timer: 1500,
          showConfirmButton: false,
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Google Sign-In Failed",
          text: error.message,
        });
      });
  };

  // ✅ Handle Facebook login (if provided)
  const handleFacebookSignIn = () => {
    if (!facebookSignIn) return;
    facebookSignIn()
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: "Signed In with Facebook!",
          timer: 1500,
          showConfirmButton: false,
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Facebook Sign-In Failed",
          text: error.message,
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-zinc-950">
      <div className="max-w-3xl bg-white dark:bg-zinc-900 p-8 shadow-lg rounded-2xl">
        <div className="flex flex-col sm:flex-row sm:space-x-12">
          {/* Left side: Sign In Form */}
          <div className="w-full sm:w-1/2 mb-8 sm:mb-0">
            <h2 className="mb-6 text-3xl font-semibold tracking-tight">
              Sign In
            </h2>
            <form onSubmit={handleLogIn}>
              <div className="flex flex-col space-y-4 mb-6">
                <input
                  className="h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-1 dark:border-zinc-700"
                  placeholder="Email"
                  type="email"
                  name="email"
                  required
                />
                <input
                  className="h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-1 dark:border-zinc-700"
                  placeholder="Password"
                  type="password"
                  name="password"
                  required
                />
              </div>
              <div className="mb-6 flex items-center space-x-2 accent-sky-600">
                <input type="checkbox" id="keep_signed_in" />
                <label
                  className="select-none text-sm font-medium"
                  htmlFor="keep_signed_in"
                >
                  Keep me signed in
                </label>
              </div>
              <button
                type="submit"
                className="w-full h-10 rounded-md bg-zinc-700 text-white font-medium uppercase hover:bg-zinc-800 transition"
              >
                Sign In
              </button>
            </form>
          </div>

          {/* Right side: Other options */}
          <div className="w-full sm:w-1/2 flex flex-col justify-center">
            <p className="mb-6 text-sm">
              If you don&apos;t already have an account, click below to create
              one.
            </p>
            <Link
              to="/signup"
              className="mb-4 inline-flex h-10 w-full items-center justify-center rounded-md bg-zinc-800 px-4 py-2 text-sm font-medium uppercase text-white hover:bg-zinc-700"
            >
              Create Account
            </Link>
            <p className="my-4 text-center text-sm font-medium text-gray-500">
              OR
            </p>

            {/* Facebook Sign-In */}
            <button
              onClick={handleFacebookSignIn}
              className="mb-3 flex h-10 w-full items-center justify-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              Sign In with Facebook
            </button>

            {/* Google Sign-In */}
            <button
              onClick={handleGoogleSignIn}
              className="flex h-10 w-full items-center justify-center gap-2 rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
              Sign In with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

