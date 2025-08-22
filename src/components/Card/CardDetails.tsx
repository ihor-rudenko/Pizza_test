import { ReactNode } from 'react';

type CardDetailsProps = {
    className?: string;
    children?: ReactNode;
}

export const CardDetails = (props: CardDetailsProps) => {
    const { className, children } = props;

    return (
        <div className={`card__details ${className ?? ''}`}>
            {children}
        </div>
    );
};