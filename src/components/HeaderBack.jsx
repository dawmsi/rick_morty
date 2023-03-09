import BackIcon from '../assets/arrow_back.svg'
import { Link } from 'react-router-dom'

export const HeaderBack = () => {
  return (
    <div className='w-full flex justify-start'>
      <Link className='flex  py-6 items-center' to='/'>
        <div className='px-3'>
          <img className='w-4 h-4' src={BackIcon} alt='back' />
        </div>
        <div className='text-[17px] font-bold uppercase leading-[21px]'>
          go back
        </div>
      </Link>
    </div>
  )
}
