type CardTitleProps = {
    value: string;
    className?: string; 
}

export const CardTitle =  (props: CardTitleProps) => {
    const { value, className } = props;

    return (
        <h2 className={`card__title ${className ?? ''}`}>
            {value}
        </h2>
    )
}