import { ProductCard } from '../components/ProductCard';
import { Product } from '../components/ProductCard';
import { CategoryTitle } from '../components/CategoryTitle';

type ProductsCategoryProps = {
    title: string;
    items?: Product[];
    className?: string;
}

export const ProductCategory = (props: ProductsCategoryProps) => {
    const { title, items = [], className } = props;

    return (
        <div className="category__body">
            <CategoryTitle>{title}</CategoryTitle>

            <div className="product__wrapper">
              {items.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
        </div>
    )
}