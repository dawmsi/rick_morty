import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { GridList, Logo, SearchLine, ControlPages } from '../components'
import { useDebounce } from '../hooks'
import { getData } from '../service'
import { getPageFromParams } from '../utils'

export const Home = () => {
  const [info, setInfo] = useState({})
  const [list, setList] = useState([])

  const [searchParams, setSearchParams] = useSearchParams({
    page: 1,
    filter: ''
  })

  const [searchInput, setSearchInput] = useState(searchParams.get('filter'))
  const debounced = useDebounce(searchInput, 400)

  useEffect(() => {
    const page = getPageFromParams(searchParams)

    debounced
      ? getData(setList, setInfo, `?page=${page}&name=${debounced}`)
      : getData(setList, setInfo, `?page=${page}`)

    debounced && searchInput && setSearchParams({ page, filter: debounced })
  }, [debounced, searchParams])

  return (
    <>
      <Logo setSearchInput={setSearchInput} />
      <SearchLine searchInput={searchInput} setSearchInput={setSearchInput} />
      <p className='mt-2 text-lg font-bold text-center'>Count: {info.count}</p>
      {list.length ? (
        <>
          <GridList list={list} />
          <ControlPages
            pagesCount={info.count || 1}
            searchParams={searchParams}
            setSearchParams={setSearchParams}
          />
        </>
      ) : (
        <h1 className='text-5xl text-gray-500 text-center py-4'>Not found</h1>
      )}
    </>
  )
}
