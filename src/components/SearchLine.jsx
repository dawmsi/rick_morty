import SearchIcon from '../assets/search.svg'

export const SearchLine = () => {
  return (
    <div className='flex px-4 items-center w-full mt-[32px] text-black text-opacity-50 border-[2px] rounded-[6px]'>
      <div>
        <img className='' src={SearchIcon} alt='icon' />
      </div>
      <div className='w-full m-4'>
        <input
          className='w-full outline-none text-[16px]'
          type='text'
          placeholder='Filter by name...'
        />
      </div>
    </div>
  )
}
