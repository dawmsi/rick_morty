import { googleLogout } from '@react-oauth/google'
import { useNavigate } from 'react-router-dom'
import { fetchUser } from '../utils'

export const AuthButton = () => {
  const user = fetchUser()

  const navigate = useNavigate()

  function logOut() {
    googleLogout()
    localStorage.removeItem('user')
    navigate('/')
  }

  const isAuth = !!user

  return (
    <button
      className='p-2 px-8 flex w-full justify-end'
      type='button'
      onClick={() => (isAuth ? logOut() : navigate('/login'))}
    >
      {isAuth ? (
        <>
          <img
            className='w-6 h-6 mx-2 rounded-xl object-cover'
            src={user.image}
            alt=''
          />
          Logout
        </>
      ) : (
        'Login'
      )}
    </button>
  )
}
