import { CardTitle } from './CardTitle';
import { CardLabel } from './CardLabel';
import { CardPrice } from './CardPrice';
import { CardDescr } from './CardDescr';
import { CardCategory } from './CardCategory';
import { CardIngredients } from './CardIngredients';
import { CardButton } from './CardButton';

export type Product = {
  id: string
  name: string
  description?: string
  price: number
  category?: string
  vegetarian?: boolean
  ingredients?: number
}

export function Card({ product }: { product: Product }) {

  return (
    <div className="card bg-white flex flex-col rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="product-card__top flex justify-between items-start mb-3">
        <CardTitle className='product-card__title' value={product.name}/>
        
        {product.vegetarian
          ? <CardLabel className="card__label">🌱 Vegetarisch</CardLabel>
          : <CardLabel className="card__label--meat card__label">🥩 Mit Fleisch</CardLabel>
        }
      </div>

      <CardPrice className="card__price" 
        value={product.price}
      />

      <CardDescr className='card__descr'>
        {product.description}
      </CardDescr>

      <div className="card__details">
        <CardCategory className='card__category'>
            Kategory: {product.category}
        </CardCategory>
        
        <CardIngredients className='card__ingredients'>
            {product.ingredients} Zutaten
        </CardIngredients>
      </div>

      <CardButton className="card__button"></CardButton>
    </div>
  );
}