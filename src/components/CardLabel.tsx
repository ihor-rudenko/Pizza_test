import type { ReactNode } from 'react';

type CardLabelProps = {
    // Optional props for CardLabel component (? - ist optional Prorerty)
    children?: ReactNode;
    // show?: boolean;
    className?: string;
}

export const CardLabel = ({ 
    children = "🌱 Vegetarisch", 
    // show = true, 
    className: userClassName = "",
 }: CardLabelProps) => {
    // if (!show) return null;

    const customClasses = userClassName && userClassName.trim().length > 0
        ? userClassName
        : "default-label";

    return ( 
        <span className={`product-card__label ${customClasses}`}>
            {children}
        </span>
    )
};


