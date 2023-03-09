import { HeaderBack } from './components'
import { Header, Main } from './layouts'
import { Details } from './pages/Details'
import { Home } from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
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
              <Route path='/' element={<Home />} />
              <Route path='/details' element={<Details />} />
            </Routes>
          </Main>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
