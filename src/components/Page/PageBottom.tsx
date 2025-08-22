import { ReactNode } from 'react';

type PageBottomProps = {
    children: ReactNode;
    classNode?: string;
};

export function PageBottom({ children, classNode = '' }: PageBottomProps) {
    return (
        <div className={`page__bottom ${classNode}`}>
            {children}
        </div>
    );
}