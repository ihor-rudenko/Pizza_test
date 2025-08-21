// import { createFileRoute, Link } from '@tanstack/react-router'
// import gameiroData from '../gameiro.json'
// import { ProductCard } from '../components/ProductCard';

// export const Route = createFileRoute('/products')({
  
//   loader: async () => {

//     const products = Object.values(gameiroData.menu.produkte)
//       .filter(product => 
//         product && 
//         typeof product === 'object' && 
//         'Name' in product && 
//         'Preise' in product && 
//         'ID' in product
//       ) 
      
//       .map(product => ({
//         id: (product as any).ID.toString(),
//         name: (product as any).Name,
//         description: (product as any).Beschreibung || '',
//         price: (product as any).Preise['2'] || (product as any).Preise['3'] || (product as any).Preise['4'] || 0, // Standardpreis
//         category: (product as any).Kategorie,
//         vegetarian: (product as any).Vegetarisch || false,
//         ingredients: (product as any).Zutaten ? Object.keys((product as any).Zutaten).length : 0
//       }))

//       .sort((a,b) => String(a.category ?? '').localeCompare(String(b.category ?? '')) || a.name.localeCompare(b.name))
    
//     return products
//   },
  
//   component: ProductsPage,
// })


// function ProductsPage() {
//   const products = Route.useLoaderData();  

//   return (
//     <div className="product__page p-4 max-w-6xl mx-auto">
//       <h1 className="product__title text-3xl font-bold text-white mb-6">Alle unsere Produkte</h1>

//       <div className="product__info mb-6 text-white-600">
//         <h3 className="product__subtitle">Entdecke unsere köstlichen Pizzen, Pasta, Salate und mehr!</h3>
//         <p className="product__text text-sm mt-2">Insgesamt {products.length} Produkte verfügbar</p>
//       </div>

//       <div className="product__wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {products.map(product => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>

//       <div className="product__bottom mt-8 text-center">
//         <Link to="/" className="product__link text-orange-600 hover:text-green-800 underline">
//           ← Zurück zur Startseite
//         </Link>
//       </div>
//     </div>
//   );
// }





import { createFileRoute, Link } from '@tanstack/react-router'
import gameiroData from '../gameiro.json'
import { ProductCard } from '../components/ProductCard';

// Erstellt eine Route für /products (URL: example.com/products)
export const Route = createFileRoute('/products')({
  // Loader lädt die echten Produktdaten aus gameiro.json
  loader: async () => {
    // Extrahiert alle Produkte aus der gameiro.json
    const products = Object.values(gameiroData.menu.produkte)
      .filter(product =>
        product &&
        typeof product === 'object' &&
        'Name' in product &&
        'Preise' in product &&
        'ID' in product
      )
      // Nur gültige Produkte mit allen notwendigen Eigenschaften
      .map(product => ({
        id: (product as any).ID.toString(),
        name: (product as any).Name,
        description: (product as any).Beschreibung || '',
        price: (product as any).Preise['2'] || (product as any).Preise['3'] || (product as any).Preise['4'] || 0, // Standardpreis
        category: (product as any).Kategorie,                        // <- lassen!
        vegetarian: (product as any).Vegetarisch || false,
        ingredients: (product as any).Zutaten ? Object.keys((product as any).Zutaten).length : 0
      }))
      .sort((a,b) => String(a.category ?? '').localeCompare(String(b.category ?? '')) || a.name.localeCompare(b.name))

    return products
  },

  // Komponente für die Produkte-Seite
  component: ProductsPage,
})

function ProductsPage() {
  // Lädt die Produktdaten aus dem Loader
  const products = Route.useLoaderData();
  const kategorien = gameiroData.menu.kategorien as Record<string, { Name?: string; Order?: number; produkte?: string[] }>


  // ---- NEU: minimal – nach Kategorie gruppieren ----
  // key = Kategorien-ID (aus product.category)
  const groups: Record<string, typeof products> = {};
  for (const p of products) {
    const key = String(p.category ?? 'other');
    (groups[key] ??= []).push(p);
  }

  // Hilfsfunktionen: Name & Order aus gameiroData holen
  const getCatName = (id: string) => kategorien[id]?.Name ?? 'Sonstige'

  

  const getCatOrder = (id: string) =>
    typeof kategorien[id]?.Order === 'number' ? (kategorien[id]!.Order as number) : 999

  // Kategorien sortieren: erst Order, dann Name
  const categoryIds = Object.keys(groups).sort((a, b) => {
    const oa = getCatOrder(a);
    const ob = getCatOrder(b);
    if (oa !== ob) return oa - ob;
    return getCatName(a).localeCompare(getCatName(b));
  });
  // ---- ENDE neu ----

  return (
    <div className="product__page p-4 max-w-6xl mx-auto">
      <h1 className="product__title text-3xl font-bold text-white mb-6">Alle unsere Produkte</h1>

      <div className="product__info mb-6 text-white-600">
        <h3 className="product__subtitle">Entdecke unsere köstlichen Pizzen, Pasta, Salate und mehr!</h3>
        <p className="product__text text-sm mt-2">Insgesamt {products.length} Produkte verfügbar</p>
      </div>

      {/* Gruppierte Ausgabe: Abschnitt pro Kategorie */}
      <div className="space-y-12">
        {categoryIds.map((catId) => (
          <section key={catId}>
            <h2 className="text-2xl font-semibold mb-4">{getCatName(catId)}</h2>

            <div className="product__wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {groups[catId].map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="product__bottom mt-8 text-center">
        <Link to="/" className="product__link text-orange-600 hover:text-green-800 underline">
          ← Zurück zur Startseite
        </Link>
      </div>
    </div>
  );
}

// export default ProductsPage
