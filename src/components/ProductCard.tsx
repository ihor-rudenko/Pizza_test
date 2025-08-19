import { CardButton } from '../components/CardButton';
import { CardLabel } from '../components/CardLabel';
import { CardPrice } from '../components/CardPrice';


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

    // Rendert eine einzelne Produktkarte
    return (
      <div className="product-card bg-white flex flex-col rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
        <div className="product-card__top flex justify-between items-start mb-3">
          <h2 className="product-card__title text-xl font-semibold text-gray-800 leading-tight">
            {product.name}
          </h2>
          
          {/* -------------------------------------------------- */}
          {/* Beispiel für bedingte Anzeige eines Labels */}
          {/* Wenn das Produkt vegetarisch ist, wird ein Label angezeigt */}
          {/* Hier wird das Label nur angezeigt, wenn product.vegetarian true ist */}
          
          {/* {product.vegetarian && (
            <span className="product-card__label bg-green-100 min-w-[105px] text-green-800 text-xs px-2 py-1 rounded-full">
              🌱 Vegetarisch
            </span>
          )} */}
          {/* -------------------------------------------------- */}


          {/* -------------------------------------------------- */}
          {/* Gleichwertiges Beispiel mit Ternary */}

          {/* {product.vegetarian ? (
            <span className="product-card__label bg-green-100 min-w-[105px] text-green-800 text-xs px-2 py-1 rounded-full">
              🌱 Vegetarisch
            </span>
          ) : null} */}
          {/* -------------------------------------------------- */}


          {/* -------------------------------------------------- */}
          {/* // Benutzung von CardLabel Komponent (für nur Vegetarische) zwei gleiche Variante*/}       
          {/* <CardLabel show={product.vegetarian &&} /> */}

          {product.vegetarian
            ? <CardLabel className="product-card__label--meat">🌱 Vegetarisch</CardLabel>
            : <CardLabel className="product-card__label--meat product-card__label">🥩 Mit Fleisch</CardLabel>
          }
          {/* -------------------------------------------------- */}        
        </div>

        <div className="product-card__content flex flex-col flex-grow flex-shrink-0 basis-auto justify-between">
          {/* <p className="product-card__price text-2xl font-bold text-green-600 mb-3">
            {product.price.toFixed(2)} €
          </p> */}
        <CardPrice value={product.price} />


          <p className="product-card__descr text-gray-600 mb-4 text-sm line-clamp-2">
            {product.description}
          </p>

          <div className="product-card__bottom flex items-center justify-between text-xs text-gray-500 mb-4 mt-auto">
            <span className='product-card__category'>Kategorie: {product.category}</span>
            <span className='product-card__ingredient'>{product.ingredients} Zutaten</span>
          </div>
        </div>

        {/* Beispiel für Komponente mit flexiblem Text*/}    
        <CardButton></CardButton>
      </div>
    );
  }