import type { ProductResponse } from '../interfaces'
import { api } from '../lib'

export const fetchProducts = async () => {
  const { data } = await api<ProductResponse>({
    url: '/products',
    params: {
      limit: 20,
    },
  })
  return data
}

export const findProducts = async (q: string) => {
  const { data } = await api<ProductResponse>({
    url: '/products/search',
    params: {
      q,
      limit: 1,
    },
  })
  return data
}
