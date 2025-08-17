// Importiert die notwendigen Router-Funktionen
import { createFileRoute, useNavigate } from '@tanstack/react-router'

// Erstellt eine Route für /posts/new
export const Route = createFileRoute('/posts/new')({
  
  // Komponente für das Erstellen neuer Posts
  component: CreatePost,
})

// Komponente für das Erstellen neuer Posts
function CreatePost() {
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Hier würdest du normalerweise den Post an eine API senden
    // Für dieses Beispiel simulieren wir nur den Erfolg
    
    alert('Post wurde erfolgreich erstellt!')
    
    // Zurück zur Posts-Übersicht
    navigate({ to: '/posts' })
  }

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Neuen Post erstellen</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
              Titel
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Titel des Posts eingeben..."
            />
          </div>
          
          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
              Inhalt
            </label>
            <textarea
              id="content"
              name="content"
              required
              rows={6}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Inhalt des Posts eingeben..."
            />
          </div>
          
          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Post erstellen
            </button>
            
            <button
              type="button"
              onClick={() => navigate({ to: '/posts' })}
              className="bg-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-400 transition-colors"
            >
              Abbrechen
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
