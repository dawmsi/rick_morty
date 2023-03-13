import BackIcon from '../assets/arrow_back.svg'
import { useNavigate, useLocation } from 'react-router-dom'

export const HeaderBack = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const prev = location.state?.prev?.pathname
  const search = location.state?.prev?.search

  const lastPage = prev
    ? `${prev || ''}${search || ''}`
    : `/${search || ''}`

  return (
    <div
      className='flex cursor-pointer w-full items-center'
      onClick={() => navigate(lastPage, { replace: true })}
    >
      <div className='px-3'>
        <img className='w-4 h-4' src={BackIcon} alt='back' />
      </div>
      <div className='text-[17px] font-bold uppercase leading-[21px]'>
        go back
      </div>
    </div>
  )
}
