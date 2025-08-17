// Das ist ein TypeScript-Kommentar, der Vite mitteilt, dass diese Datei Vite-spezifische Typen verwendet
/// <reference types="vite/client" />

//Importiert wichtige Funktionen aus der TanStack Router Bibliothek
import {
  HeadContent,
  Link,
  Scripts, 
  createRootRoute,
} from '@tanstack/react-router'

// Importiert die Devtools für die TanStack Router Bibliothek
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

// Importiert React (alle Funktionen)
import * as React from 'react'

// Importiert die DefaultCatchBoundary Komponente (Fehlerbehandlung)
import { DefaultCatchBoundary } from '~/components/DefaultCatchBoundary'

// Importiert die NotFound Komponente (404 Fehler)
import { NotFound } from '~/components/NotFound'

// Importiert die Haupt-CSS-Datei der App
import appCss from '~/styles/app.css?url'

// Erstellt und exportiert die Haupt-Route-Konfiguration
// Diese Konfiguration definiert die Grundstruktur und die Haupt-Komponenten der App
export const Route = createRootRoute({

  // Definiert alle HTML-Head-Elemente:
  head: () => ({

    // Meta-Tags (Zeichensatz, Viewport)
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
    ],

    // CSS-Links (Stylesheet, Icons, Manifest)
    links: [
      { rel: 'stylesheet', href: appCss },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      { rel: 'manifest', href: '/site.webmanifest', color: '#fffff' },
      { rel: 'icon', href: '/favicon.ico' },
    ],

    // JavaScript-Dateien
    scripts: [
      {
        src: '/customScript.js',
        type: 'text/javascript',
      },
    ],
  }),

  // Legt fest, welche Komponente bei Fehlern angezeigt wird
  errorComponent: DefaultCatchBoundary,

  // Legt fest, was bei 404-Fehlern (Seite nicht gefunden) angezeigt wird
  notFoundComponent: () => <NotFound />,
  
  // Legt fest, welche Komponente als "Schale" um die gesamte App dient
  shellComponent: RootDocument,
})

// Das ist die Haupt-HTML-Struktur der App
function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        {/* HeadContent fügt alle notwendigen Meta-Tags und Links hinzu */}
        <HeadContent />
      </head>

      <body>
        {/* {children} wird durch den eigentlichen Seiteninhalt ersetzt */}
        {children}

        {/* TanStackRouterDevtools zeigt Router-Informationen an (nur in Entwicklung) */}
        <TanStackRouterDevtools position="bottom-right" />
        
        {/* Scripts lädt alle notwendigen JavaScript-Dateien */}
        <Scripts />
      </body>
    </html>
  )
}


