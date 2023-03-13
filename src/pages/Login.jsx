import { useNavigate, useLocation } from 'react-router-dom'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'
import jwtDecode from 'jwt-decode'
import { saveUserlocaly, localKey } from '../utils'

export const Login = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const from = location.state?.from

  const responceGoogle = (responce) => {
    const userObject = jwtDecode(responce.credential)
    const { name, sub, picture, email } = userObject
    const doc = {
      _id: sub,
      _type: localKey,
      userName: name,
      image: picture,
      email: email
    }
    saveUserlocaly(doc)
    if (userObject) {
      navigate(from?.pathname || '/', {
        state: { prev: from && { search: from.search } },
        replace: true
      })
    }
  }

  return (
    <div className='flex flex-col justify-center items-center py-8'>
      <h1 className='text-4xl text-black'>Welcome</h1>
      <div className='flex flex-col p-4'></div>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_AUTH_TOKEN}>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            responceGoogle(credentialResponse)
          }}
          onError={() => {
            console.log('Login Failed')
          }}
        />
      </GoogleOAuthProvider>
    </div>
  )
}
