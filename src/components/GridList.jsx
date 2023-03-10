import { GridItem } from './GridItem/GridItem'
import { Link } from 'react-router-dom'

export const GridList = ({ list }) => {
  return (
    <div className='mt-[28px] flex flex-wrap justify-center gap-6 mb-6'>
      {list.map((item) => (
        <Link key={item.id} to='/details'>
          <GridItem item={item} />
        </Link>
      ))}
    </div>
  )
}
