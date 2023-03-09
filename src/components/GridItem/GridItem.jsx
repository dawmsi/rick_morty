import TempImg from '../../assets/image.png'

export const GridItem = () => {
  return (
    <div
      style={{
        boxShadow:
          '0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.14)',
      }}
      className='flex flex-col justify-between h-[308px] w-[312px] md:w-[240px] md:h-[244px] mt-[8px] rounded-[4px] overflow-hidden item-shadow'
    >
      <div className=' h-full'>
        <img className='w-full h-full' src={TempImg} alt='img' />
      </div>
      <div className='px-4 py-[10px]'>
        <h2 className='font-medium text-[20px] leading-[30px]'>Rich Sanchez</h2>
        <p className='font-normal text-[14px] text-black text-opacity-60 leading-[21px]'>
          Human
        </p>
      </div>
    </div>
  )
}
