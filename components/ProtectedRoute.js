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

// if user is logged in -> refresh token then get userData to context api
// user logged out -> redirect to login then get userData to context api
// add custom _app.js for context api and layout components