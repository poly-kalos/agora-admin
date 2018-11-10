import App, { Container } from 'next/app';
import AppProvider from './../store/AppProvider';
import Layout from '../layouts/Layout'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <AppProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AppProvider>
      </Container>
    );
  }
}

export default MyApp;