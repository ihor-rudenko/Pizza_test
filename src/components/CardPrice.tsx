import type { ReactNode } from "react";

type CardPriceProps = {
    children?: ReactNode;
    show?: boolean;
    className?: string;
}

export const CardPrice = ({
    children?: "",
    className: userClassName = "",
}: CardPriceProps) => {
    const customPrice = useerClassName && useerClassName.trim().length > 0
        ? userClassName
        : "default-price";
        
    return (
        <p className="product-card__price text-2xl font-bold text-green-600 mb-3">
            {product.price.toFixed(2)} €
        </p>
    )
}