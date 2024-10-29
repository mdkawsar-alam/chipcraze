import React, { ButtonHTMLAttributes, FC } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const Button: FC<ButtonProps> = ({ children, type = 'button', className = '', ...props }) => {
  return (
    <button
      type={type}
      className={`bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
