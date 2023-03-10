import React from 'react'
import { GridList, Logo, SearchLine } from '../components'

export const Home = ({ searchInput, setSearchInput, list, count }) => {
  return (
    <>
      <Logo />
      <SearchLine searchInput={searchInput} setSearchInput={setSearchInput} />
      <p className='mt-2 text-lg font-bold text-center'>Count: {count}</p>
      <GridList list={list} />
    </>
  )
}
