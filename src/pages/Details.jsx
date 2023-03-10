import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchItem } from '../service/getData'

export const Details = () => {
  const { id } = useParams()
  const [item, setItem] = useState({})

  useEffect(() => {
    fetchItem(setItem, id)
  }, [id])

  const { name, gender, status, species, image, origin, type } = item

  return (
    <div className='flex flex-col justify-between'>
      <div>
        <div className='overflow-hidden mt-[45px] md:mt-2 h-[158px] w-[158px] md:w-[300px] md:h-[300px] m-auto text-[#F2F2F7] border-[5px] rounded-full'>
          <img
            className='object-cover h-full w-full'
            src={image}
            alt='avatar'
          />
        </div>
        <div className='text-center my-[34px] font-normal text-[32px]'>
          <h1>{name}</h1>
        </div>
      </div>
      <div className=' m-auto p-[2px] tracking-[0.15px] min-w-[312px] pr-8 md:w-[413px] '>
        <h3 className='text-[#8E8E93] font-medium md:text-center text-[20px] mb-4 md:mb-12'>
          Informations
        </h3>

        <div className='border-b-[1px] py-[9px] px-4'>
          <h4 className='font-bold text-base '>Gender</h4>
          <p className='font-normal text-sm leading-5'>{gender}</p>
        </div>
        <div className='border-b-[1px] py-[9px] px-4'>
          <h4 className='font-bold text-base '>Status</h4>
          <p className='font-normal text-sm leading-5'>{status}</p>
        </div>
        <div className='border-b-[1px] py-[9px] px-4'>
          <h4 className='font-bold text-base '>Specie</h4>
          <p className='font-normal text-sm leading-5'>{species}</p>
        </div>
        <div className='border-b-[1px] py-[9px] px-4'>
          <h4 className='font-bold text-base '>Origin</h4>
          <p className='font-normal text-sm leading-5'>{origin?.name}</p>
        </div>
        <div className='border-b-[1px] py-[9px] px-4'>
          <h4 className='font-bold text-base '>Type</h4>
          <p className='font-normal text-sm leading-5'>
            {!type ? 'Unknown' : type}
          </p>
        </div>
      </div>
    </div>
  )
}
