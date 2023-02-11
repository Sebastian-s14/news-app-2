import { CardList } from '../components'
import { useFetchProducts } from '../hooks'

const Home = () => {
  const { data } = useFetchProducts()

  // console.log({ data: data?.products })

  return (
    <>
      <CardList data={data?.products ?? []} />
    </>
  )
}
export default Home
