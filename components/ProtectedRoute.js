import Router from 'next/router'
import auth from './../helpers/auth';

const ProtectedRoute = (props) => {
  if (!auth.isAuthenticated()) {
    Router.push('/login')
  }
  return (
    <>
      {props.children}
    </>
  )
}

export default ProtectedRoute