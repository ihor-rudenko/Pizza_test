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
      <div className="bg-white flex flex-col rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
        <div className="flex justify-between items-start mb-3">
          <h2 className="text-xl font-semibold text-gray-800 leading-tight">
            {product.name}
          </h2>
          {product.vegetarian && (
            <span className="bg-green-100 min-w-[105px] text-green-800 text-xs px-2 py-1 rounded-full">
              🌱 Vegetarisch
            </span>
          )}
        </div>

        <div className="flex flex-col flex-grow flex-shrink-0 basis-auto justify-between">
          <p className="text-2xl font-bold text-green-600 mb-3">
            {product.price.toFixed(2)} €
          </p>

          <p className="text-gray-600 mb-4 text-sm line-clamp-2">
            {product.description}
          </p>

          <div className="flex items-center justify-between text-xs text-gray-500 mb-4 mt-auto">
            <span>Kategorie: {product.category}</span>
            <span>{product.ingredients} Zutaten</span>
          </div>
        </div>

        <CardButton/>
      </div>
    );
  }