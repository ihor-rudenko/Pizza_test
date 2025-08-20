import type { ReactNode } from "react";

// type CardDescrProps = {
//     value?: ReactNode;
//     className?: string;
// }

// export const CardDescr = (props: CardDescrProps) => {
//     const { value, className } = props;

//     return (
//         <p className="text-gray-600 mb-4 text-sm line-clamp-2">
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
        <p className="text-gray-600 mb-4 text-sm line-clamp-2">
          {children}
        </p>
    )
}