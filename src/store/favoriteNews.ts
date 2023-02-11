import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Product } from '../interfaces'

interface favoriteNewsState {
  favoriteNewsIds: Product[]
  addFavoriteNew: (id: Product) => void
  removeFavoriteNew: (id: number) => void
}

export const useFavoriteNewsStore = create<favoriteNewsState>()(
  persist(
    (set) => ({
      favoriteNewsIds: [],
      addFavoriteNew: (product: Product) => {
        set((state) => ({
          favoriteNewsIds: [...state.favoriteNewsIds, product],
        }))
      },
      removeFavoriteNew: (id: number) => {
        set((state) => ({
          favoriteNewsIds: state.favoriteNewsIds.filter(
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
