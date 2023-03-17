import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { GridList, Logo, SearchLine, ControlPages } from '../components'
import { useDebounce } from '../hooks'
import { getData } from '../service'
import { getPageFromParams } from '../utils'

export const Home = () => {
  const [loading, setLoading] = useState(false)

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
      ? getData(setList, setInfo, setLoading, `?page=${page}&name=${debounced}`)
      : getData(setList, setInfo, setLoading, `?page=${page}`)

    debounced && searchInput && setSearchParams({ page, filter: debounced })
  }, [debounced, searchParams])

  return (
    <>
      <Logo setSearchInput={setSearchInput} />
      <SearchLine searchInput={searchInput} setSearchInput={setSearchInput} />
      <p className='mt-2 text-lg font-bold text-center'>
        Count: {info?.count || 0}
      </p>
      {loading ? (
        <h1 className='flex flex-col justify-center items-center text-6xl text-gray-500 text-center py-4'>
          <span className='shadow-lg shadow-[#00b0c8] bg-[#9fff88] border-y-8 rounded-full py-1 border-[#007389] w-4 h-4 my-2 mb-6 rotate-180 animate-bounce'></span>
          <p className='animate-pulse'>Loading ...</p>
        </h1>
      ) : list.length ? (
        <>
          <GridList list={list} />
          <ControlPages
            page={getPageFromParams(searchParams)}
            pagesCount={info?.pages || 1}
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
