import { GridItem } from './GridItem/GridItem'
import { Link } from 'react-router-dom'

export const GridList = () => {
  return (
    <div className='mt-[28px] flex flex-wrap justify-center gap-6 mb-6'>
      {Array(8)
        .fill(0)
        .map((item, index) => (
          <Link key={index} to='/details'>
            <GridItem />
          </Link>
        ))}
    </div>
  )
}
