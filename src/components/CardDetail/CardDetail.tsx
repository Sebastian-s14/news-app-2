import { Helmet } from 'react-helmet'

import type { Product } from '../../interfaces'
import { CardListImage } from '../CardListImage'

import './CardDetail.scss'

interface CardDetailProps {
  product?: Product
}

export const CardDetail = ({ product }: CardDetailProps) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{product?.title}</title>
        <meta name="description" content={product?.description} />
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>
      <article className="card-detail">
        {/* <Card product={data?.products[0]} maxWidth={500} /> */}
        {/* <Slideshow images={data?.products[0].images ?? []} /> */}
        <h2>{product?.title}</h2>
        <img src={product?.images[0]} alt="" />
        <p>{product?.description}</p>
        <CardListImage images={product?.images ?? []} />
      </article>
    </>
  )
}
