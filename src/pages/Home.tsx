import { useFetchProducts } from '../hooks'

export const Home = () => {
  const { data } = useFetchProducts()

  console.log({ data: data?.products })

  return <div>Home</div>
}
