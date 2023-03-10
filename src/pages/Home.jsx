import { GridList, Logo, SearchLine, ControlPages } from '../components'

export const Home = ({
  searchInput,
  setSearchInput,
  list,
  count,
  pagesCount,
  page,
  setSearchParams
}) => {
  return (
    <>
      <Logo setSearchParams={setSearchParams} setSearchInput={setSearchInput} />
      <SearchLine
        setSearchParams={setSearchParams}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      <p className='mt-2 text-lg font-bold text-center'>Count: {count}</p>
      {list?.length ? (
        <>
          <GridList list={list} />
          <ControlPages
            pagesCount={pagesCount || 1}
            page={page}
            setSearchParams={setSearchParams}
          />
        </>
      ) : (
        <h1 className='text-5xl text-gray-500 text-center py-4'>No found</h1>
      )}
    </>
  )
}
