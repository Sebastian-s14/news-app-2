import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Product } from '../interfaces'

interface favoriteNewsState {
  favoriteNews: Product[]
  addFavoriteNew: (id: Product) => void
  removeFavoriteNew: (id: number) => void
}

export const useFavoriteNewsStore = create<favoriteNewsState>()(
  persist(
    (set) => ({
      favoriteNews: [],
      addFavoriteNew: (product: Product) => {
        set((state) => ({
          favoriteNews: [...state.favoriteNews, product],
        }))
      },
      removeFavoriteNew: (id: number) => {
        set((state) => ({
          favoriteNews: state.favoriteNews.filter(
            (product) => product.id !== id,
          ),
        }))
      },
    }),
    {
      name: 'favoriteNews',
    },
  ),
)
