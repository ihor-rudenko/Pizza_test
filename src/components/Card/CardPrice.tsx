import type { ReactNode } from "react";

type CardPriceProps = {
    className?: string;
    value: number;
}

export const CardPrice = (props: CardPriceProps) => {
    const {className, value} = props;
        
    const defaultClassNames = "card__price";
    const combinedClassNames = className ? className + " " + defaultClassNames : defaultClassNames; 

    return (
        <p className={combinedClassNames}>
            {value.toFixed(2)} €
        </p>
    )
}