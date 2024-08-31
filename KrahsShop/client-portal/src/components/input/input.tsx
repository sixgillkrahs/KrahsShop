import React from "react";

interface InputProps {
  label: string;
  type: string;
  error?: string;
  description?: string;
}

const Input = ({ label, type, error, description }: InputProps) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        className="border border-gray-300 rounded-none p-2 w-full"
      />
      <p className="text-xs text-gray-500">{description}</p>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default Input;
