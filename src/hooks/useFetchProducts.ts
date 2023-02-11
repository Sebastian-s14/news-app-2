import { useQuery } from '@tanstack/react-query'

import { fetchProducts } from '../services'

export const useFetchProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => await fetchProducts(),
  })
}
