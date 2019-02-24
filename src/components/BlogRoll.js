import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="flex flex-col">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="flex my-4" key={post.id}>
              <article className="bg-white shadow-md rounded p-8">
                <Link
                  className="text-2xl no-underline text-black mb-1"
                  to={post.fields.slug}>
                  {post.frontmatter.title}
                </Link>

                <p className="text-sm mb-4">{post.frontmatter.date}</p>

                <p className="leading-normal mb-4">{post.excerpt}</p>
                <Link className="btn btn-blue" to={post.fields.slug}>
                  Keep Reading →
                </Link>
              </article>
            </div>
          ))}
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
