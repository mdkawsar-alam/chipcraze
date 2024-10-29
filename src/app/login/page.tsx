'use client'

import { useForm, SubmitHandler } from 'react-hook-form'
// import { useRouter } from 'next/navigation'
import Link from 'next/link'

type LoginInputs = {
  email: string
  password: string
}

 const LoginPage=()=> {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginInputs>()
  // const router = useRouter()

  const onSubmit: SubmitHandler<LoginInputs> = async (data) => {
    // TODO: Implement login logic here
    console.log('Login attempt with:', data)
    // If login is successful, redirect to home page
    // router.push('/')
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <h2 className="text-2xl font-bold mb-2">Login</h2>
            <p className="text-gray-600">Enter your credentials 
            to access your account</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
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
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
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
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>
              <Link href="/forgot-password" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                Forgot Password?
              </Link>
            </div>
          </form>
        </div>
        <p className="text-center text-gray-500 text-xs">
        {`Don't have an account?`}{' '}
          <Link href="/signup" className="text-blue-500 hover:text-blue-800">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
};
export default LoginPage ;