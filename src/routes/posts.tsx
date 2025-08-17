// Importiert drei wichtige Router-Funktionen:
// Link: Für Navigation zwischen Seiten
// Outlet: Für das Einbetten von Unterrouten
// createFileRoute: Für das Erstellen der Route
import { Link, Outlet, createFileRoute } from '@tanstack/react-router'

// Erstellt eine Route für /posts (URL: example.com/posts)
// Das '/posts' bedeutet: Diese Route wird angezeigt, wenn jemand auf example.com/posts klickt
export const Route = createFileRoute('/posts')({
  
  // Ein "Loader" der Daten lädt, bevor die Seite angezeigt wird
// Hier wird ein leeres Array zurückgegeben (keine echten Posts)
  loader: async () => [],
  
  // Legt fest, dass PostsComponent angezeigt werden soll
  component: PostsComponent,
})

// Definiert die Posts-Komponente
function PostsComponent() {

  // Holt die Daten aus dem Loader (hier: leeres Array)
  const posts = Route.useLoaderData()

  // Gibt die Posts-Komponente zurück
  return (
    <div className="p-2 flex gap-2">
      Hallo World!!!

      <ul className="list-disc pl-4">
        {[...posts, { id: 'i-do-not-exist', title: 'Non-existent Post' }].map(
          (post) => {
            return (
              <li key={post.id} className="whitespace-nowrap">
                
              </li>
            )
          },
        )}
      </ul>
      <hr />

      {/* // Zeigt die Unterrouten an (z.B. /posts/123) */}
      <Outlet />
    </div>
  )
}
