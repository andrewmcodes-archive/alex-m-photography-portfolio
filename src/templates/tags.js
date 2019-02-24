import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const postLinks = posts.map(post => (
      <div key={post.node.fields.slug} className="w-1/2">
        <Link to={post.node.fields.slug}>
          {/* <h2 className="is-size-2">{post.node.frontmatter.title}</h2> */}
          <img src={post.node.frontmatter.imageUrl} width="" alt="" />
        </Link>
      </div>
    ))
    const tag = this.props.pageContext.tag
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? '' : 's'
    } tagged with “${tag}”`

    return (
      <Layout>
        <section className="h-screen page-center">
          <Helmet title={`${tag} | ${title}`} />
          <div className="text-center mx-auto">
            <h1 className="mb-8">{tagHeader}</h1>
            <div className="flex flex-wrap mb-8">{postLinks}</div>
            <p>
              <Link to="/tags/" className="btn btn-blue">
                Browse all tags
              </Link>
            </p>
          </div>
        </section>
      </Layout>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            imageUrl
          }
        }
      }
    }
  }
`
