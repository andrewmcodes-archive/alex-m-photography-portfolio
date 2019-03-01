import React from 'react'
import { kebabCase } from 'lodash'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import BlogRoll from './BlogRoll'

class TagTabs extends React.Component {
  state = { tag: 'all' }
  _toggleModal(x) {
    this.setState({
      tag: x,
    })
  }
  render() {
    const { data } = this.props
    const { group: tags } = data.allMarkdownRemark

    return (
      <React.Fragment>
        <div className="flex">
          <ul className="taglist">
            {tags.map(tag => (
              <li key={tag.fieldValue}>
                <button
                  onClick={() => {
                    this._toggleModal(tag.fieldValue)
                  }}>
                  {tag.fieldValue} ({tag.totalCount})
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <BlogRoll queryTag={this.state.tag} />
        </div>
      </React.Fragment>
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
