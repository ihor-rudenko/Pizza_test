import { CardTitle } from '../components/CardTitle';
import { CardLabel } from '../components/CardLabel';
import { CardPrice } from '../components/CardPrice';
import { CardDescr } from '../components/CardDescr';
import { CardCategory } from '../components/CardCategory';
import { CardIngredients } from '../components/CardIngredients';
import { CardButton } from '../components/CardButton';
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  vegetarian: boolean;
  ingredients: number;
}

export function ProductCard({ product }: { product: Product }) {

  return (
    <div className="product-card bg-white flex flex-col rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="product-card__top flex justify-between items-start mb-3">
        <CardTitle className='product-card__title' value={product.name}/>
        
        {product.vegetarian
          ? <CardLabel className="product-card__label">🌱 Vegetarisch</CardLabel>
          : <CardLabel className="product-card__label--meat product-card__label">🥩 Mit Fleisch</CardLabel>
        }
      </div>

      <CardPrice 
        className="product-card__price" 
        value={product.price}
      />

      <CardDescr>
        {product.description}
      </CardDescr>

      <div className="product-card__details">
        <CardCategory>
            Kategory: {product.category}
        </CardCategory>
        
        <CardIngredients>
            {product.ingredients} Zutaten
        </CardIngredients>
      </div>

      <CardButton></CardButton>
    </div>
  );
}