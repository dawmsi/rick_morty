import { Routes, Route } from 'react-router-dom'

import { HeaderBack, AuthButton } from './components'
import { Header, Main } from './layouts'
import { Login, Home, Details, NotFound, NeedAuth } from './pages'
import { ProtectedRoute } from './routes'

function App() {
  return (
    <div className='app'>
      <div className='container max-w-[1100px] flex flex-col justify-end m-auto'>
        <Header>
          <Routes>
            <Route path='/' element={<AuthButton />} />
            <Route path='/details/:id' element={<HeaderBack />} />
            <Route path='*' element={<HeaderBack />} />
          </Routes>
        </Header>
        <Main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/needAuth' element={<NeedAuth />} />
            <Route element={<ProtectedRoute />}>
              <Route path='/details/:id' element={<Details />} />
            </Route>
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Main>
      </div>
    </div>
  )
}

export default App
