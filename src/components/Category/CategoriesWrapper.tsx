import { ReactNode } from "react";

type CategoriesWrapperProps = {
  children: ReactNode;
  className?: string;
};              

export function CategoriesWrapper({ children, className }: CategoriesWrapperProps) {
  return (
    <div className={`categories__wrapper ${className ?? ''}`}>
      {children}
    </div>
  );
}