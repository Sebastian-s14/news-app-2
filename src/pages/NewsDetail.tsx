import { useParams } from 'react-router-dom'
import { CardDetail } from '../components'
// import { Card, Slideshow } from '../components'
import { useFindProducts } from '../hooks'

const NewsDetail = () => {
  // :slug
  const { slug } = useParams()

  const { data, isLoading } = useFindProducts(slug ?? '')
  // console.log(data?.products)

  const currentProduct = data?.products[0]

  if (isLoading) return null

  return <CardDetail product={currentProduct} />
}

export default NewsDetail
