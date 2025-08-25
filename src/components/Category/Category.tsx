import { Card, type Product } from '../Card/Card'
import { CategoryTitle } from './CategoryTitle';
import { CardsWrapper } from '../Card/CardsWrapper';

type ProductsCategoryProps = {
    title: string;
    items?: Product[];
    className?: string;
}

export const Category = (props: ProductsCategoryProps) => {
    const { title, items = [], className } = props;

    return (
        <div className={`category ${className ?? ''}`}>
            <CategoryTitle>{title}</CategoryTitle>

            <CardsWrapper>
                {items.map((product) => (
                    <Card key={product.id} product={product} />
                ))}
            </CardsWrapper>
        </div>
    )
}
