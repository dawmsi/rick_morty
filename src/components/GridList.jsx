import { GridItem } from './GridItem/GridItem'

export const GridList = () => {
  return (
    <div className='mb-6'>
      {Array(4)
        .fill(0)
        .map((item, index) => (
          <GridItem key={index} />
        ))}
    </div>
  )
}
