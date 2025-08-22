import { ReactNode } from "react";

type CardTopProps = {
  children: ReactNode;
  className?: string;
};                                      

export function CardTop({ children, className }: CardTopProps) {
  return (
    <div className={`card__top ${className ?? ''}`}>
      {children}
    </div>
  );
}