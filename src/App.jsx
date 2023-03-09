import { HeaderBack } from './components'
import { Header, Main } from './layouts'
import { Details } from './pages/Details'
import { Home } from './pages/Home'

function App() {
  return (
    <div className='app'>
      <div className='container m-auto'>
        <Header>
          <HeaderBack />
        </Header>
        <Main>
          <Details />
        </Main>
      </div>
    </div>
  )
}

export default App
