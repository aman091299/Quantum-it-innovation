// This will prevent authenticated users from accessing this route
// import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

function OpenRoute({ children }) {
  // const { token } = useSelector((state) => state.auth)
  const token=localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null
  if (token === null) {
    return <Navigate to="/login" />
    
  } else {
    return children
  }
}
export default OpenRoute;