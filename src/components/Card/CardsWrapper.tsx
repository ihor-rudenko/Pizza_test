import type { ReactNode } from "react";

type CardsWrapperProps = { 
    children?: ReactNode; 
    className?: string;
}

export const CardsWrapper = (props: CardsWrapperProps) => {
        const { children, className } = props;

      return (
        <div className={`cards__wrapper ${className ?? ''}`}>
            {children}
        </div>
    )
}
  

   
   