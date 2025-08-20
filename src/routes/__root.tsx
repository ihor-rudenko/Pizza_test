/// <reference types="vite/client" />

import {
  HeadContent,
  Link,
  Scripts, 
  createRootRoute,
} from '@tanstack/react-router'

// import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import * as React from 'react'
import appCss from '~/styles/app.css?url'

// import { DefaultCatchBoundary } from '~/components/DefaultCatchBoundary'
// import { NotFound } from '~/components/NotFound'

// Erstellt und exportiert die Haupt-Route-Konfiguration
// Diese Konfiguration definiert die Grundstruktur und die Haupt-Komponenten der App
export const Route = createRootRoute({

  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },

      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
    ],

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

    scripts: [
      {
        src: '/customScript.js',
        type: 'text/javascript',
      },
    ],
  }),

  // Legt fest, welche Komponente bei Fehlern angezeigt wird
  // errorComponent: DefaultCatchBoundary,

  // Legt fest, was bei 404-Fehlern (Seite nicht gefunden) angezeigt wird
  // notFoundComponent: () => <NotFound />,
  
  // Legt fest, welche Komponente als "Schale" um die gesamte App dient
  shellComponent: RootDocument,
})

// Das ist die Haupt-HTML-Struktur der App
function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <HeadContent />
      </head>

      <body className='body bg-gradient-to-br from-blue-900 to-black-200'>
        {children}

        {/* <TanStackRouterDevtools position="bottom-right" /> */}
        
        <Scripts />
      </body>
    </html>
  )
}


