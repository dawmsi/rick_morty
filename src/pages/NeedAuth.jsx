import { useNavigate, useLocation } from 'react-router-dom'

export const NeedAuth = () => {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <div className='flex flex-col justify-center items-center h-full'>
      <h1 className='text-xl text-center'>
        First you need <br /> to
      </h1>
      <button
        className='m-2 p-2 bg-[#222] text-white rounded-md'
        onClick={() =>
          navigate('/login', { state: location?.state ?? '/', replace: true })
        }
      >
        Login
      </button>
    </div>
  )
}
