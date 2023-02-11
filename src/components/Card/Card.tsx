import { Link } from 'react-router-dom'
import type { Product } from '../../interfaces'
import { slugify } from '../../utils'

import './Card.scss'

interface CardProps {
  product?: Product
  maxWidth?: number
}

export const Card = ({ product, maxWidth }: CardProps) => {
  const slug = slugify(product?.title ?? '')

  return (
    <article className="card" style={{ maxWidth }}>
      <div className="card__text">
        <h2 className="card__title">
          <Link className="card__link" to={`news/${slug}`}>
            {product?.title}
          </Link>
        </h2>
        <p className="card__description">{product?.description}</p>
        {/* <p className="card__category">{category}</p> */}
      </div>
      <div>
        <img
          className="card__image"
          src={product?.thumbnail}
          alt={product?.title}
        />
      </div>
    </article>
  )
}
