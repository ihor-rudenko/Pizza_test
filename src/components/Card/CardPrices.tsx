import { ReactNode } from "react";

type CardAllPricesProps = {
    children: ReactNode;
    className?: string;    
}

export const CardPrices = ({ children, className }: CardAllPricesProps) => {
    return (
        <div className={`card__prices ${className ?? ''}`}>
            {children}
        </div>
    )
}