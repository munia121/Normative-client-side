/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom"
import useAuth from "../Component/Hooks/useAuth"

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation()
  
    if (loading) return 'Loading...'
    if (user) return children
    return <Navigate to='/login' state={location.pathname} replace='true' />
  }
  
  
export default PrivateRoute