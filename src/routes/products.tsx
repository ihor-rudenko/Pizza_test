import { createFileRoute, Link } from '@tanstack/react-router'
import gameiroData from '../gameiro.json';
import { Categories } from '../components/Category/Categories';
import { PageTitle } from '../components/Page/PageTitle';
import { PageSubtitle } from '../components/Page/PageSubtitle';
import { PageInfo } from '~/components/Page/PageInfo';

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
  const getCategoryOrder = (id: string) => typeof kategorien[id]?.Order === 'number' ? (kategorien[id]!.Order as number) : 999
  const groups: Record<string, typeof products> = {};

  for (const p of products) {
    const key = String(p.category ?? 'other');
    (groups[key] ??= []).push(p);
  }

  const categoryIds = Object.keys(groups).sort((a, b) => {
    const orderA = getCategoryOrder(a)
    const orderB = getCategoryOrder(b)
    return orderA - orderB || getCategoryName(a).localeCompare(getCategoryName(b))
  })

  return (
    <div className="products__page page p-4 max-w-6xl mx-auto">
      <PageTitle className='page__title'>Alle unsere Produkte</PageTitle>

      <PageSubtitle className='page__subtitle'>
        Entdecke unsere köstlichen Pizzen, Pasta, Salate und mehr!
      </PageSubtitle>

      <PageInfo className='page__info'>
        Insgesamt {products.length} Produkte verfügbar
      </PageInfo>

      <div className="category__wrapper flex flex-col gap-y-12 max-w-7xl">
        {categoryIds.map((catId) => (
            <Categories className='categories'
              key={catId}                 
              title={getCategoryName(catId)}
              items={groups[catId] ?? []}
            />
        ))}        
      </div>

      <div className="products__bottom mt-8 text-center">
        <Link to="/" className="products__link font-bold text-yellow-300 hover:text-green-800">
          ← Zurück zur Startseite
        </Link>
      </div>
    </div>
  );
}

