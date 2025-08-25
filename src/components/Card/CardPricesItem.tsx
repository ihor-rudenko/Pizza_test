import { ReactNode } from "react";
import { CardPricesName } from './CardPricesName';
import { CardPricesValue } from './CardPricesValue';

type CardPricesItemProps = {
    children: ReactNode;
    className?: string;    
    size: { id: string; name?: string; price: number };
}

export const CardPricesItem = ({ children, className, size }: CardPricesItemProps) => {
    return (
       <span key={size.id} className="card__prices-item">
            <CardPricesName>
                {size.name}
            </CardPricesName>

            <CardPricesValue>
                {size.price} €
            </CardPricesValue>     
        </span>
    )
}