import React from 'react'
import PropTypes from 'prop-types'
import { PhotographyTemplate } from '../../templates/photography'

const PhotographyPreview = ({ entry, widgetFor }) => (
  <PhotographyTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
)

PhotographyPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default PhotographyPreview
