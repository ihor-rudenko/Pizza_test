import type { ReactNode } from "react";

type CardDescrProps = {
    children?: ReactNode;
    className?: string;
}

export const CardDescr = (props: CardDescrProps) => {
    const { children, className } = props;

    return (
        <p className={`card__descr ${className ?? ''}`}>
          {children}
        </p>
    )
}