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

      <div className="prices__list mb-3 flex gap-2 flex-wrap">
        {product.sizes.map((s) => (
          <span key={s.id} className="w-fit text-[12px] text-blue-700 rounded bg-blue-200 px-2 py-1 leading-[100%]">
            <span className='font-bold text-orange-700 mr-1'>
              {s.name}:
            </span> 
            
            {s.price} €
          </span>
        ))}
      </div>

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