import React from "react";
import { IButton } from "../../models/IComponent";

const Button: React.FC<IButton> = ({ onClick, type, name }) => {
  return (
    <button
      type={type || "button"}
      onClick={onClick}
      className="space-x-8 bg-deepBlue hover:bg-primary text-white group flex items-center rounded-xl text-sm font-medium px-8 py-4"
    >
      {name}
    </button>
  );
};

export default Button;
