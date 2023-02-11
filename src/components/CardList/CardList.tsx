import type { Product } from '../../interfaces'
import { Card } from '../Card'

import './CardList.scss'

interface CardListProps {
  data: Product[]
}

export const CardList = ({ data }: CardListProps) => {
  return (
    <section className="card-list">
      {data?.map((p) => (
        <Card key={p.id} product={p} />
      ))}
    </section>
  )
}
