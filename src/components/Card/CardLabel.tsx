import type { ReactNode } from 'react';

type CardLabelProps = {
    children?: ReactNode;
    className?: string;
}

export const CardLabel = ({ 
    children = "🌱 Vegetarisch", 
    className: userClassName = "",
 }: CardLabelProps) => {

    const customClasses = userClassName && userClassName.trim().length > 0
        ? userClassName
        : "default-label";

    return ( 
        <span className={`card__label ${customClasses}`}>
            {children}
        </span>
    )
};


