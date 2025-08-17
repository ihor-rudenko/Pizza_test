// Importiert die Funktion zum Erstellen einer Datei-basierten Route

import { createFileRoute } from '@tanstack/react-router'

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
    <div className="p-2">
      <h3>Welcome Home!!!</h3>
    </div>
  )
}
