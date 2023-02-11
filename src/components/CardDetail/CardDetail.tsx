import type { Product } from '../../interfaces'
import { CardListImage } from '../CardListImage'

import './CardDetail.scss'

interface CardDetailProps {
  product?: Product
}

export const CardDetail = ({ product }: CardDetailProps) => {
  return (
    <article className="card-detail">
      {/* <Card product={data?.products[0]} maxWidth={500} /> */}
      {/* <Slideshow images={data?.products[0].images ?? []} /> */}
      <h2>{product?.title}</h2>
      <img src={product?.images[0]} alt="" />
      <p>{product?.description}</p>
      <CardListImage images={product?.images ?? []} />
    </article>
  )
}
