import React, { useState } from 'react';
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
  const getCategoryName = (id: string) => kategorien[String(id)]?.Name ?? 'Sonstige'
  const getCategoryOrder = (id: string) => typeof kategorien[id]?.Order === 'number' ? (kategorien[id]!.Order as number) : 999
  
  const [query, setQuery] = useState('')
  const [vegOnly, setVegOnly] = useState(false)
  const [catFilter, setCatFilter] = useState("all")

  const filtered = products.filter((p) => {
    if (catFilter !== "all" && String(p.category) !== catFilter) return false 
    if (vegOnly && !p.vegetarian) return false
    const searchText = query.trim().toLowerCase()
    if (searchText) {
      const productText = (p.name + ' ' + (p.description ?? '')).toLowerCase()
      if (!productText.includes(searchText)) return false   
    }
    return true
  })
  
  const groups: Record<string, typeof filtered> = {};

  for (const p of filtered) {
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

      <div className="filters mb-6 grid gap-3 md:grid-cols-3">
        <input
          type="text"
          placeholder="Suche nach Name oder Beschreibung..."
          value={query}
          onChange={(e) => setQuery(e.target.value)} 
          className="border rounded px-3 py-2"
        />

        <select
          value={catFilter}
          onChange={(e) => setCatFilter(e.target.value)}
          className="border rounded px-3 py-2"
        >
          <option value="all">Alle Kategorien</option>
          {Object.keys(kategorien)
            .sort((a, b) => (getCategoryOrder(a) - getCategoryOrder(b)) || getCategoryName(a).localeCompare(getCategoryName(b)))
            .map((id) => (
              <option key={id} value={id}>
                {getCategoryName(id)}
              </option>
            ))}
        </select>

        <label className="inline-flex items-center gap-2">
          <input
            type="checkbox"
            checked={vegOnly}
            onChange={(e) => setVegOnly(e.target.checked)}
          />
          Nur vegetarisch
        </label>
      </div>

      <CategoriesWrapper>
        {categoryIds.map((catId) => (
            <Category
              key={catId}                 
              title={getCategoryName(catId)}
              items={groups[catId] ?? []}
            />
        ))}     

        {categoryIds.length === 0 && (
          <div className="text-2xl text-center text-gray-400 py-12">Nichts gefunden…</div>
        )}   
      </CategoriesWrapper>

      <PageBottom>
        <Link to="/" className="page__link-back">
          ← Zurück zur Startseite
        </Link>
      </PageBottom>
    </Page>
  );
}

