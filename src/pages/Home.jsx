import React from 'react'
import { GridList, Logo, SearchLine } from '../components'

export const Home = ({list}) => {
  return (
    <>
      <Logo />
      <SearchLine />
      <GridList list={list}/>
    </>
  )
}
