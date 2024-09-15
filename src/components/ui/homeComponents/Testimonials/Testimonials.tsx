"use client";

import { images } from "@/lib";
import { testimonials } from "@/lib/valiable";
import Image from "next/image";
import React from "react";



const Testimonials: React.FC = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">
          What Our Customers Are Saying
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              {testimonial.image && (
                <Image
                  src={images.product8}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4"
                />
              )}
              <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
              <p className="text-gray-600 mb-4">{testimonial.review}</p>
              {testimonial.rating && (
                <div className="flex justify-center">
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.908 5.856h6.154c.969 0 1.371 1.24.588 1.81l-4.967 3.611 1.907 5.856c.3.921-.755 1.688-1.54 1.117L10 15.347l-4.992 3.611c-.784.571-1.838-.196-1.539-1.117l1.908-5.856-4.967-3.611c-.783-.57-.38-1.81.589-1.81h6.154l1.908-5.856z" />
                    </svg>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
