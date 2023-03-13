import { useLocation, Navigate, Outlet } from 'react-router-dom'
import { fetchUser } from '../utils'

export const ProtectedRoute = () => {
  const isAuth = !!fetchUser()
  const location = useLocation()

  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate
      to='/needAuth'
      state={{
        from: { ...location, search: location.state?.prev?.search }
      }}
      replace={true}
    />
  )
}
