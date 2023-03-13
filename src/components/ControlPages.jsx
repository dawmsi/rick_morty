import { createPages } from '../utils'
import { getPageFromParams } from '../utils/getPageFromParams'

export const ControlPages = ({ pagesCount, searchParams, setSearchParams }) => {
  const page = getPageFromParams(searchParams)

  console.log(pagesCount, page)

  const btnsArr = []
  createPages(btnsArr, pagesCount, page)

  return (
    <div className='flex justify-center items-center mb-4'>
      {pagesCount > 1 &&
        btnsArr.map((currBtn) => {
          return (
            <button
              onClick={() => {
                setSearchParams((prevPage) => {
                  return { ...prevPage, page: currBtn }
                })
              }}
              className={`${
                page === currBtn && 'bg-[#222] text-white'
              } p-1 mx-2 transition-all rounded-[4px]`}
              type='button'
              key={`p${currBtn}`}
            >
              {currBtn}
            </button>
          )
        })}
    </div>
  )
}
