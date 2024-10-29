"use client";

import { useForm, SubmitHandler } from 'react-hook-form';
import { MapPin, Phone, Mail } from "lucide-react";
import { Input } from '@/components/sheard/Input/Input';
import { Textarea } from '@/components/sheard/textArea/Textarea';
import { Button } from '@/components/sheard/button/Button';

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactPage() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log('Form submitted:', data);
    alert('Thank you for your message. We will get back to you soon!');
    reset(); // Reset form after submission
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <Input
                type="text"
                id="name"
                {...register('name', { required: true })}
                className="mt-1"
              />
              {errors.name && <p className="text-red-500 text-sm">Name is required</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <Input
                type="email"
                id="email"
                {...register('email', {
                  required: true,
                  pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                })}
                className="mt-1"
              />
              {errors.email && <p className="text-red-500 text-sm">Please enter a valid email</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <Textarea
                id="message"
                rows={4}
                {...register('message', { required: true })}
                className="mt-1"
              />
              {errors.message && <p className="text-red-500 text-sm">Message is required</p>}
            </div>

            <Button type="submit" className="w-full">Send Message</Button>
          </form>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Our Contact Information</h2>
            <div className="space-y-2">
              <p className="flex items-center"><MapPin className="mr-2" /> 123 E-commerce St, City, Country, 12345</p>
              <p className="flex items-center"><Phone className="mr-2" /> +1 (555) 123-4567</p>
              <p className="flex items-center"><Mail className="mr-2" /> contact@yourecommerce.com</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Find Us On The Map</h2>
            <div className="bg-gray-200 h-64 flex items-center justify-center">
              <p className="text-gray-500">Map Placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
