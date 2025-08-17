// Importiert die notwendigen Router-Funktionen
import { createFileRoute } from '@tanstack/react-router'

// Erstellt eine dynamische Route für einzelne Posts
// $postId bedeutet: Das ist ein dynamischer Parameter
export const Route = createFileRoute('/posts/$postId')({
  
  // Loader lädt Daten für den spezifischen Post
  loader: async ({ params }) => {
    // Simuliere das Laden eines Posts
    // In einer echten App würdest du hier eine API aufrufen
    const post = {
      id: params.postId,
      title: `Post ${params.postId}`,
      content: `Das ist der Inhalt von Post ${params.postId}. Hier steht der vollständige Text des Posts.`,
      author: 'Max Mustermann',
      date: new Date().toLocaleDateString('de-DE')
    }
    
    return post
  },
  
  // Komponente, die den einzelnen Post anzeigt
  component: SinglePost,
})

// Komponente für einen einzelnen Post
function SinglePost() {
  // Holt die Daten aus dem Loader
  const post = Route.useLoaderData()

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          {post.title}
        </h1>
        
        <div className="text-sm text-gray-600 mb-4">
          <span>Von: {post.author}</span>
          <span className="mx-2">•</span>
          <span>{post.date}</span>
        </div>
        
        <div className="prose prose-lg">
          <p className="text-gray-700 leading-relaxed">
            {post.content}
          </p>
        </div>
        
        <div className="mt-6 pt-4 border-t border-gray-200">
          <a 
            href="/posts" 
            className="text-blue-600 hover:text-blue-800 underline"
          >
            ← Zurück zur Übersicht
          </a>
        </div>
      </div>
    </div>
  )
}
