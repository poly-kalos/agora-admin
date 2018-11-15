import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Menu = () => (
    <div>
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>About</a>
        </Link>
        <Link href="/admin">
          <a style={linkStyle}>Admin</a>
        </Link>
        <Link href="/login">
          <a style={linkStyle}>Login</a>
        </Link>
    </div>
)

export default Menu