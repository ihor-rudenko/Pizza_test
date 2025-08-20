import { createFileRoute, Link } from '@tanstack/react-router'
import gameiroData from '../gameiro.json'
import { ProductCard } from '../components/ProductCard';

// Erstellt eine Route für /products (URL: example.com/products)
export const Route = createFileRoute('/products')({
  
  // Loader lädt die echten Produktdaten aus gameiro.json
  loader: async () => {

    // Extrahiert alle Produkte aus der gameiro.json
    const products = Object.values(gameiroData.menu.produkte)
      .filter(product => 
        product && 
        typeof product === 'object' && 
        'Name' in product && 
        'Preise' in product && 
        'ID' in product
      ) 
      
      // Nur gültige Produkte mit allen notwendigen Eigenschaften
      .map(product => ({
        id: (product as any).ID.toString(),
        name: (product as any).Name,
        description: (product as any).Beschreibung || '',
        price: (product as any).Preise['2'] || (product as any).Preise['3'] || (product as any).Preise['4'] || 0, // Standardpreis
        category: (product as any).Kategorie,
        vegetarian: (product as any).Vegetarisch || false,
        ingredients: (product as any).Zutaten ? Object.keys((product as any).Zutaten).length : 0
      }))
      .sort((a, b) => a.name.localeCompare(b.name)) // Sortiert alphabetisch
    
    return products
  },
  
  // Komponente für die Produkte-Seite
  component: ProductsPage,
})

function ProductsPage() {
  // Lädt die Produktdaten aus dem Loader
  const products = Route.useLoaderData();  

  return (
    <div className="product__page p-4 max-w-6xl mx-auto">
      <h1 className="product__title text-3xl font-bold text-white mb-6">Alle unsere Produkte</h1>

      <div className="product__info mb-6 text-white-600">
        <h3 className="product__subtitle">Entdecke unsere köstlichen Pizzen, Pasta, Salate und mehr!</h3>
        <p className="product__text text-sm mt-2">Insgesamt {products.length} Produkte verfügbar</p>
      </div>

      <div className="product__wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          // Rendert jede Produktkarte
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="product__bottom mt-8 text-center">
        <Link to="/" className="product__link text-orange-600 hover:text-green-800 underline">
          ← Zurück zur Startseite
        </Link>
      </div>
    </div>
  );
}