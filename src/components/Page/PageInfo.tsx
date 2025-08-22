import { ReactNode } from "react";

type PageInfoProps = {
    children?: ReactNode;
    className?: string; 
}

export const PageInfo = (props: PageInfoProps) => {
    const { children, className } = props;
    
    return (
        <p className={`page__info flex w-fit text-yellow-300 text-sm mb-4 ml-auto px-2 py-2 rounded-lg ${className ?? ''}`}>
          {children}
        </p>
    )
}