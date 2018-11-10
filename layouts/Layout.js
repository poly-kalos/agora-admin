import Menu from '../components/Menu'
import Head from 'next/head'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Layout = (props) => (
  <>
    <Head>
      <title>Agora</title>
    </Head>
    <div style={layoutStyle}>
      <Menu />
      {props.children}
    </div>
  </>
)

export default Layout