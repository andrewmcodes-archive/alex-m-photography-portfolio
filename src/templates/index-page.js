import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import logo from '../img/logo/white-logo.svg'
import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({ image, title, subheading }) => (
  <div className="">
    <div
      className="h-three-quarter-screen sm:h-screen"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
      }}>
      <div className="h-three-quarter-screen sm:h-screen sm:flex sm:justify-end page-center px-2 text-center">
        <img
          src={logo}
          alt="AEM Photography"
          style={{ width: '14em', height: '10em' }}
          className="mb-12"
        />
        <h4 className="invisible text-white pb-2 align-baseline font-300 tracking-wider leading-loose">
          {subheading}
        </h4>
        <h1 className="invisible text-white font-lg">{title}</h1>
      </div>
    </div>
    <section className="d-container">
      <div className="shadow-lg h-full">
        <BlogRoll />
        <div className="my-8 sm:my-16 w-full text-center">
          <Link className="btn btn-blue" to="/blog">
            View all photos
          </Link>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        description
      }
    }
  }
`
