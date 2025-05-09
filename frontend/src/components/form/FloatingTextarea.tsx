import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface FloatingTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  registerReturn: UseFormRegisterReturn;
  id: string;
}

const FloatingTextarea: React.FC<FloatingTextareaProps> = ({
  label,
  registerReturn,
  id,
  ...rest
}) => (
  <div className="relative z-0 w-full mb-5 group">
    <textarea
      id={id}
      {...registerReturn}
      {...rest}
      placeholder=" "
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 
                 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer resize-none"
    />
    <label
      htmlFor={id}
      className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0]
                 peer-focus:left-0 peer-focus:text-blue-600
                 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0"
    >
      {label}
    </label>
  </div>
);

export default FloatingTextarea;
