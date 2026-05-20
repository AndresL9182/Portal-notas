import {
  Navigate
} from 'react-router-dom'

export default function
ProtectedRoute({
  children
}: any) {

  const token =
    localStorage.getItem(
      'token'
    )

  const googleToken =
    localStorage.getItem(
      'google_access_token'
    )

  if (
    !token &&
    !googleToken
  ) {

    return (
      <Navigate to="/" />
    )

  }

  return children

}