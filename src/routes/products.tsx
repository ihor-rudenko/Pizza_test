// Importiert die notwendigen Router-Funktionen
import { createFileRoute } from '@tanstack/react-router'

// Erstellt eine Route für /products (URL: example.com/products)
export const Route = createFileRoute('/products')({
  
  // Loader lädt Produktdaten
  loader: async () => {
    // Hier würdest du normalerweise echte Produktdaten laden
    // Für dieses Beispiel simulieren wir einige Produkte
    return [
      { id: '1', name: 'Pizza Margherita', price: '12.99 €', description: 'Klassische Pizza mit Tomatensauce und Mozzarella' },
      { id: '2', name: 'Pizza Salami', price: '14.99 €', description: 'Pizza mit Salami, Tomatensauce und Käse' },
      { id: '3', name: 'Pizza Hawaii', price: '13.99 €', description: 'Pizza mit Schinken und Ananas' },
      { id: '4', name: 'Pizza Vegetariana', price: '15.99 €', description: 'Pizza mit frischem Gemüse' },
    ]
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
      <h1 className="text-3xl font-bold text-orange-800 mb-6">Alle unsere Produkte</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {product.name}
            </h2>
            <p className="text-2xl font-bold text-green-600 mb-3">
              {product.price}
            </p>
            <p className="text-gray-600 mb-4">
              {product.description}
            </p>
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
              In den Warenkorb
            </button>
          </div>
        ))}

      </div>
      
      <div className="mt-8 text-center">
        <a 
          href="/" 
          className="text-orange-600 hover:text-white-800 underline"
        >
          ← Zurück zur Startseite
        </a>
      </div>
    </div>
  )
}
