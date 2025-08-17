// Importiert drei wichtige Router-Funktionen:
// Link: Für Navigation zwischen Seiten
// Outlet: Für das Einbetten von Unterrouten
// createFileRoute: Für das Erstellen der Route
import { Link, Outlet, createFileRoute } from '@tanstack/react-router'

// Erstellt eine Route für /posts (URL: example.com/posts)
// Das '/posts' bedeutet: Diese Route wird angezeigt, wenn jemand auf example.com/posts klickt
export const Route = createFileRoute('/posts')({
  
  // Ein "Loader" der Daten lädt, bevor die Seite angezeigt wird
  // Hier simulieren wir einige Beispiel-Posts
  loader: async () => {
    return [
      { id: '1', title: 'Mein erster Post', excerpt: 'Das ist eine kurze Zusammenfassung des ersten Posts...' },
      { id: '2', title: 'Zweiter Post', excerpt: 'Hier steht eine Zusammenfassung des zweiten Posts...' },
      { id: '3', title: 'Dritter Post', excerpt: 'Und hier die Zusammenfassung des dritten Posts...' },
    ]
  },
  
  // Legt fest, dass PostsComponent angezeigt werden soll
  component: PostsComponent,
})

// Definiert die Posts-Komponente
function PostsComponent() {

  // Holt die Daten aus dem Loader
  const posts = Route.useLoaderData()

  // Gibt die Posts-Komponente zurück
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Alle Posts</h1>
        
        <Link 
          to="/posts/new"
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
        >
          + Neuen Post erstellen
        </Link>
      </div>
      
      <div className="grid gap-4 mb-8">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {post.title}
            </h2>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <Link 
              to={post.id}
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              Post lesen
            </Link>
          </div>
        ))}
      </div>

      <hr className="my-8" />

      {/* Zeigt die Unterrouten an (z.B. /posts/123) */}
      <Outlet />
    </div>
  )
}
