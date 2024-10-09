'use client'

import { useForm, SubmitHandler } from 'react-hook-form'
import Link from 'next/link'
import { useState } from 'react'

type ForgotPasswordInputs = {
  email: string
}

 const ForgotPasswordPage=() =>{
  const { register, handleSubmit, formState: { errors } } = useForm<ForgotPasswordInputs>()
  const [isSubmitted, setIsSubmitted] = useState(false)

  const onSubmit: SubmitHandler<ForgotPasswordInputs> = async (data) => {
    // TODO: Implement forgot password logic here
    console.log('Password reset requested for:', data.email)
    setIsSubmitted(true)
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <h2 className="text-2xl font-bold mb-2">Forgot Password</h2>
            <p className="text-gray-600">Enter your email to reset your password</p>
          </div>
          {!isSubmitted ? (
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
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Reset Password
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center">
              <p className="mb-4">If an account exists for the email you entered, you will receive password reset instructions.</p>
              <Link href="/login" className="text-blue-500 hover:text-blue-800">
                Return to Login
              </Link>
            </div>
          )}
        </div>
        <p className="text-center text-gray-500 text-xs">
          Remember your password?{' '}
          <Link href="/login" className="text-blue-500 hover:text-blue-800">
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}
export default ForgotPasswordPage;