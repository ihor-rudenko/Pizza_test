import type { ReactNode } from "react";

type CardCategoryProps = {
    children?: ReactNode;
    className?: string;
}

export const CardCategory = (props: CardCategoryProps) => {
    const { children, className } = props;

    return (
        <span className = "product-card__category">
            {children}
        </span>
    )
}