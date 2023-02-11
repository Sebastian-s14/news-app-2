import { useQuery } from '@tanstack/react-query'

import { findProducts } from '../services'

export const useFindProducts = (q: string) => {
  return useQuery({
    queryKey: ['products', q],
    queryFn: async () => await findProducts(q),
  })
}
