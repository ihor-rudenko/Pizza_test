import { ReactNode } from "react";

type PageSubtitleProps = {
    children?: ReactNode;
    className?: string;
}

export const PageSubtitle = (props: PageSubtitleProps) => {
    const { children, className } = props;

    return (
        <h3 className={`page__subtitle mb-4 ${className ?? ''}`}>
            {children}        
        </h3>
    )
}   


