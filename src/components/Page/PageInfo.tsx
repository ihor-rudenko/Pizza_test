import { ReactNode } from "react";

type PageInfoProps = {
    children?: ReactNode;
    className?: string; 
}

export const PageInfo = (props: PageInfoProps) => {
    const { children, className } = props;
    
    return (
        <p className={`page__info ${className ?? ''}`}>
          {children}
        </p>
    )
}