import { GridItem } from './GridItem'
import { useLocation, useNavigate } from 'react-router-dom'

export const GridList = ({ list }) => {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <div className='mt-[28px] flex flex-wrap justify-center gap-6 mb-6'>
      {list
        /* .filter((item) =>
          item.name.toUpperCase().includes(debounced.toUpperCase()),
        ) */
        .map((item) => (
          <div
            key={item.id}
            onClick={() => {
              navigate(`/details/${item.id}`, {
                state: { prev: location }
              })
            }}
          >
            <GridItem item={item} />
          </div>
        ))}
    </div>
  )
}
