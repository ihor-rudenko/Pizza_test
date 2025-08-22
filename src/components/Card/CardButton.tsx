import type { ReactNode } from "react";

type CardButtonProps = {
  children?: React.ReactNode;
  className?: string;
};

export const CardButton = ({ children = "In den Warenkorb", className }: CardButtonProps) => (
  <button className={`card__button ${className ?? ''}`}>
    {children}
  </button>
);

