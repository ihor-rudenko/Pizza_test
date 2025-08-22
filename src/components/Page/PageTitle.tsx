import { ReactNode } from "react";

type PageTitleProps = {
    children?: ReactNode;
    className?: string;
}

export const PageTitle = (props: PageTitleProps) => {
    const { children, className } = props;

    return (
        <h1 className={`page__title ${className ?? ''}`}>
            {children}
        </h1>
    )
}