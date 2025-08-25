import { ReactNode } from "react";

type CardPricesItemProps = {
    children: ReactNode;
    className?: string;    
    size: { id: string; name?: string; price: number };
}

export const CardPricesItem = ({ children, className, size }: CardPricesItemProps) => {
    return (
       <span key={size.id} className="card__prices-item">
            {children}
        </span>
        
    )
}