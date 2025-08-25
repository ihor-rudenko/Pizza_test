import { CardTitle } from './CardTitle';
import { CardLabel } from './CardLabel';
import { CardPrice } from './CardPrice';
import { CardDescr } from './CardDescr';
import { CardCategory } from './CardCategory';
import { CardIngredients } from './CardIngredients';
import { CardButton } from './CardButton';
import { CardDetails } from './CardDetails';
import { CardTop } from './CardTop';

export type Product = {
  id: string
  name: string
  description?: string
  price: number
  category?: string
  vegetarian?: boolean
  ingredients?: number
  className?: string
  sizes: { id: string; name?: string; price: number }[]
}

export function Card({ product }: { product: Product }) {
  const { className } = product;
  
  return (
    <div className={`card ${className ?? ''}`}>
      <CardTop>
        <CardTitle value={product.name}/>
        
        {product.vegetarian
          ? <CardLabel>🌱 Vegetarisch</CardLabel>
          : <CardLabel className="card__label--meat">🥩 Mit Fleisch</CardLabel>
        }
      </CardTop>

      <CardPrice value={product.price}/>

      {product.sizes.map((s) => (
        <span key={s.id} className="px-2 py-1 border rounded text-sm text-black">
          {s.name}: {s.price} €
        </span>
      ))}

      <CardDescr>
        {product.description}
      </CardDescr>

      <CardDetails>
        <CardCategory>
          Kategorie: {product.category}
        </CardCategory>
        
        <CardIngredients>
          {product.ingredients} Zutaten
        </CardIngredients>
      </CardDetails>

      <CardButton/>
    </div>
  );
}