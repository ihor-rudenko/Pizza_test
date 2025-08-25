import { createFileRoute, Link } from '@tanstack/react-router'
import gameiroData from '../gameiro.json';
import { Page } from '../components/Page/Page';
import { PageTitle } from '../components/Page/PageTitle';
import { PageSubtitle } from '../components/Page/PageSubtitle';
import { PageInfo } from '~/components/Page/PageInfo';
import { CategoriesWrapper } from '../components/Category/CategoriesWrapper';
import { Category } from '../components/Category/Category';
import { PageBottom } from '../components/Page/PageBottom';

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
    <Page>
      <PageTitle>Alle unsere Produkte</PageTitle>

      <PageSubtitle>
        Entdecke unsere köstlichen Pizzen, Pasta, Salate und mehr!
      </PageSubtitle>

      <PageInfo>
        Insgesamt {products.length} Produkte verfügbar
      </PageInfo>

      <CategoriesWrapper>
        {categoryIds.map((catId) => (
            <Category
              key={catId}                 
              title={getCategoryName(catId)}
              items={groups[catId] ?? []}
            />
        ))}        
      </CategoriesWrapper>

      <PageBottom>
        <Link to="/" className="page__link-back">
          ← Zurück zur Startseite
        </Link>
      </PageBottom>
    </Page>
  );
}

