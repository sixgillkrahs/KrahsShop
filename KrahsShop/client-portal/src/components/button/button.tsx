import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
}

const Button = ({ children, onClick, type = "button" }: ButtonProps) => {
  return (
    <button
      className="bg-black text-white p-2 rounded-none mt-4"
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
