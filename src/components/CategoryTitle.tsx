import type { ReactNode } from "react";

type CategoryTitleProps = {
    children?: string;
    className?: string; 
}

export const CategoryTitle =  (props: CategoryTitleProps) => {
    const { children, className } = props;

    return (
        <h2 className="product__category-name text-2xl font-semibold mb-4">
            {children}
        </h2>
    )
}