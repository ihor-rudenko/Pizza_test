import React from "react";

type CardButtonProps = {
  children?: React.ReactNode;
  className?: string;
};

export const CardButton = ({ children = "In den Warenkorb" }: CardButtonProps) => (
  <button className="card__button w-full bg-orange-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
    {children}
  </button>
);

