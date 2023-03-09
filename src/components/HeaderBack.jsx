import BackIcon from '../assets/arrow_back.svg'

export const HeaderBack = () => {
  return (
    <div className='w-full flex justify-start items-center py-6'>
      <div className='px-3'>
        <img className='w-4 h-4' src={BackIcon} alt='back' />
      </div>
      <p className='text-[17px] font-bold uppercase leading-[21px]'>go back</p>
    </div>
  )
}
