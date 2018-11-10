import React, { Component } from 'react';
import { Provider } from './createContext';
import Router from 'next/router';

class AppProvider extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
    };
  }

  render() {
    const { children } = this.props;

    return (
      <Provider value={{
        state: this.state,
        setUser: (err, user) => {
          if(err) {
            console.log(err);
          } else {
            this.setState({
              user
            })
          }
        }
      }}
      >
        {children}
      </Provider>
    );
  }
}

export default AppProvider;
