import { CardTitle } from '../components/CardTitle';
import { CardLabel } from '../components/CardLabel';
import { CardPrice } from '../components/CardPrice';
import { CardDescr } from '../components/CardDescr';
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

    // Rendert eine einzelne Produktkarte
    return (
      <div className="product-card bg-white flex flex-col rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
        <div className="product-card__top flex justify-between items-start mb-3">
          {/* <CardTitle>{product.name}</CardTitle> */}

          <CardTitle className='product-card__title' value={product.name}/>

          {/* -------------------------------------------------- */}
          {/* Beispiel für bedingte Anzeige eines Labels. Wenn das Produkt vegetarisch ist, wird ein Label angezeigt. Hier wird das Label nur angezeigt, wenn product.vegetarian true ist */}
          {/* -------------------------------------------------- */}
          {/* {product.vegetarian && (
            <span className="product-card__label bg-green-100 min-w-[105px] text-green-800 text-xs px-2 py-1 rounded-full">
              🌱 Vegetarisch
            </span>
          )} */}

          {/* -------------------------------------------------- */}
          {/* Gleichwertiges Beispiel mit Ternary */}
          {/* -------------------------------------------------- */}
          {/* {product.vegetarian ? (
            <span className="product-card__label bg-green-100 min-w-[105px] text-green-800 text-xs px-2 py-1 rounded-full">
              🌱 Vegetarisch
            </span>
          ) : null} */}

          {/* -------------------------------------------------- */}
          {/* Beispiel mit Ternary (beide labels gleichzeitig) */}
          {/* -------------------------------------------------- */}
          {/* {product.vegetarian ? (
            <span className="product-card__label">
              🌱 Vegetarisch
            </span>
          ) : 
          (
            <span className="product-card__label product-card__label--meat">
              🥩 Mit Fleisch
            </span>
          ) 
          } */}
         
          {product.vegetarian
            ? <CardLabel className="product-card__label">🌱 Vegetarisch</CardLabel>
            : <CardLabel className="product-card__label--meat product-card__label">🥩 Mit Fleisch</CardLabel>
          }
        </div>

        <CardPrice 
          className="product-card__price" 
          value={product.price}
        />

        <CardDescr className="product-card__descr">
          {product.description}
        </CardDescr>

        <div className="product-card__details flex items-center justify-between text-xs text-gray-500 mb-4 mt-auto">
          <span className='product-card__category'>Kategorie: {product.category}</span>
          <span className='product-card__ingredient'>{product.ingredients} Zutaten</span>
        </div>

        <CardButton></CardButton>
      </div>
    );
  }