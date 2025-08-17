// Importiert die Funktion zum Erstellen einer Datei-basierten Route
import { createFileRoute, Link } from '@tanstack/react-router'

// import { products } from "../gameiro.json"

// Erstellt eine Route für die Startseite (URL: /)
// Das '/' bedeutet: Diese Route wird angezeigt, wenn jemand die Hauptseite besucht
export const Route = createFileRoute('/')({

  // Legt fest, dass die Home-Komponente angezeigt werden soll
  component: Home,
})

// Definiert die Home-Komponente
// Diese Komponente wird angezeigt, wenn jemand die Startseite besucht
function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100 flex items-center justify-center">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-2xl mx-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          🍕 Willkommen bei Pizza Test!
        </h1>
        
        <p className="text-lg text-gray-600 mb-8">
          Entdecke unsere köstlichen Pizzen und bestelle online!
        </p>
        
        <div className="space-y-4">
          <Link 
            to="/products"
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors shadow-md"
          >
            🍕 Alle Produkte anzeigen
          </Link>
          
          <div className="text-sm text-gray-500">
            Klicke oben, um unsere Pizzen zu sehen!
          </div>
        </div>
      </div>
    </div>
  )
}
