import { ReactNode } from "react";

type PageTitleProps = {
    children?: ReactNode;
    className?: string;
}

export const PageTitle = (props: PageTitleProps) => {
    const { children, className } = props;

    return (
        <h1 className="product__title text-3xl font-bold text-white mb-6">
            {children}
        </h1>
    )
}