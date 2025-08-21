import { createFileRoute, Link } from '@tanstack/react-router'
import gameiroData from '../gameiro.json'
import { ProductCard } from '../components/ProductCard';

export const Route = createFileRoute('/products')({
  loader: async () => {
    const products = Object.values(gameiroData.menu.produkte)
      .filter(product =>
        product &&
        typeof product === 'object' &&
        'Name' in product &&
        'Preise' in product &&
        'ID' in product
      )

      .map(product => ({
        id: (product as any).ID.toString(),
        name: (product as any).Name,
        description: (product as any).Beschreibung || '',
        price: (product as any).Preise['2'] || (product as any).Preise['3'] || (product as any).Preise['4'] || 0,
        category: (product as any).Kategorie,                      
        vegetarian: (product as any).Vegetarisch || false,
        ingredients: (product as any).Zutaten ? Object.keys((product as any).Zutaten).length : 0
      }))
      .sort((a,b) => String(a.category ?? '').localeCompare(String(b.category ?? '')) || a.name.localeCompare(b.name))

    return products
  },

  component: ProductsPage,
})

function ProductsPage() {
  const products = Route.useLoaderData();

  const kategorien = gameiroData.menu.kategorien as Record<string, { Name?: string; Order?: number; produkte?: string[] }>

  const getCategoryName = (id: string) => kategorien[id]?.Name ?? 'Sonstige'

  const getCategoryOrder = (id: string) =>
    typeof kategorien[id]?.Order === 'number' ? (kategorien[id]!.Order as number) : 999

  const groups: Record<string, typeof products> = {};
  for (const p of products) {
    const key = String(p.category ?? 'other');
    (groups[key] ??= []).push(p);
  }

  const categoryIds = Object.keys(groups).sort((a, b) => {
    const oa = getCategoryOrder(a)
    const ob = getCategoryOrder(b)
    return oa - ob || getCategoryName(a).localeCompare(getCategoryName(b))
  })

  return (
    <div className="product__page p-4 max-w-6xl mx-auto">
      <h1 className="product__title text-3xl font-bold text-white mb-6">
        Alle unsere Produkte
      </h1>

      <div className="product__info mb-6 text-white-600">
        <h3 className="product__subtitle">
          Entdecke unsere köstlichen Pizzen, Pasta, Salate und mehr!
        </h3>
        
        <p className="product__text text-sm mt-2">
          Insgesamt {products.length} Produkte verfügbar
        </p>
      </div>

      <div className="category__body flex flex-col gap-y-12">
        {categoryIds.map((catId) => (

          <div className="category-wrapper" key={catId}>
            <h2 className="product__category-name text-2xl font-semibold mb-4">
              {getCategoryName(catId)}
            </h2>

            <div className="product__wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {groups[catId].map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
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

