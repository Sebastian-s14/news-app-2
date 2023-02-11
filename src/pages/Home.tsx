import { CardList } from '../components'
import { useFetchProducts } from '../hooks'

const Home = () => {
  const { data } = useFetchProducts()

  // console.log({ data: data?.products })

  return (
    <>
      <input
        type="search"
        placeholder="buscar..."
        style={{ maxWidth: 1100, marginTop: 50 }}
      />
      <CardList data={data?.products ?? []} />
    </>
  )
}
export default Home
