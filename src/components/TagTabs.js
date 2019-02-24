import React from 'react'
import { kebabCase } from 'lodash'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'

class TagTabs extends React.Component {
  render() {
    const { data } = this.props
    const { group: tags } = data.allMarkdownRemark
    return (
      <div className="flex">
        <ul className="taglist">
          {tags.map(tag => (
            <li key={tag.fieldValue}>
              <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

TagTabs.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query TagTabsQuery {
        site {
          siteMetadata {
            title
          }
        }
        allMarkdownRemark(limit: 1000) {
          group(field: frontmatter___tags) {
            fieldValue
            totalCount
          }
        }
      }
    `}
    render={(data, count) => <TagTabs data={data} count={count} />}
  />
)
