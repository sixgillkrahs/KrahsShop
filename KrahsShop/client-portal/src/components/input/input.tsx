import React from "react";

interface InputProps {
  name: string;
  label: string;
  type: string;
  error?: string | any;
  description?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const Input = ({
  name,
  label,
  type,
  error,
  description,
  value,
  onChange,
  onBlur,
  placeholder,
  ...props
}: InputProps) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input
        name={name}
        type={type}
        className="border border-gray-300 rounded-none p-2 w-full"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        {...props}
        placeholder={placeholder}
      />
      <p className="text-xs text-gray-500">{description}</p>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default Input;
