// Importiert die notwendigen Router-Funktionen
import { createFileRoute, Link } from '@tanstack/react-router'

// Importiert die Produktdaten aus der gameiro.json
import gameiroData from '../gameiro.json'

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
      ) // Nur gültige Produkte mit allen notwendigen Eigenschaften
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

// Produkte-Seite Komponente
function ProductsPage() {

  // Holt die Produktdaten aus dem Loader
  const products = Route.useLoaderData()

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-white-800 mb-6">Alle unsere Produkte</h1>
      
      <div className="mb-6 text-white-600">
        <p>Entdecke unsere köstlichen Pizzen, Pasta, Salate und mehr!</p>
        <p className="text-sm mt-2">Insgesamt {products.length} Produkte verfügbar</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white flex flex-col rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
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
            
            <button className="w-full bg-orange-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
                In den Warenkorb
            </button>
          </div>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <Link 
          to="/" 
          className="text-orange-600 hover:text-green-800 underline"
        >
          ← Zurück zur Startseite
        </Link>
      </div>
    </div>
  )
}
