import type { ReactNode } from "react";

type CardPriceProps = {
    className?: string;
    value: number;
}

export const CardPrice = (props: CardPriceProps) => {
    const {className, value} = props;
        
    const defaultClassNames = "text-2xl font-bold text-green-600 mb-3";
    const combinedClassNames = className ? defaultClassNames + " " + className : defaultClassNames; 

    return (
        <p className={combinedClassNames}>
            {value.toFixed(2)} €
        </p>
    )
}