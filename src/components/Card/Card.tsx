import { Link } from 'react-router-dom'
import type { Product } from '../../interfaces'

import './Card.scss'

interface CardProps {
  product: Product
}

export const Card = ({
  product: { title, description, thumbnail },
}: CardProps) => {
  return (
    <article className="card">
      <div className="card__text">
        <h2 className="card__title">
          <Link className="card__link" to={`news/${title}`}>
            {title}
          </Link>
        </h2>
        <p className="card__description">{description}</p>
        {/* <p className="card__category">{category}</p> */}
      </div>
      <div>
        <img className="card__image" src={thumbnail} alt={title} />
      </div>
    </article>
  )
}
