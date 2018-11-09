import Layout from '../components/Layout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'


const PostLink = ({ post }) => (
  <li>
    <Link as={`/b/${post.id}`} href={`/blog?title=${post.title}`}>
      <a>{post.title}</a>
    </Link>
    <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
        font-family: "Arial";
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </li>
)

const Index = (props) => (
  <Layout>
  <h1>My Blog</h1>
    <ul>
      {props.posts.map((post) => (
        <PostLink key={post.id} post={post}/>
      ))}
    </ul>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(({show}) => (
        <li key={show.id}>
          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data,
    posts: [
      { id: 'hello-nextjs', title: 'Hello Next.js'},
      { id: 'learn-nextjs', title: 'Learn Next.js is awesome'},
      { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT'},
    ]
  }
}

export default Index