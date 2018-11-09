import Layout from '../components/Layout.js'
import { withRouter } from 'next/router'
import Markdown from 'react-markdown'

const source = `
  This is our blog post.  
  Yes. We can have a [link](http://www.google.com).  
  And we can have a title as well.  

  ### This is a title  

  And here's the content.  
`
export default withRouter((props) => (
  <Layout>
    <h1>{props.router.query.title}</h1>
      <Markdown className="markdown" source={source} />
    <style jsx global>{`
     .markdown {
       font-family: 'Arial';
     }

     .markdown a {
       text-decoration: none;
       color: blue;
     }

     .markdown a:hover {
       opacity: 0.6;
     }

     .markdown h3 {
       margin: 0;
       padding: 0;
       text-transform: uppercase;
     }
  `}</style>
  </Layout>
))