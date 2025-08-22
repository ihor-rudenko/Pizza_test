import { ProductCard } from '../components/ProductCard';
import { Product } from '../components/ProductCard';

type ProductsCategoryProps = {
    title: string;
    items?: Product[];
    className?: string;
}

export const ProductCategory = (props: ProductsCategoryProps) => {
    const { title, items = [], className } = props;

    return (
        <div className="category__body">
            <h2 className="product__category-name text-2xl font-semibold mb-4">
              {title}
            </h2>

            <div className="product__wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
        </div>
    )
}