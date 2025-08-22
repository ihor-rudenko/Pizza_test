import { Card, type Product } from '../Card/Card'
import { CategoryTitle } from './CategoryTitle';
import { CardsWrapper } from '../Card/CardsWrapper';

type ProductsCategoryProps = {
    title: string;
    items?: Product[];
    className?: string;
}

export const Categories = (props: ProductsCategoryProps) => {
    const { title, items = [], className } = props;

    return (
        <div className={`categories ${className ?? ''}`}>
            <CategoryTitle className='category__title'>{title}</CategoryTitle>

            <CardsWrapper className="cards__wrapper">
                {items.map((product) => (
                    <Card key={product.id} product={product} />
                ))}
            </CardsWrapper>
        </div>
    )
}