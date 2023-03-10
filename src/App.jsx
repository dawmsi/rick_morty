import { HeaderBack } from './components'
import { Header, Main } from './layouts'
import { Details } from './pages/Details'
import { Home } from './pages/Home'
import { Routes, Route, useSearchParams, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getData } from './service/getData'
import { useDebounce } from './hooks/useDebounce'

function App() {
  const location = useLocation()

  const localSK = 'searchInput'
  const [searchInput, setSearchInput] = useState(
    localStorage.getItem(localSK) ?? ''
  )

  const debounced = useDebounce(searchInput, 400)

  const [info, setInfo] = useState({})
  const [list, setList] = useState([])

  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    if (!location.path === '/' && !searchParams.get('page')) {
      setSearchParams({ page: '1' })
    }

    const page = searchParams.get('page')
    console.log(searchParams)

    if (debounced) {
      getData(setList, setInfo, `?page=${page}&name=${debounced}`)
      localStorage.setItem(localSK, searchInput)
    } else {
      getData(setList, setInfo, `?page=${page}`)
      localStorage.removeItem(localSK)
    }
  }, [debounced, searchParams])

  return (
    <div className='app'>
      <div className='container max-w-[1100px] flex flex-col justify-center m-auto'>
        <Header>
          <Routes>
            <Route path='/' element={''} />
            <Route path='/details/:id' element={<HeaderBack />} />
          </Routes>
        </Header>
        <Main>
          <Routes>
            <Route
              path='/'
              element={
                <Home
                  page={+searchParams.get('page')}
                  count={info.count}
                  pagesCount={info.pages}
                  list={list}
                  searchInput={searchInput}
                  setSearchInput={setSearchInput}
                  setSearchParams={setSearchParams}
                />
              }
            />
            <Route path='/details/:id' element={<Details />} />
          </Routes>
        </Main>
      </div>
    </div>
  )
}

export default App
