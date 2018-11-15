import Router from 'next/router'
import React from 'react'
// import auth from './../helpers/auth';

export default (Component) => (
  class WithAuth extends React.Component {
    static async getInitialProps({ req, res }) {
      const auth = false;

      if (req && !auth) {
        res.writeHead(302, { Location: '/login' })
        res.end()
        res.finished = true
      } else if (!auth) {
        document.location.pathname = '/login'
        Router.push('/login')
      }

    }

    render() {
      return <Component {...this.props} />
    }
  }
)

// if user is logged in -> refresh token then get userData to context api
// user logged out -> redirect to login then get userData to context api
// add custom _app.js for context api and layout components