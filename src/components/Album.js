import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class Album extends React.Component {
  render () {
    const { data } = this.props
    const { edges: photographs } = data.allMarkdownRemark

    return (
      <div className='flex justify-between flex-wrap'>
        {photographs &&
          photographs.map(({ node: photograph }) => (
            <div className='card' key={photograph.id}>
              {photograph.frontmatter.featuredimage ? (
                <div className='card-image'>
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: photograph.frontmatter.featuredimage,
                      alt: `featured image thumbnail for photograph ${
                        photograph.title
                      }`
                    }}
                  />
                </div>
              ) : null}
              <div className='card-body'>
                <p className='card-header'>
                  <Link className='' to={photograph.fields.slug}>
                    {photograph.frontmatter.title}
                  </Link>
                  <span> &bull; </span>
                  <span className=''>{photograph.frontmatter.date}</span>
                </p>

                <p className='card-content'>
                  {photograph.excerpt}
                  <br />
                  <br />
                  <Link className='' to={photograph.fields.slug}>
                    See More →
                  </Link>
                </p>
              </div>
            </div>
          ))}
      </div>
    )
  }
}

Album.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
}

export default () => (
  <StaticQuery
    query={graphql`
      query AlbumQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "photography" } } }
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
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <Album data={data} count={count} />}
  />
)
