import { HeaderBack } from './components'
import { Header, Main } from './layouts'
import { Details } from './pages/Details'
import { Home } from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getData } from './service/getData'
import { useDebounce } from './hooks/useDebounce'

function App() {
  const localSK = 'searchInput'
  const [searchInput, setSearchInput] = useState(
    localStorage.getItem(localSK) ?? ''
  )
  const debounced = useDebounce(searchInput, 400)

  const [info, setInfo] = useState({})
  const [list, setList] = useState([])

  console.log(info)

  useEffect(() => {
    if (debounced) {
      getData(setList, setInfo, `?name=${debounced}`)
      localStorage.setItem(localSK, searchInput)
    } else {
      getData(setList, setInfo)
      localStorage.removeItem(localSK)
    }
  }, [debounced])

  return (
    <BrowserRouter>
      <div className='app'>
        <div className='container max-w-[1100px] flex flex-col justify-center m-auto'>
          <Header>
            <Routes>
              <Route path='/' element={''} />
              <Route path='/details' element={<HeaderBack />} />
            </Routes>
          </Header>
          <Main>
            <Routes>
              <Route
                path='/'
                element={
                  <Home
                    count={info.count}
                    list={list}
                    searchInput={searchInput}
                    setSearchInput={setSearchInput}
                  />
                }
              />
              <Route path='/details' element={<Details />} />
            </Routes>
          </Main>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
