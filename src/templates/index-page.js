import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
// import logo from '../img/logo/white-logo.svg'
import photoSession from '../img/photo-session.svg'
import Layout from '../components/Layout'
import Album from '../components/Album'
import SectionWrapper from '../components/SectionWrapper'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro
}) => (
  <div>
    <SectionWrapper>
      <section className='text-gray-100'>
        <img src={photoSession} className='w-2/3 mx-auto' alt='header' />
        <h1 className=''>{heading}</h1>
        <h4 className=''>{subheading}</h4>
      </section>
    </SectionWrapper>
    <section className='bg-indigo-600 mt-8 py-8 text-gray-100'>
      <SectionWrapper>
        <div className='md:flex'>
          <div className='w-full md:w-1/3 mr-auto'>
            <h2 className=''>{mainpitch.title}</h2>
          </div>
          <div className='w-full md:w-1/2'>
            <p className=''>{mainpitch.description}</p>
          </div>
        </div>
      </SectionWrapper>
    </section>
    <SectionWrapper>
      <section className='text-gray-100 my-8'>
        <div className='mt-8 text-gray-100'>
          <h2 className='mb-4'>Latest photos</h2>
          <Album />
          {/* <div className=''>
            <Link className='' to='/photography'>
              Read more
            </Link>
          </div> */}
        </div>
      </section>
    </SectionWrapper>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  })
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
        mainpitch={frontmatter.mainpitch}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
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
        mainpitch {
          title
          description
        }
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
