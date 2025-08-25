import React, { useState, useMemo } from 'react';
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
    const kategorien = gameiroData.menu.kategorien as Record<string, { Name?: string; Order?: number; produkte?: string[] }>

    const products = Object.values<any>(gameiroData.menu.produkte)
      .filter(
        (product) =>
          product &&
          typeof product === 'object' &&
          'Name' in product &&
          'Preise' in product &&
          'ID' in product
      )
      .map((product) => {
        const categoryId = String((product as any).Kategorie ?? 'other')
        const cat = kategorien[categoryId]
        return {
          id: String((product as any).ID),
          name: (product as any).Name,
          description: (product as any).Beschreibung || '',
          price:
            (product as any).Preise?.['2'] ||
            (product as any).Preise?.['3'] ||
            (product as any).Preise?.['4'] ||
            0,

          categoryId,
          categoryName: cat?.Name ?? 'Sonstige',
          categoryOrder: typeof cat?.Order === 'number' ? (cat!.Order as number) : 999,
          vegetarian: Boolean((product as any).Vegetarisch),
          ingredients: (product as any).Zutaten
            ? Object.keys((product as any).Zutaten).length
            : 0,
        }
      })

      .sort(
        (a, b) =>
          a.categoryOrder - b.categoryOrder ||
          a.categoryName.localeCompare(b.categoryName) ||
          a.name.localeCompare(b.name)
      )

    return products
  },

  component: ProductsPage,
})

function ProductsPage() {
  const products = Route.useLoaderData();

  const [query, setQuery] = useState('')  
  const [vegOnly, setVegOnly] = useState(false) 
  const [catFilter, setCatFilter] = useState<'all' | string>('all') 

  const categoryList = useMemo(() => {
    const map = new Map<string, { id: string; name: string; order: number }>()
    
    for (const p of products) {
      map.set(p.categoryId, {
        id: p.categoryId,
        name: p.categoryName,
        order: p.categoryOrder,
      })
    }

    return Array.from(map.values()).sort(
      (a, b) => a.order - b.order || a.name.localeCompare(b.name)
    )
  }, [products])

  const filtered = useMemo(() => {
    const searchText = query.trim().toLowerCase()
    return products.filter((p) => {
      if (catFilter !== 'all' && p.categoryId !== catFilter) return false
      if (vegOnly && !p.vegetarian) return false

      if (searchText) {
        const productText = (p.name + ' ' + (p.description ?? '')).toLowerCase()
        if (!productText.includes(searchText)) return false
      }
      return true
    })
  }, [products, query, vegOnly, catFilter])

  const groups: Record<string, typeof filtered> = useMemo(() => {
    const g: Record<string, typeof filtered> = {}
    for (const p of filtered) {
      ;(g[p.categoryId] ??= []).push(p)
    }
    return g
  }, [filtered])

  const visibleCategoryIds = useMemo(() => {
    return Object.keys(groups).sort((a, b) => {
      const A = groups[a][0]
      const B = groups[b][0]
      return (
        A.categoryOrder - B.categoryOrder ||
        A.categoryName.localeCompare(B.categoryName)
      )
    })
  }, [groups])

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
          {categoryList.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
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
       {visibleCategoryIds.map((catId) => (
          <Category
            key={catId}
            className="categories"
            title={groups[catId][0].categoryName}
            items={groups[catId]}
          />
        ))}     

        {visibleCategoryIds.length === 0 && (
          <div className="text-center text-gray-400 py-12">
            Nichts gefunden…
          </div>
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

