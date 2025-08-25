import { ReactNode } from "react";

type CardPricesValueProps = {
    children: ReactNode;
    className?: string;    
}

export const CardPricesValue = ({ children, className }: CardPricesValueProps) => {
    return (
        <span className={`card__prices-value ${className ?? ''}`}>
            {children}
        </span>
    )
}