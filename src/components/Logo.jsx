import React from 'react'

export const Logo = () => {
  return (
    <div className='flex justify-center items-center pt-[68px] px-[24px] md:pt-[86px]'>
      <div>
        <img
          className='w-[320px] h-[104px] md:w-600px md:h-200px'
          src='logo.png'
          alt='logo'
        />
      </div>
    </div>
  )
}
