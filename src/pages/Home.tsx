import { useRef, useState } from 'react'
import { CardList } from '../components'
import { useAuthStore, useFindProducts } from '../hooks'

const Home = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [textSearch, setTextSearch] = useState('')

  const { isAuthenticated } = useAuthStore()

  const { data: filterData } = useFindProducts(textSearch)

  return (
    <>
      <div className="container" style={{ padding: 0 }}>
        {isAuthenticated ? (
          <>
            <input
              ref={inputRef}
              type="search"
              placeholder="buscar..."
              style={{ maxWidth: 1100, marginTop: 50 }}
            />
            <button
              onClick={() => {
                setTextSearch(inputRef.current?.value ?? '')
              }}
            >
              Buscar
            </button>
          </>
        ) : (
          <div style={{ height: 50 }}></div>
        )}
      </div>
      <CardList data={filterData?.products ?? []} />
    </>
  )
}
export default Home
