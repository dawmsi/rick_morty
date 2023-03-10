import { useEffect, useState } from 'react'
import SearchIcon from '../assets/search.svg'
import { getData } from '../service/getData'
import { useDebounce } from '../hooks/useDebounce'

export const SearchLine = ({ list, setList }) => {
  const localSK = 'lsk'

  const [searchInput, setSearchInput] = useState(
    localStorage.getItem(localSK) || '',
  )
  const [newData, setNewData] = useState(list)
  const debounced = useDebounce(searchInput, 400)

  function filterList(list) {
    getData(setNewData)
    setList(
      list.filter((item) =>
        item.name.toUpperCase().includes(searchInput.toUpperCase()),
      ),
    )
  }

  useEffect(() => {
    if (debounced) {
      filterList(newData)
      localStorage.setItem(localSK, searchInput)
    }
  }, [debounced])

  return (
    <div className='flex px-4 items-center w-full mt-[32px] text-black text-opacity-50 border-[2px] rounded-[6px]'>
      <div
        onClick={() => {
          filterList(newData)
        }}
      >
        <img className='cursor-pointer' src={SearchIcon} alt='icon' />
      </div>
      <div className='w-full m-4'>
        <input
          value={searchInput}
          className='w-full outline-none text-[16px]'
          type='text'
          placeholder='Filter by name...'
          onChange={(e) => {
            setSearchInput(e.target.value)
          }}
        />
      </div>
    </div>
  )
}
