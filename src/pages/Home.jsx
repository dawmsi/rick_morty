import React from 'react'
import { GridList, Logo, SearchLine } from '../components'

export const Home = ({ list, setList }) => {
  return (
    <>
      <Logo />
      <SearchLine list={list} setList={setList} />
      <GridList list={list} />
    </>
  )
}
