'use client'

import { useForm, SubmitHandler } from 'react-hook-form'
// import { useRouter } from 'next/navigation'
import Link from 'next/link'

type SignupInputs = {
  name: string
  email: string
  password: string
  confirmPassword: string
}

 const SignupPage=()=>{
  const { register, handleSubmit, formState: { errors }, watch } = useForm<SignupInputs>()
  // const router = useRouter()

  const onSubmit: SubmitHandler<SignupInputs> = async (data) => {
    // TODO: Implement signup logic here
    console.log('Signup attempt with:', data)
    // If signup is successful, redirect to login page
    // router.push('/login')
  }

  const password = watch("password")

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <h2 className="text-2xl font-bold mb-2">Sign Up</h2>
            <p className="text-gray-600">Create a new account</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="John Doe"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && <span className="text-red-500 text-xs italic">{errors.name.message}</span>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="your@email.com"
                {...register("email", { required: "Email is required", pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Entered value does not match email format"
                } })}
              />
              {errors.email && <span className="text-red-500 text-xs italic">{errors.email.message}</span>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
                {...register("password", { required: "Password is required", minLength: {
                  value: 6,
                  message: "Password must have at least 6 characters"
                } })}
              />
              {errors.password && <span className="text-red-500 text-xs italic">{errors.password.message}</span>}
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="confirmPassword"
                type="password"
                placeholder="******************"
                {...register("confirmPassword", { 
                  required: "Please confirm your password",
                  validate: value => value === password || "The passwords do not match"
                })}
              />
              {errors.confirmPassword && <span className="text-red-500 text-xs italic">{errors.confirmPassword.message}</span>}
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
        <p className="text-center text-gray-500 text-xs">
          Already have an account?{' '}
          <Link href="/login" className="text-blue-500 hover:text-blue-800">
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}
export default SignupPage;