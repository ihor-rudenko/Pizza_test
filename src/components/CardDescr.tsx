import type { ReactNode } from "react";

// type CardDescrProps = {
//     value?: ReactNode;
//     className?: string;
// }

// export const CardDescr = (props: CardDescrProps) => {
//     const { value, className } = props;

//     return (
//         <p className="product-card__text">
//           {value}
//         </p>
//     )
// }


type CardDescrProps = {
    children?: ReactNode;
    className?: string;
}

export const CardDescr = (props: CardDescrProps) => {
    const { children, className } = props;

    return (
        <p className="product-card__text">
          {children}
        </p>
    )
}