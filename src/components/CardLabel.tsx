type CardLabelProps = {
    // Optional props for CardLabel component (? - ist optional Prorerty)
    children?: React.ReactNode;
    show?: boolean;
    className?: string;
}

export const CardLabel = ({ 
    children = "🌱 Vegetarisch", 
    show = true, 
    className = "",
 }: CardLabelProps) => {
    if (!show) return null;

    return ( 
        <span className="product-card__label bg-green-100 min-w-[105px] text-green-800 text-xs px-2 py-1 rounded-full">
            {children}
        </span>
    )
};


