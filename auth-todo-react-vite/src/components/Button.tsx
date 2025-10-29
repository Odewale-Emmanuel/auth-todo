import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export function Button({ variant, children, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      className={`w-full h-[45px] hover:cursor-pointer text-white rounded-[5px] bg-[#473a2b] hover:bg-[#322618] ${
        variant === "secondary" ? "opacity-[85%]" : ""
      }`}
      {...props}
    >
      {children}
    </button>
  );
}
