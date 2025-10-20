import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from '../Providers/AuthProviders';
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SignUp = () => {
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
  const {createUser, updateUserProfile} = useContext(AuthContext)
  const navigate = useNavigate()

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
    .then(result=>{
        const loggUser = result.user
        console.log(loggUser)
        updateUserProfile(data.name, data.photoUrl)
        .then(()=>{
          console.log('User profile info updated')
          reset()
          Swal.fire({
  position: "top-end",
  icon: "success",
  title: "User Created Successfully",
  showConfirmButton: false,
  timer: 1500
});

navigate('/')

        })
        .catch(error =>console.log(error))

        
    })
  };

  console.log(watch()); 
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-zinc-900">
      <div className="w-full max-w-md space-y-6 rounded-lg border bg-white p-10 shadow-lg dark:border-zinc-700 dark:bg-zinc-900">
        <div className="flex flex-col space-y-1">
          <h3 className="text-3xl font-bold tracking-tight">Sign Up</h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Please fill in the form to create an account.
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2 text-sm">
            <label htmlFor="name" className="text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              className="flex h-10 w-full rounded-md border px-3 py-2 focus-visible:outline-none dark:border-zinc-700"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
          </div>



          {/* //photo */}

          <div className="space-y-2 text-sm">
            <label htmlFor="name" className="text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300">
              PhotoURL
            </label>
            <input
              id="photoUrl"
              type="text"
              placeholder="Photo URL"
              className="flex h-10 w-full rounded-md border px-3 py-2 focus-visible:outline-none dark:border-zinc-700"
              {...register("photoUrl", { required: "photoUrl is required" })}
            />
            {errors.photoUrl && <p className="text-red-500 text-xs">{errors.photoUrl.message}</p>}
          </div>





          <div className="space-y-2 text-sm">
            <label htmlFor="email" className="text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="flex h-10 w-full rounded-md border px-3 py-2 focus-visible:outline-none dark:border-zinc-700"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
          </div>

          <div className="space-y-2 text-sm">
            <label htmlFor="password" className="text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300">
              Password
            </label>
            <input
              id="password"
              type="password"
           
              placeholder="Enter password"
              className="flex h-10 w-full rounded-md border px-3 py-2 focus-visible:outline-none dark:border-zinc-700"
              {...register("password", { required: true, 
                minLength: 6, 
                maxLength:20, 
                pattern: /(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()\-__+.]){1,})/
            
            })}
            />
            {errors.password && <p className="text-red-500 text-xs">Password is required</p>}

            {errors.password?.type ==='minLength'  && <p className="text-red-500 text-xs">Password must be 6 characters</p>}

            {errors.password?.type ==='maxLength'  && <p className="text-red-500 text-xs">Password must be less than 20 characters</p>}

            {errors.password?.type ==='pattern'  && <p className="text-red-500 text-xs">Password must have one uppercase, one lower case, one number and one special character</p>}

          </div>

          <button className="w-full rounded-md bg-sky-500 px-4 py-2 text-white transition-colors hover:bg-sky-600 dark:bg-sky-700">
            SignUp
          </button>
        </form>
        <p className="text-center text-sm text-zinc-700 dark:text-zinc-300">
          Already have an account?{" "}
          <Link to="/signIn" className="font-semibold underline">
            Signin
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
