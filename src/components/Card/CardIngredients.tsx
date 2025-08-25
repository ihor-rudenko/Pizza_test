import type { ReactNode } from "react";

type CardIngredientsProps = {
    className?: string;
    children?: ReactNode;
}

export const CardIngredients = (props: CardIngredientsProps) => {
    const { className, children } = props;

    return (
        <span className={`card__ingredient ${className ?? ''}`}>
            {children} 
        </span>
    )
}