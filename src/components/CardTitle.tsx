import type { ReactNode } from "react";

// type CardTitleProps = {
//     children?: string;
//     className?: string; 
// }

// export const CardTitle =  (props: CardTitleProps) => {
//     const { children, className } = props;

//     return (
//         <h2 className="product-card__title text-xl font-semibold text-gray-800 leading-tight">
//             {children}
//         </h2>
//     )
// }

type CardTitleProps = {
    value: string;
    className?: string; 
}

export const CardTitle =  (props: CardTitleProps) => {
    const { value, className } = props;

    return (
        <h2 className="text-xl font-semibold text-gray-800 leading-tight">
            {value}
        </h2>
    )
}