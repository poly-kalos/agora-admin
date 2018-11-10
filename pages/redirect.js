import React from 'react';
import auth from './../helpers/auth';

export default class extends React.Component {
  componentDidMount () {
    auth.handleAuthentication()
  }
  render() {
    return 'loading...';
  }
}