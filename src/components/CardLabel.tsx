type CardLabelProps = {
    // Optional props for CardLabel component (? - ist optional Prorerty)
    children?: React.ReactNode;
    // show?: boolean;
    className?: string;
}

export const CardLabel = ({ 
    children = "🌱 Vegetarisch", 
    // show = true, 
    className = "",
 }: CardLabelProps) => {
    // if (!show) return null;

    const colorClasses = className && className.trim().length > 0
        ? className
        : "bg-green-100 text-green-800";

    return ( 
        <span className={`product-card__label ${colorClasses} min-w-[105px] text-xs px-2 py-1 rounded-full`}>
            {children}
        </span>
    )
};


