import { ReactNode } from "react";

type PageTitleProps = {
    children?: ReactNode;
    className?: string;
}

export const PageTitle = (props: PageTitleProps) => {
    const { children, className } = props;

    return (
        <h1 className={`page__title text-3xl font-bold mb-6 ${className ?? ''}`}>
            {children}
        </h1>
    )
}