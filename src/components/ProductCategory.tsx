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

            <div className="product__wrapper grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
              {items.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
        </div>
    )
}