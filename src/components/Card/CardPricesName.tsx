import { ReactNode } from "react";

type CardPricesNameProps = {
    children: ReactNode;
    className?: string;    
}

export const CardPricesName = ({ children, className }: CardPricesNameProps) => {
    return (
        <span className={`card__prices-name ${className ?? ''}`}>
            {children}
        </span>
    )
}