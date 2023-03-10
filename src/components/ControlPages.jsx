import { createPages } from '../service/pagination'

export const ControlPages = ({ pagesCount, page, setSearchParams }) => {
  const btnsArr = []
  createPages(btnsArr, pagesCount, page)

  return (
    <div className='flex justify-center items-center mb-4'>
      {pagesCount
        ? btnsArr.map((currBtn) => {
            return (
              <button
                onClick={() => {
                  setSearchParams({ page: currBtn })
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
          })
        : ''}
    </div>
  )
}
