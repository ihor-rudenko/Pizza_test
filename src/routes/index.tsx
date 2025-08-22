import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-2xl mx-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          🍕 Willkommen bei Pizza Test!
        </h1>
        
        <p className="text-lg text-gray-600 mb-8">
          Entdecke unsere köstlichen Menüs und bestelle online!
        </p>
        
        <div className="space-y-4">
          <Link to="/products" className="card-button inline-block bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors shadow-md">
            Alle Produkte anzeigen
          </Link>
          
          <p className="text-sm text-gray-500">
            Klicke oben, um unsere Pizzen zu sehen!
          </p>
        </div>
      </div>
    </div>
  )
}
