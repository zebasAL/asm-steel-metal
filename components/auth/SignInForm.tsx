import z from 'zod'
import React from "react";
import nookies from "nookies";
import { useForm, SubmitHandler, Resolver } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../firebase/auth/auth";
import firebase from "../../firebase/clientApp";
import LogoSvg from "../../images/svg/logo.svg";

const validationSchema = z
  .object({
    email: z.string().min(1, { message: "Email is required" }).email({
      message: "Must be a valid email",
    }),
    password: z
      .string()
      .min(6, { message: "Password must be atleast 6 characters" }),
  })
type ValidationSchema = z.infer<typeof validationSchema>;

function SignInForm() {
  const { setUser } = useAuth()
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    defaultValues: {
    },
  })

  const onSubmit: SubmitHandler<ValidationSchema> = async (data: ValidationSchema) => {
    await firebase.auth().signInWithEmailAndPassword(data.email, data.password)
      .then(async (user) => {
       const token = await user.user?.getIdToken()
       setUser(user.user)
       nookies.set(null, "token", token ?? "");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          setError('password', { message: 'Wrong password.' });
        } else {
          setError('email', { message: "Invalid login credentials" });
        }
      });
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <img src="https://www.asm-steelmetal.com/images/logo%20asm.jpg?crc=367328868" width="100" height="100" alt="ASM-METAL-STEEL" />
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign In
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="my-3">
                <label id="email-label" htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input {...register("email")} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
                {errors.email && (
                  <p className="text-xs italic text-red-500 mt-2"> {errors.email?.message}</p>
                )}
              </div>
              <div className="my-3">
                <label id="password-label" htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                <input {...register("password")} type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
                {errors.password && (
                  <p className="text-xs italic text-red-500 mt-2"> {errors.password?.message}</p>
                )}
              </div>
              <button
                className="flex items-center m-auto bg-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                type="submit"
              >
                Log In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInForm;
