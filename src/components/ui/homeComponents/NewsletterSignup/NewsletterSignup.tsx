"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify"; // Optional for toast notifications, if you're using React Toastify

interface FormData {
  email: string;
}

const NewsletterSignup: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    
    toast.success("Thank you for subscribing to our newsletter!");
console.log(data);

 
    reset();
  };

  return (
    <section className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold">Subscribe to Our Newsletter</h2>
          <p className="text-gray-400 mt-2">
            Stay updated with our latest news, offers, and discounts!
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-md mx-auto flex flex-col md:flex-row items-center justify-center"
        >
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Please enter a valid email address",
              },
            })}
            className={`w-full md:w-auto px-4 py-2 rounded-l-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              errors.email ? "border-red-500" : ""
            }`}
            placeholder="Enter your email"
          />
          <button
            type="submit"
            className="w-full md:w-auto mt-4 md:mt-0 md:ml-2 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md"
          >
            Subscribe
          </button>
        </form>

        {/* Error message */}
        {errors.email && (
          <p className="text-red-500 mt-4 text-center">
            {errors.email.message}
          </p>
        )}
      </div>
    </section>
  );
};

export default NewsletterSignup;
